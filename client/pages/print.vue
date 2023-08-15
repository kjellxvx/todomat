<template>
  <NuxtLayout name="custom">
    <div id="pdf-container" class="pdf-container">
      <div class="header-container">
        <p class="receipt">Receipt</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="28"
          viewBox="0 0 103 28"
          fill="none"
        >
          <path
            d="M47.2633 9.96547C46.5645 9.56156 45.7297 9.35254 44.7809 9.35254H40.5845C40.5577 9.35254 40.5321 9.36318 40.5132 9.38212C40.4943 9.40105 40.4836 9.42673 40.4836 9.45352V18.1143C40.4836 18.1411 40.4943 18.1667 40.5132 18.1857C40.5321 18.2046 40.5577 18.2153 40.5845 18.2153H44.7184C45.4783 18.2287 46.2317 18.0721 46.9235 17.7568C47.6192 17.4276 48.2029 16.9009 48.6022 16.2422C49.0343 15.5002 49.256 14.6543 49.2435 13.7955C49.2573 13.0346 49.0951 12.2809 48.7696 11.5932C48.4385 10.9139 47.9145 10.3476 47.2633 9.96547ZM43.6214 12.1284H44.6034C44.7924 12.1258 44.9811 12.1441 45.166 12.1829C45.3323 12.2134 45.4891 12.2826 45.6238 12.3849C45.7442 12.4844 45.8364 12.614 45.891 12.7605C46.0002 13.0597 46.0505 13.3772 46.0392 13.6955C46.0406 13.8922 46.0264 14.0888 45.9969 14.2832C45.9661 14.5376 45.8774 14.7815 45.7377 14.9961C45.6416 15.135 45.508 15.2436 45.3526 15.3091C45.1282 15.3984 44.8881 15.4406 44.6468 15.4334H43.6214V12.1284Z"
            fill="black"
          />
          <path
            d="M30.4977 9.35262H22.0615C22.0348 9.35262 22.0091 9.36326 21.9902 9.3822C21.9713 9.40113 21.9607 9.42682 21.9607 9.4536V12.085C21.9607 12.1118 21.9713 12.1375 21.9902 12.1564C22.0091 12.1754 22.0348 12.186 22.0615 12.186H24.7143V18.1154C24.7143 18.1422 24.7249 18.1678 24.7438 18.1868C24.7627 18.2057 24.7884 18.2163 24.8151 18.2163H27.7522C27.7789 18.2163 27.8046 18.2057 27.8235 18.1868C27.8424 18.1678 27.853 18.1422 27.853 18.1154V12.186H30.5017C30.5285 12.186 30.5541 12.1754 30.573 12.1564C30.592 12.1375 30.6026 12.1118 30.6026 12.085V9.4536C30.6026 9.43999 30.5999 9.42652 30.5945 9.414C30.5892 9.40148 30.5814 9.39016 30.5716 9.38073C30.5618 9.3713 30.5502 9.36395 30.5375 9.35912C30.5248 9.35429 30.5113 9.35208 30.4977 9.35262Z"
            fill="black"
          />
          <path
            d="M70.5283 9.35254H66.8602C66.8399 9.3526 66.8201 9.35881 66.8033 9.37034C66.7866 9.38187 66.7737 9.39819 66.7664 9.41717L65.1865 13.54L63.7245 9.41919C63.7174 9.39967 63.7045 9.38281 63.6876 9.37088C63.6706 9.35896 63.6504 9.35255 63.6297 9.35254H59.7771C59.7504 9.35254 59.7247 9.36318 59.7058 9.38212C59.6869 9.40106 59.6763 9.42674 59.6763 9.45352V18.1143C59.6763 18.1411 59.6869 18.1667 59.7058 18.1857C59.7247 18.2046 59.7504 18.2153 59.7771 18.2153H62.5942C62.6209 18.2153 62.6466 18.2046 62.6655 18.1857C62.6844 18.1667 62.695 18.1411 62.695 18.1143V14.7639L63.9735 18.1496C63.9808 18.1686 63.9937 18.1849 64.0104 18.1965C64.0272 18.208 64.047 18.2142 64.0673 18.2143H66.1847C66.2046 18.2142 66.224 18.2082 66.2405 18.197C66.257 18.1859 66.2698 18.1701 66.2774 18.1516L67.6366 14.777V18.1143C67.6366 18.1411 67.6472 18.1667 67.6661 18.1857C67.685 18.2046 67.7107 18.2153 67.7374 18.2153H70.5293C70.556 18.2153 70.5817 18.2046 70.6006 18.1857C70.6195 18.1667 70.6301 18.1411 70.6301 18.1143V9.45352C70.6301 9.44017 70.6275 9.42696 70.6223 9.41464C70.6172 9.40233 70.6097 9.39115 70.6002 9.38176C70.5908 9.37237 70.5795 9.36495 70.5672 9.35994C70.5548 9.35493 70.5416 9.35241 70.5283 9.35254Z"
            fill="black"
          />
          <path
            d="M88.4228 9.35254H79.9856C79.9589 9.35254 79.9332 9.36318 79.9143 9.38212C79.8954 9.40106 79.8848 9.42674 79.8848 9.45352V12.085C79.8848 12.1118 79.8954 12.1374 79.9143 12.1564C79.9332 12.1753 79.9589 12.1859 79.9856 12.1859H82.6353V18.1153C82.6353 18.1421 82.6459 18.1678 82.6649 18.1867C82.6838 18.2056 82.7094 18.2163 82.7362 18.2163H85.6732C85.7 18.2163 85.7256 18.2056 85.7445 18.1867C85.7635 18.1678 85.7741 18.1421 85.7741 18.1153V12.1859H88.4238C88.4505 12.1859 88.4762 12.1753 88.4951 12.1564C88.514 12.1374 88.5246 12.1118 88.5246 12.085V9.45352C88.5246 9.44017 88.522 9.42696 88.5169 9.41464C88.5117 9.40233 88.5042 9.39115 88.4948 9.38176C88.4853 9.37237 88.474 9.36495 88.4617 9.35994C88.4493 9.35493 88.4361 9.35241 88.4228 9.35254Z"
            fill="black"
          />
          <path
            d="M77.984 9.41615C77.9765 9.39737 77.9636 9.38126 77.9469 9.36992C77.9302 9.35857 77.9104 9.35252 77.8902 9.35254H74.8352C74.8149 9.3526 74.7951 9.3588 74.7783 9.37033C74.7616 9.38186 74.7487 9.39819 74.7414 9.41717L71.4776 18.0779C71.4722 18.0931 71.4704 18.1094 71.4725 18.1253C71.4747 18.1413 71.4805 18.1566 71.4897 18.1698C71.4989 18.1831 71.5111 18.1939 71.5253 18.2015C71.5395 18.209 71.5553 18.213 71.5714 18.2132H74.5771C74.5979 18.2132 74.6182 18.2066 74.6352 18.1945C74.6522 18.1824 74.665 18.1653 74.6718 18.1456L75.1689 16.7137H77.4879L77.9921 18.1466C77.9991 18.1659 78.0118 18.1827 78.0285 18.1946C78.0453 18.2065 78.0653 18.213 78.0858 18.2132H81.2286C81.2447 18.213 81.2605 18.209 81.2747 18.2015C81.2889 18.1939 81.3011 18.1831 81.3103 18.1698C81.3195 18.1564 81.3253 18.1409 81.3272 18.1247C81.3292 18.1086 81.3272 18.0921 81.3214 18.0769L77.984 9.41615ZM76.7741 14.3216H75.8606L76.3153 13.0251L76.7741 14.3216Z"
            fill="black"
          />
          <path
            d="M38.0417 9.99378C37.2936 9.45759 36.3589 9.17486 35.3385 9.17486C34.8724 9.17271 34.4082 9.23523 33.9592 9.36065C33.072 9.60755 32.2918 10.1424 31.741 10.8814C31.1481 11.6771 30.8336 12.6787 30.8336 13.7774C30.8307 14.3309 30.9157 14.8814 31.0856 15.4081C31.3624 16.2863 31.9161 17.0509 32.6636 17.5872C33.4504 18.1284 34.3861 18.4108 35.3405 18.395C35.7864 18.3969 36.2306 18.3395 36.6614 18.2244C37.5611 17.9877 38.3565 17.4576 38.9219 16.7178C39.5349 15.91 39.8586 14.9002 39.8586 13.7814C39.861 13.2533 39.7832 12.728 39.6277 12.2233C39.3575 11.3261 38.8002 10.5426 38.0417 9.99378ZM34.0086 13.7774C33.9965 13.3751 34.0722 12.975 34.2304 12.605C34.3225 12.3969 34.4723 12.2195 34.662 12.0941C34.8638 11.9708 35.0972 11.9093 35.3335 11.9174C35.5669 11.9099 35.7976 11.9698 35.9979 12.0901C36.1847 12.2105 36.3333 12.3818 36.4264 12.5838C36.5925 12.9591 36.6717 13.3671 36.6583 13.7774C36.6702 14.177 36.5959 14.5744 36.4406 14.9426C36.3488 15.1562 36.1976 15.3389 36.005 15.4687C35.8037 15.5936 35.5701 15.6561 35.3335 15.6485C35.1102 15.655 34.8895 15.599 34.6963 15.4869C34.5039 15.367 34.3496 15.1947 34.2516 14.9901C34.0803 14.6096 33.9988 14.1946 34.0137 13.7774H34.0086Z"
            fill="black"
          />
          <path
            d="M57.0595 9.99378C56.3113 9.4576 55.3767 9.17486 54.3573 9.17486C53.8912 9.17263 53.427 9.23516 52.978 9.36066C52.091 9.60797 51.3109 10.1428 50.7598 10.8814C50.1669 11.6771 49.8524 12.6787 49.8524 13.7774C49.8497 14.3308 49.9344 14.8812 50.1034 15.4081C50.3809 16.2859 50.9345 17.0503 51.6814 17.5872C52.4685 18.1286 53.4045 18.4109 54.3593 18.395C54.8049 18.3968 55.2487 18.3394 55.6791 18.2244C56.5789 17.9877 57.3743 17.4576 57.9397 16.7178C58.5527 15.91 58.8774 14.9002 58.8774 13.7814C58.8795 13.2533 58.8013 12.7279 58.6455 12.2233C58.3753 11.3261 57.818 10.5426 57.0595 9.99378ZM53.0324 13.7774C53.0203 13.3751 53.096 12.975 53.2543 12.605C53.3463 12.3972 53.4956 12.2199 53.6848 12.0941C53.8869 11.9706 54.1207 11.9091 54.3573 11.9174C54.5907 11.91 54.8214 11.9699 55.0218 12.0901C55.2085 12.2103 55.3569 12.3817 55.4493 12.5838C55.6156 12.959 55.6953 13.367 55.6822 13.7774C55.6942 14.1768 55.6206 14.5741 55.4664 14.9426C55.3743 15.1564 55.2228 15.339 55.0298 15.4687C54.8289 15.5936 54.5956 15.6561 54.3593 15.6485C54.1358 15.6547 53.9148 15.5988 53.7211 15.4869C53.5288 15.3672 53.3748 15.1948 53.2774 14.9901C53.1033 14.6102 53.0195 14.1951 53.0324 13.7774Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="code-container">
        <div class="code-box">
          <p class="p1">
            Persönlicher Code für die Fortführung Deiner Konfiguration auf
            todomat.org:
          </p>
          <div class="code-char-container">
            <div class="char-underline" v-for="char in userToken" :key="char">
              <div class="char-container">
                <p class="p2">{{ char }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="qr-code-box">
          <div class="mark-container">
            <div class="marks-top">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
            <div class="marks-bottom">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
          </div>
          <div class="qr-code">
            <qrcode-vue :value="url" :size="qrSize" level="H" />
          </div>
        </div>
      </div>
      <p class="p3">
        Du kannst Deine Eingaben jederzeit anpassen und aktualisieren. <br />
        Bitte sicher aufbewahren und hinterlegen!
      </p>
      <div v-if="noTodos == false">
        <p class="p3">
          Gut gemacht! Du hast dir Zeit genommen, dir wichtige Gedanken über
          deinen Tod und den damit einher gehenden Abschied zu machen.
        </p>

        <p class="p3">
          <span
            >Suche dir ein To-Do aus, mit dem du (am besten noch heute) <br />
            beginnen möchtest. Für den Start hast du dich entschieden <br />
            für die Kategorie:
          </span>
          <span class="p4"> {{ category }}</span>
        </p>
        <div class="bottom-container">
          <div class="todo-mark-container">
            <div class="marks-top">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
          </div>

          <div class="todos-container">
            <div class="todo" v-for="(todo, index) in printTodos" :key="index">
              <div class="checkbox"></div>
              <div class="todo-text">
                <p class="p2">{{ todo }}</p>
              </div>
            </div>
          </div>

          <div class="todo-mark-container">
            <div class="marks-bottom">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="noTodos == true">
        <p class="p3">
          Du hast alle Fragen so beantwortet, dass es keine Todos gibt.
        </p>
      </div>
      <p class="footer">ein Projekt von xtopien.org</p>
      <p class="side-date">Tag der Konfiguration {{ formattedDate }}</p>
    </div>
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import html2pdf from "html2pdf.js";
import QrcodeVue from "qrcode.vue";
import { saveData } from "@/scripts/savedata.js";

const loading = ref(false);
// const url = ref("http://localhost:3000/return");
const url = ref("https://todomat.org/return");
// const qrSize = 38.65;
const qrSize = 77.3;
const userToken = useUserToken();
const todos = useTodos();
const selectedTodo = useSelectedTodo();
const printTodos = ref([]);
const noTodos = ref(true);
const data = useData();
const category = ref("");

const date = new Date();

// Get day, month, and year from the date
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
const year = date.getFullYear();

// Format the date as DD/MM/YYYY
const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);

async function Print() {
  // console.log("USER TOKEN");
  // console.log(userToken.value);
  await saveData(data.value, todos.value, userToken.value);

  url.value += `?code=${userToken.value}`; // Append the userToken.value to the home URL
  // console.log(url.value);

  exportToPDF();
  await delay(10000);
  navigateTo("/?local=true");
}

const exportToPDF = () => {
  html2pdf(document.getElementById("pdf-container"), {
    margin: 0,
    filename: "Todomat.pdf",
    image: { type: "pdf", quality: 0.98 },
    html2canvas: { dpi: 300, letterRendering: true },
    // jsPDF: { unit: "px", format: [310, 457], orientation: "portrait" },
    jsPDF: { unit: "px", format: [620, 914], orientation: "portrait" },
  });
};

function transformTodos() {
  printTodos.value = Object.entries(todos.value)
    .filter(
      ([key, value]) =>
        key.startsWith(selectedTodo.value.letter) && Array.isArray(value)
    )
    .flatMap(([key, value]) => value);

  if (printTodos.value.length === 0) {
    noTodos.value = true;
  } else {
    noTodos.value = false;
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(() => {
  loading.value = true;
  category.value = selectedTodo.value.title;
  transformTodos();
  Print();
});
</script>

<style scoped>
.pdf-container {
  position: relative;
  /* height: 425px;
  width: 283px;
  padding: 15px 16px 15px 9px; 
  border-width: 1px;*/
  width: 566px;
  height: 850px;
  padding: 30px 32px 30px 18px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
.header-container {
  display: flex;
  justify-content: space-between;
  /* margin: 0 0 4px 4px; */
  margin: 0 0 8px 8px;
}
.code-container {
  display: flex;
  justify-content: space-between;
  /* margin: 0 0 10px 0; */
  margin: 0 0 20px 0;
}

.code-box {
  /* width: 166.87px;
  height: 65px;
  border-radius: 10px;
  border-width: 1px; */
  width: 333.74px;
  height: 130px;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

.qr-code-box {
  /* width: 65px;
  height: 65px; */
  width: 130px;
  height: 130px;
  position: relative;
}

.mark-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.todo-mark-container {
  display: flex;
  flex-direction: column;
  /* margin: 0px 0px 0px 7px; */
  margin: 0px 0px 0px 14px;
}

.mark {
  position: relative;
  /* width: 13px;
  height: 13px; */
  width: 26px;
  height: 26px;
}

.marks-top {
  display: flex;
  justify-content: space-between;
}

.marks-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.mark-horizontal {
  position: absolute;
  border-style: solid;
  border-color: black;
  /* width: 13px;
  height: 6.5px;
  border-width: 0 0 0.4px 0; */
  width: 26px;
  height: 13px;
  border-width: 0 0 0.8px 0;
}

.mark-vertical {
  position: absolute;
  border-style: solid;
  border-color: black;
  /* width: 6.5px;
  height: 13px;
  border-width: 0 0.4px 0 0px; */
  width: 13px;
  height: 26px;
  border-width: 0 0.8px 0 0;
}

.qr-code {
  /* width: 38.65px;
  height: 38.65px; */
  width: 77.3px;
  height: 77.3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: black;
  color: black; */
}

.code-char-container {
  display: flex;
  justify-content: space-between;
  /* padding: 10px 5px 0px 5px; */
  padding: 20px 10px 0px 10px;
}

.char-underline {
  border-style: solid;
  border-color: black;
  /* width: 11.54px;
  border-width: 0 0 0.4px 0px;
  margin: 1px; */
  width: 23.08px;
  border-width: 0 0 0.8px 0;
  margin: 2px;
}

.char-container {
  /* padding: 2px; */
  padding: 4px;
  display: flex;
  justify-content: center;
}

.p1 {
  font-family: "IBMPlexSans-SemiBold";
  /* margin: 9px 0 0 6px;
  width: 127.51px;
  font-size: 7px; */
  margin: 18px 0 0 12px;
  width: 255.02px;
  font-size: 14px;
}

.p2 {
  font-family: "IBMPlexSans";
  /* font-size: 6px; */
  font-size: 12px;
}

.p3 {
  /* width: 232.77px;
  margin: 0 0 5px 7px;
  font-size: 7px; */
  width: 465.54px;
  margin: 0 0 10px 14px;
  font-size: 14px;
}

.p4 {
  font-family: "IBMPlexSans-SemiBold";
  border-style: solid;
  border-color: black;
  /* font-size: 7px;
  border-width: 0 0 0.4px 0px; */
  font-size: 14px;
  border-width: 0 0 0.8px 0;
}

.receipt {
  font-family: "IBMPlexSans-SemiBold";
  /* font-size: 10px; */
  font-size: 20px;
}

.logo {
  /* font-size: 45px; */
  font-size: 90px;
  font-family: "IBMPlexSans-Bold";
}

.todos-container {
  /* margin: 6px 0 0 25px; */
  margin: 12px 0 0 50px;
  width: 100%;
}
.checkbox {
  border-style: solid;
  /* width: 4.85px;
  height: 4.85px;
  border-width: 0.4px;
  margin: 1.7px 6px 0 0; */
  width: 9.7px;
  height: 9.7px;
  border-width: 0.8px;
  margin: 3.4px 12px 0 0;
}
.todo-text {
  /* width: 201.57px; */
  width: 403.14px;
}

.todo {
  display: flex;
  /* margin: 0 0 7px 0; */
  margin: 0 0 14px 0;
}

.loading-container {
  background-color: white;
}

.bottom-container {
  /* margin: 15px 0 0 0; */
  margin: 30px 0 0 0;
}

.footer {
  font-family: "IBMPlexSans-SemiBold";
  position: absolute;
  /* font-size: 5px;
  bottom: 11px;
  right: 16px; */
  font-size: 10px;
  bottom: 22px;
  right: 32px;
}
.side-date {
  font-family: "IBMPlexSans-SemiBold";
  position: absolute;
  transform: rotate(90deg);
  /* font-size: 5px;
  top: 160px;
  right: -21px; */
  font-size: 10px;
  top: 285px;
  right: -42px;
}
</style>
