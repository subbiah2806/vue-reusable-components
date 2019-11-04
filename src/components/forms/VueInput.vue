<template>
  <md-field :class="['fullWidth', hasError ? 'md-invalid' : '']">
    <label>{{ label }}</label>
    <md-input
      v-model="inputValue"
      :required="required"
      @blur="checkError"
      :maxlength="maxlength"
      minLength="3"
      :type="password ? 'password' : 'text'"
    ></md-input>
    <span v-if="hasError" class="md-error">{{ hasError }}</span>
  </md-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class VueInput extends Vue {
  @Prop({ required: true }) private label!: String;
  @Prop({ required: true }) private value!: string;
  @Prop() private required!: boolean;
  @Prop() private maxlength!: number;
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
  checkError($event: any) {
    this.hasError =
      this.required && !$event.target.value ? "This field is required" : "";
  }
}
</script>

<style scoped lang="scss"></style>
