<template>
  <md-field id="VueInput" class="fullWidth">
    <label>{{ label }}</label>
    <md-input v-model="inputValue"></md-input>
  </md-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueInput extends Vue {
  @Prop({ required: true }) private label!: String;
  @Prop({ required: true }) private value!: string;
  @Emit("input")
  setValue(val: string) {}
  get inputValue() {
    return this.value;
  }
  set inputValue(val) {
    this.setValue(val);
  }
}
</script>

<style scoped lang="scss"></style>
