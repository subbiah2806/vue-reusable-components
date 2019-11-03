<template>
  <div class="container-fluid">
    <router-view />
    <ChangeTheme v-if="displayThemeChanger" v-on:updated:theme="currentTheme" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ChangeTheme from "@/components/ChangeTheme.vue";

@Component({
  components: {
    ChangeTheme
  }
})
export default class App extends Vue {
  displayThemeChanger = true;
  @Watch("$route")
  onPropertyChanged(to: any, from: any) {
    // Do stuff with the watcher here.
  }
  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log("created");
  }
  beforeMount() {
    console.log("beforeMount");
  }
  mounted() {
    console.log("mounted");
    this.displayThemeChanger = this.$route.meta.displayThemeChanger !== false;
  }
  beforeUpdate() {
    console.log("beforeUpdate");
  }
  updated() {
    console.log("updated");
  }
  destroyed() {
    console.log("destroyed");
  }
  currentTheme(theme: string) {
    console.log("currentTheme got through event $emit", theme);
  }
}
</script>
