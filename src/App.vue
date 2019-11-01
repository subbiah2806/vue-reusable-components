<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

export default class App extends Vue {}
</script>
