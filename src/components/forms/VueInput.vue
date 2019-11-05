<template>
  <md-field :class="['fullWidth', hasError ? 'md-invalid' : '']">
    <label>{{ label }}</label>
    <md-input
      v-if="!autogrow"
      v-model="inputValue"
      @blur="checkError"
      @input.native="checkError"
      :type="password ? 'password' : 'text'"
    ></md-input>
    <md-textarea
      v-else
      md-autogrow
      v-model="inputValue"
      @blur="checkError"
      @input.native="checkError"
    ></md-textarea>
    <span v-if="hasError" class="md-error">{{ hasError }}</span>
  </md-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueInput extends Vue {
  @Prop({ required: true }) private label!: string;
  @Prop({ required: true }) private value!: string;
  @Prop() private required!: boolean;
  @Prop() private maxLength!: number;
  @Prop() private minLength!: number;
  @Prop() private pattern!: RegExp;
  @Prop() private autogrow!: boolean;
  @Prop() private customError!: (val: string) => string;
  @Prop() private password!: boolean;
  private hasError = "";
  @Emit("input")
  setValue(val: string) {}
  get inputValue() {
    return this.value;
  }
  set inputValue(val) {
    this.setValue(val);
  }
  checkError($event: { target: HTMLInputElement }) {
    const value: string = $event.target.value;
    this.hasError =
      this.required && !value
        ? "This field is required"
        : this.maxLength && value.length > this.maxLength
        ? `please restrict your input tp ${this.maxLength} characters`
        : this.minLength && value.length < this.minLength
        ? `please enter minimum of ${this.minLength} characters`
        : this.pattern && !this.pattern.test(value)
        ? "pattern does not match"
        : this.checkCustomError(value);
    $event.target.setCustomValidity(this.hasError);
  }
  checkCustomError(value: string) {
    return this.customError ? this.customError(value) : "";
  }
}
</script>

<style scoped lang="scss"></style>
