<template>
  <div id="ListView" class="row py-2 px-4 m-0">
    <md-button
      v-for="(value, key) in list"
      v-bind:key="key"
      class="col-12 my-2 mx-0 rounded-pill md-raised"
    >
      {{ value }}
    </md-button>
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
