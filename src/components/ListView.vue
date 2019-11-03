<template>
  <div id="ListView" class="row py-2 px-0 m-0">
    <div v-for="(value, key) in list" v-bind:key="key" class="col-12">
      <md-button class="col-12 my-2 mx-0 rounded-pill p-text p">
        {{ value }}
      </md-button>
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
