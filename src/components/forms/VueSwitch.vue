<template>
  <div class="fullWidth customMdForm">
    <p>{{ label }}:</p>
    <code>{{ info }}</code>
    <md-switch v-model="inputValue">{{ inputValue || false }}</md-switch>
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
