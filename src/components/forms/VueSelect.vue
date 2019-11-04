<template>
  <md-field class="fullWidth">
    <label :for="label">{{ label }}</label>
    <md-select
      v-model="inputValue"
      class="fullWidth border-0 rounded"
      :id="label"
      :multiple="multiple"
      :required="required"
    >
      <md-option
        v-for="(value, key) in options"
        v-bind:key="key"
        :value="value"
        >{{ value }}</md-option
      >
    </md-select>
  </md-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueInput extends Vue {
  @Prop({ required: true }) private label!: String;
  @Prop({ required: true }) private value!: string | string[];
  @Prop({ required: true }) private options!: Array<string>;
  @Prop() private required!: boolean;
  @Prop() private multiple!: boolean;
  @Emit("input")
  setValue(val: string | string[]) {}
  get inputValue() {
    return this.value;
  }
  set inputValue(val) {
    this.setValue(val);
  }
}
</script>

<style scoped lang="scss"></style>
