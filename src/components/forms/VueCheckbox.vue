<template>
  <div class="fullWidth customMdForm">
    <p>{{ label }}:</p>
    <code>{{ info }}</code>
    <div class="mdElem">
      <md-checkbox
        class="m-0 pr-2"
        v-for="(value, key) in options"
        v-bind:key="key"
        v-model="inputValue"
        :value="value"
        >{{ value }}</md-checkbox
      >
      <md-checkbox v-if="!options" class="m-0 pr-2" v-model="inputValue">{{
        [true, false].includes(inputValue) ? inputValue : "null"
      }}</md-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueCheckbox extends Vue {
  @Prop({ required: true }) private label!: String;
  @Prop() private info!: string;
  @Prop({ required: true }) private value!: boolean | string[];
  @Prop() private options!: Array<string>;
  @Emit("input")
  setValue(val: boolean | string[]) {}
  get inputValue() {
    return this.value;
  }
  set inputValue(val) {
    this.setValue(val);
  }
}
</script>

<style scoped lang="scss"></style>
