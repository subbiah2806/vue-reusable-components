<template>
  <div id="Home" class="row justify-content-around">
    <ListView :list="this.list" class="col-md-4 col-sm-12" />
    <div class="col-md-4 text-center align-self-center" @click="goto">
      asadasa
    </div>
    <ListView :list="this.list2" class="col-md-4 col-sm-12" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";

@Component({
  components: {
    ListView
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
