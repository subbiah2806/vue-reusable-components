<template>
  <form
    id="Form"
    @submit.prevent="checkForm"
    class="row flex-column align-items-center text-break"
  >
    <VueInput
      label="input"
      v-model="form.input"
      :required="true"
      :password="true"
    />
    <md-divider></md-divider>
    <VueCheckbox label="checkbox" info="true/false" v-model="form.checkbox" />
    <VueCheckbox
      label="multiSelect"
      info="select multi"
      v-model="form.multiCheckbox"
      :options="['jack', 'john', 'mike']"
    />
    <VueRadio
      label="radio button"
      info="select one"
      v-model="form.radio"
      :options="['one', 'two']"
    />
    <VueSelect
      label="dropdown"
      :options="['A', 'B', 'C']"
      v-model="form.dropdown"
    />
    <VueSelect
      label="multi-dropdown"
      :options="['A', 'B', 'C']"
      v-model="form.multiDropdown"
      :multiple="true"
    />
    <VueSwitch label="switch" info="click" v-model="form.switch" />
    <md-card-actions>
      <md-button type="submit" class="md-accent rounded-pill md-raised"
        >SUBMIT</md-button
      >
    </md-card-actions>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import {
  VueInput,
  VueCheckbox,
  VueRadio,
  VueSelect,
  VueSwitch
} from "../components/forms/index";

@Component({
  components: {
    VueInput,
    VueCheckbox,
    VueRadio,
    VueSelect,
    VueSwitch
  }
})
export default class Form extends Vue {
  form = {
    input: "",
    checkbox: "",
    multiCheckbox: ["jack", "john"],
    radio: "one",
    dropdown: "",
    multiDropdown: [],
    switch: true
  };
  get dataComputed() {
    return this.form.input;
  }
  @Watch("form.checkbox")
  dataWatch(value: string) {
    console.log(value);
  }
  @Watch("form.checked")
  checkedWatch(value: boolean) {
    console.log(value);
  }
  checkForm() {
    console.log("submitted", this.form);
  }
}
</script>

<style scoped lang="scss">
.fullWidth {
  width: 100%;
}
</style>
