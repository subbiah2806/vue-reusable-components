<template>
  <div id="Home">
    <div class="row col-12 m-0 p-0 justify-content-around">
      <ListView :list="this.list" class="col-md-4 col-sm-12 col-12" />
      <div class="col-md-4 text-center align-self-center p-text" @click="goto">
        asadasa
      </div>
      <ListView :list="this.list2" class="col-md-4 col-sm-12" />
    </div>
    <div class="row col-12 p-0 m-0 justify-content-center">
      <Form class="col-md-4 col-sm-8 col-8" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";
import Form from "@/examples/Form.vue";
@Component({
  components: {
    ListView,
    Form
  }
})
export default class Home extends Vue {
  private list = ["list1"];
  private list2 = ["sss", "aaaa1", "aaaa1"];
  private goto() {
    this.$router.push("ss");
  }
}
</script>

<style scoped lang="scss"></style>
