<template>
  <div id="Home">
    <ListView :list="this.list" />
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
  private list = ["list1", "list2", "list3"];
}
</script>

<style scoped lang="scss"></style>
