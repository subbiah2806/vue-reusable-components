<template>
  <div id="VueRadio" class="fullWidth customMdForm">
    <p>{{ label }}:</p>
    <code>{{ info }}</code>
    <div class="mdElem">
      <md-radio
        type="radio"
        class="m-0 pr-2"
        v-for="(value, key) in options"
        v-bind:key="key"
        v-model="inputValue"
        :value="value"
        >{{ value }}</md-radio
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueInput extends Vue {
  @Prop({ required: true }) private label!: String;
  @Prop() private info!: string;
  @Prop({ required: true }) private value!: string;
  @Prop({ required: true }) private options!: Array<string>;
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
