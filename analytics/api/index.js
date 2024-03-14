require('dotenv').config()
const PocketBase = require('pocketbase/cjs')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const pb = new PocketBase('http://185.162.250.233:10017')
let cachedEntries = null

const authenticate = async () => {
  return pb.admins.authWithPassword(process.env.PB_MAIL, process.env.PB_PW)
}

// Common function to retrieve all entries
const retrieveAllEntries = async () => {
  const authData = await authenticate()
  return pb.collection('user_data').getFullList()
}

const updateCache = async () => {
  try {
    const allEntries = await retrieveAllEntries()
    cachedEntries = allEntries
    console.log('Cache updated at:', new Date())
  } catch (error) {
    console.error('Error updating cache:', error)
  } finally {
    // Schedule the next update after 1 minute
    setTimeout(updateCache, 60 * 1000)
  }
}

function calculateRoundedPercentages (optionCounts, optionKeys, participants) {
  const calculatePercentage = optionKey =>
    Math.floor((optionCounts[optionKey] / participants) * 100)

  const percentages = optionKeys.map(calculatePercentage)

  // Calculate rounding error
  const roundingError =
    100 - percentages.reduce((sum, percent) => sum + percent, 0)

  // Distribute rounding error based on the fractional parts
  const fractionalParts = optionKeys.map(
    key => (optionCounts[key] / participants) * 100 - calculatePercentage(key)
  )

  // Adjust percentages based on rounding error
  for (let i = 0; i < optionKeys.length; i++) {
    percentages[i] += Math.round(
      fractionalParts[i] *
        (roundingError / fractionalParts.reduce((sum, part) => sum + part, 0))
    )
  }

  const result = {}

  optionKeys.forEach((key, index) => {
    result[key] = percentages[index]
  })
  return result
}

function calculatePercentages (optionCounts, optionKeys, totalParticipants) {
  const percentages = {}

  optionKeys.forEach(key => {
    const count = optionCounts[key] || 0
    const percentage = (count / totalParticipants) * 100
    percentages[key] = Math.round(percentage)
  })

  return percentages
}

function combineOptionCounts (optionCounts1, optionCounts2) {
  // Merge the two objects
  const combinedOptionCounts = { ...optionCounts1, ...optionCounts2 }

  // Sum values for duplicate keys
  for (const key in combinedOptionCounts) {
    if (
      optionCounts1.hasOwnProperty(key) &&
      optionCounts2.hasOwnProperty(key)
    ) {
      combinedOptionCounts[key] = optionCounts1[key] + optionCounts2[key]
    }
  }

  return combinedOptionCounts
}

// Initial cache update
updateCache()

const countParticipants = allEntries => {
  let participants = allEntries.length
  allEntries.forEach(element => {
    if (Object.keys(element.data).length === 0) {
      participants--
    }
  })
  return participants
}

const calcReport01 = allEntries => {
  const entriesWithA1 = allEntries.filter(entry => entry.data.A1)

  // Extract content of F2 for each entry
  const contentOfA1 = entriesWithA1.map(entry => entry.data.A1)

  const optionCounts = contentOfA1.reduce((acc, entry) => {
    const option = entry.options[0]
    acc[option] = (acc[option] || 0) + 1
    return acc
  }, {})

  const participants = contentOfA1.length

  // console.log("Option Counts:", optionCounts);

  const roundedPercentages = calculateRoundedPercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  // console.log("Rounded Percentages:", roundedPercentages);

  const report = {
    totalEntries: participants,
    ...roundedPercentages
  }

  // console.log("Final Report:", report);

  return report
}

const calcReport02 = allEntries => {
  const entriesWithA2 = allEntries.filter(entry => entry.data.A2)

  // Extract content of F2 for each entry
  const contentOfA2 = entriesWithA2.map(entry => entry.data.A2)
  const participants = contentOfA2.length

  const optionCounts = contentOfA2.reduce((acc, entry) => {
    const option = entry.options[0]
    acc[option] = (acc[option] || 0) + 1
    return acc
  }, {})

  const roundedPercentages = calculateRoundedPercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  const report = {
    totalEntries: participants,
    ...roundedPercentages
  }
  return report
}

const calcReport04 = allEntries => {
  const entriesWithB1_1 = allEntries.filter(entry => entry.data.B1_1)
  const entriesWithB1_2 = allEntries.filter(entry => entry.data.B1_2)

  // Extract content of F2 for each entry
  const contentOfB1_1 = entriesWithB1_1.map(entry => entry.data.B1_1)
  const contentOfB1_2 = entriesWithB1_2.map(entry => entry.data.B1_2)

  // count the options in a forEach Loop because there are multiple answers
  const optionCountsB1_1 = contentOfB1_1.reduce((acc, entry) => {
    entry.options.forEach(option => {
      acc[option] = (acc[option] || 0) + 1
    })
    return acc
  }, {})

  const optionCountsB1_2 = contentOfB1_2.reduce((acc, entry) => {
    entry.options.forEach(option => {
      acc[option] = (acc[option] || 0) + 1
    })
    return acc
  }, {})

  const participants = contentOfB1_1.length + contentOfB1_2.length
  const optionCountsB1 = combineOptionCounts(optionCountsB1_1, optionCountsB1_2)

  const percentagesB1 = calculatePercentages(
    optionCountsB1,
    Object.keys(optionCountsB1),
    participants
  )

  const report = {
    totalEntries: participants,
    ...percentagesB1
  }
  return report
}

const calcReport05 = allEntries => {
  const entriesWithC1 = allEntries.filter(entry => entry.data.C1)

  // Extract content of C1 for each entry
  const contentOfC1 = entriesWithC1.map(entry => entry.data.C1)

  // If the option C1.6 (Mir egal / nicht relevant) has been chosen along to other options, remove the other options and only keep the C1.6 option
  contentOfC1.forEach(entry => {
    if (entry.options.includes('C1.6')) {
      entry.options = ['C1.6']
    }
  })

  // count the options in a forEach Loop because there are multiple answers
  const optionCounts = contentOfC1.reduce((acc, entry) => {
    entry.options.forEach(option => {
      acc[option] = (acc[option] || 0) + 1
    })
    return acc
  }, {})

  const participants = contentOfC1.length

  const percentagesC1 = calculatePercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  const report = {
    totalEntries: participants,
    ...percentagesC1
  }
  return report
}

const calcReport06 = allEntries => {
  const entriesWithC3 = allEntries.filter(entry => entry.data.C3)

  // Extract content of C3 for each entry
  const contentOfC3 = entriesWithC3.map(entry => entry.data.C3)

  const optionCounts = contentOfC3.reduce((acc, entry) => {
    const option = entry.options[0]
    acc[option] = (acc[option] || 0) + 1
    return acc
  }, {})

  const participants = contentOfC3.length

  const roundedPercentages = calculateRoundedPercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  const report = {
    totalEntries: participants,
    ...roundedPercentages
  }

  return report
}

const calcReport07 = allEntries => {
  const entriesWithF2 = allEntries.filter(entry => entry.data.F1)

  // Extract content of F2 for each entry
  const contentOfF1 = entriesWithF2
    .map(entry => entry.data.F1)
    .filter(entry => entry.options.length > 0)

  const optionCounts = contentOfF1.reduce((acc, entry) => {
    const option = entry.options[0]
    acc[option] = (acc[option] || 0) + 1
    return acc
  }, {})

  const participants = contentOfF1.length

  const roundedPercentages = calculateRoundedPercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  const report = {
    totalEntries: participants,
    ...roundedPercentages
  }

  return report
}

const calcReport08 = allEntries => {
  const entriesWithF2 = allEntries.filter(entry => entry.data.F2)

  // Extract content of F2 for each entry
  const contentOfF2 = entriesWithF2.map(entry => entry.data.F2)

  const optionCounts = contentOfF2.reduce((acc, entry) => {
    const option = entry.options[0]
    acc[option] = (acc[option] || 0) + 1
    return acc
  }, {})

  const participants = contentOfF2.length

  const roundedPercentages = calculateRoundedPercentages(
    optionCounts,
    Object.keys(optionCounts),
    participants
  )

  const report = {
    totalEntries: participants,
    ...roundedPercentages
  }

  return report
}

// GET endpoint for retrieving
app.get('/api', async (req, res) => {
  try {
    if (!cachedEntries) {
      // If cache is not initialized, fetch and set it
      cachedEntries = await retrieveAllEntries()
    }

    const reports = {}
    reports.counter = countParticipants(cachedEntries)
    reports.report01 = calcReport01(cachedEntries)
    reports.report02 = calcReport02(cachedEntries)
    reports.report04 = calcReport04(cachedEntries)
    reports.report05 = calcReport05(cachedEntries)
    reports.report06 = calcReport06(cachedEntries)
    reports.report07 = calcReport07(cachedEntries)
    reports.report08 = calcReport08(cachedEntries)
    return res.status(200).json({ reports })
  } catch (error) {
    console.error('Error retrieving all entries:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
