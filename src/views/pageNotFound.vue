<template>
  <div id="pageNotFound">
    <span class="neg">ERROR 404</span>
    <br />
    <br />
    <p>
      The page is missing or never was written. You can wait and see if it
      becomes available again, or you can restart your computer.
    </p>
    <p class="leftAlign">
      * Send us an e-mail to notify this and try it later.
      <br />* Press SHIFT + B to restart the Application. You will <br />&nbsp;
      lose unsaved information in any programs that are running.
    </p>
    <br />Press any link to continue
    <div class="menu">
      <a href="/">
        <div>Home</div>
      </a>
      <a href="javascript:;" @click="$router.go(-1)">
        <div>go-back</div>
      </a>
    </div>
  </div>
</template>
<script>
import { Component, Vue, Prop } from "vue-property-decorator";
export default class App extends Vue {
  mounted() {
    document.addEventListener("keypress", e => {
      e = e || window.event;
      if (e.shiftKey && e.key === "B") {
        this.$router.push("");
      }
    });
  }
}
</script>
<style scoped lang="scss">
#pageNotFound {
  * {
    color: white;
  }
  padding: 20vh 10vw;
  height: 100vh;
  width: 100vw;
  background: #0000aa;
  color: #ffffff;
  font-family: courier;
  font-size: 12pt;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .blink {
    color: yellow;
  }
  .neg {
    background: #fff;
    color: #0000aa;
    padding: 2px 8px;
    font-weight: bold;
  }

  @media (max-width: 575.98px) {
  }
  @media (min-width: 576px) {
    .leftAlign {
      margin: 30px 100px;
      text-align: left;
    }
  }

  .menu {
    text-align: center;
    margin-top: 50px;
    a {
      margin: 0 10px;
    }
  }
}
</style>
