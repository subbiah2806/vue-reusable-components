<template>
  <div id="Home">
    <div class="row m-0 p-0 justify-content-around">
      <ListView :list="this.list" class="col-md-4 col-sm-12 col-12" />
      <md-button
        class="col-md-3 col-8 m-0 p-0 align-self-center rounded-pill"
        to="/ss"
      >
        page not found
      </md-button>
      <ListView :list="this.list2" class="col-md-4 col-sm-12" />
    </div>
    <div class="sticky row col-12 py-2 p-0 m-0 justify-content-center p"></div>
    <div class="row col-12 p-0 m-0 justify-content-center">
      <Form class="col-md-4 col-sm-8 col-8" />
    </div>
    <div class="scroll row col-12 p-0 m-0 justify-content-center p-text"></div>
    <ServiceCalls />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";
import Form from "@/examples/Form.vue";
import ServiceCalls from "@/examples/serviceCalls.vue";

@Component({
  components: {
    ListView,
    Form,
    ServiceCalls
  }
})
export default class Home extends Vue {
  private list = ["list1"];
  private list2 = ["sss", "aaaa1", "aaaa1"];
  mounted() {
    const getSum = (num: number): number => {
      let sum: number = 0;
      let deno: number;
      Array(num)
        .fill(0)
        .forEach(() => {
          deno = deno ? deno + 3 : 1;
          sum += 1 / deno;
          console.log(sum);
        });
      return sum;
    };
    console.log("getsum", getSum(6).toFixed(2));
  }
}
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 0;
  z-index: 998;
}
.scroll {
  height: 400vh;
}
</style>
