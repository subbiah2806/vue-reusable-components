<template>
  <div id="Form" class="row flex-column align-items-center p-text">
    <span>Multiline message is:</span>
    <p class="text-wrap">{{ form.data }}</p>
    <br />
    <input v-model="form.data" placeholder="edit me" class="fullWidth" />
    <br />
    <br />

    <div>
      <input type="checkbox" id="checkbox" v-model="form.checked" />
      <label for="checkbox">{{ form.checked }}</label>
      <br />
      <br />
    </div>

    <div>
      <input
        type="checkbox"
        id="jack"
        value="Jack"
        v-model="form.checkedNames"
      />
      <label for="jack">Jack</label>
      <input
        type="checkbox"
        id="john"
        value="John"
        v-model="form.checkedNames"
      />
      <label for="john">John</label>
      <input
        type="checkbox"
        id="mike"
        value="Mike"
        v-model="form.checkedNames"
      />
      <label for="mike">Mike</label>
    </div>
    <span>Checked names: {{ form.checkedNames }}</span>
    <br />
    <br />

    <div>
      <input type="radio" id="one" value="One" v-model="form.picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="form.picked" />
      <label for="two">Two</label>
    </div>
    <span>Picked: {{ form.picked }}</span>
    <br />
    <br />

    <div></div>

    <select v-model="form.selected" class="fullWidth">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ form.selected }}</span>
    <br />
    <br />

    <select v-model="form.selected_m" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ form.selected_m }}</span>
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  form = {
    data: "pre",
    checked: false,
    checkedNames: [],
    picked: "",
    selected: "",
    selected_m: []
  };
  @Watch("form.data")
  dataWatch(value: string) {
    console.log(value);
  }
  @Watch("form.checked")
  checkedWatch(value: boolean) {
    console.log(value);
  }
}
</script>

<style scoped lang="scss">
.fullWidth {
  width: 100%;
}
</style>
