<template>
  <div class="slide">
    <HeaderComp />
    <div class="close-button-container">
      <div class="close-button" @click="Close">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="30.0886"
            height="30.0886"
            rx="15.0443"
            transform="matrix(1 0 0 -1 0.911438 30.8496)"
            fill="#EAEAEA"
          />
          <mask
            id="mask0_231_126"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="25"
            height="25"
          >
            <rect
              x="3.96295"
              y="3.37695"
              width="24"
              height="24"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_231_126)">
            <path
              d="M9.63065 23.4653L15.963 17.133L22.2953 23.4653L23.513 22.2476L17.1807 15.9153L23.513 9.58298L22.2953 8.36523L15.963 14.6975L9.63065 8.36523L8.4129 9.58298L14.7452 15.9153L8.4129 22.2476L9.63065 23.4653Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="textbox">
      <div></div>
      <h1>Was ist der Todomat?</h1>
      <p lang="de">
        Der Todomat ist der erste Hinterlassenschafts-Konfigurator der Welt.
        <br />
        Er wurde entwickelt, um deinen Abschied selbstbestimmter und <br />
        nachhaltiger zu gestalten.
      </p>
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
      </div>
    </div>
  </div>
</template>

<script setup>
function Close() {
  navigateTo("/start");
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

@media only screen and (max-width: 1020px) {
  .info-left {
    display: none;
  }

  .info {
    border-top: none;
  }

  .textbox p {
    padding-bottom: 0;
  }

  h1 {
    width: 300px;
  }
  p {
    width: 95%;
    hyphens: auto;
  }
  .info-container {
    hyphens: auto;
    width: 95%;
    margin-bottom: 50px;
  }

  br {
    display: none;
  }
  .info {
    padding: 10px 0 10px 0;
  }
}
</style>
-
