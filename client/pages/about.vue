<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <div></div>
      <h1>Wozu der Todomat?</h1>
    </div>
    <div class="info-container">
      <div class="info-left">
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="info-right">
        <div class="info">
          <p lang="de">
            Die Vorkehrungen, die du durch den Todomaten triffst, <br />
            können die um dich Trauernden entlasten und trösten.
          </p>
        </div>
        <div class="info">
          <p lang="de">
            Die Auseinandersetzung mit deinem Tod kann dir dabei helfen, dein
            <br />
            Leben bewusster zu gestalten, und Mut zu Veränderungen machen.
          </p>
        </div>
        <div class="info">
          <p lang="de">
            Falls du schon typische Vorkehrungen getroffen hast (Testament,
            <br />
            Organspendeausweis, Patient:innenverfügung etc.), hilft dir der
            <br />
            Todomat zu prüfen, ob du an alles gedacht hast, was dir wichtig ist.
          </p>
        </div>
        <div class="info">
          <p lang="de">
            Der Todomat gibt dir Denkanstöße, wie du deinen Tod <br />
            umweltfreundlicher gestalten kannst.
          </p>
        </div>
        <div class="button-container">
          <button @click="navigate('start')" class="button-white">
            Zurück
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function navigate(path) {
  navigateTo(`/${path}`);
}
</script>

<style scoped>
.info-container {
  display: flex;
  justify-content: center;
}

.info-left {
  margin: 0 50px 0 0;
}

.info-right {
  margin-top: 35px;
}

.info {
  padding: 18px 0 18px 0;
  border-top: solid;
}

.textbox p {
  padding-bottom: 5px;
}

.icon {
  width: 60px;
  height: 60px;
  margin: 29px 0 0 0;
}
.info p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 18.15px;
  text-align: left;
  margin: 0px;
}

.button-container {
  justify-content: end;
}

.button-white {
  margin-right: 0;
}

@media only screen and (max-width: 1020px) {
  .info-left {
    display: none;
  }

  .info-right {
    margin-top: 0;
  }

  .info {
    border-top: none;
    display: flex;
    justify-content: center;
  }

  .textbox p {
    padding-bottom: 0;
  }

  h1 {
    width: 330px;
    padding-bottom: 10px;
  }
  p {
    width: 100%;
  }
  .info-container {
    hyphenate-limit-chars: auto 5;
    width: 100%;
    margin-bottom: 50px;
  }

  br {
    display: none;
  }
  .info {
    padding: 10px 0 10px 0;
  }

  .button-container {
    justify-content: center;
  }

  .button-white {
    margin-top: 20px;
  }
}
</style>
-
