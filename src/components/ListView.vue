<template>
  <div id="ListView">
    <div v-for="(value, key) in list" v-bind:key="key">
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ListView extends Vue {
  @Prop({ default: [], required: true }) private list!: String[];
}
</script>

<style scoped lang="scss"></style>
