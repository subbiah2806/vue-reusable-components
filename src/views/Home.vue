<template>
  <div id="Home"></div>
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
  mounted() {}
  isMobile() {
    return window.innerWidth < 600;
  }
}
</script>

<style scoped lang="scss">
#Home {
}
</style>
