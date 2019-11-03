<template>
  <div id="ChangeTheme">
    <button class="theme-button s" @click="changeTheme">
      <div class="current-theme p rounded-circle"></div>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class ChangeTheme extends Vue {
  listOfThemes = ["default", "deep-purple"];
  @Emit("updated:theme")
  emit(theme: string) {
    console.log("finishes function then emits");
  }
  changeTheme = () => {
    const currentThemeIndex = this.listOfThemes.findIndex(
      theme => theme === this.$store.getters.getTheme
    );
    const setTheme =
      currentThemeIndex + 1 === this.listOfThemes.length
        ? 0
        : currentThemeIndex + 1;
    this.$store.dispatch("setTheme", this.listOfThemes[setTheme]);
    this.emit(this.listOfThemes[setTheme]);
  };
}
</script>

<style scoped lang="scss">
.theme-button {
  position: fixed;
  top: 40%;
  right: 0px;
  height: 3rem;
  width: 3rem;
  border: 0;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  .current-theme {
    height: 2rem;
    width: 2rem;
  }
}
</style>
