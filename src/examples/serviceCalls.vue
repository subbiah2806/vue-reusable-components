<template>
  <div id="ServiceCalls"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class ServiceCalls extends Vue {
  mounted() {
    console.log("called");
    axios
      .get(
        "https://my-json-server.typicode.com/subbiah28062/typicode_db/posts/1"
      )
      .then(data => console.log("get", data.data));
    axios
      .post(
        "https://my-json-server.typicode.com/subbiah28062/typicode_db/posts",
        {
          title: "post 2"
        }
      )
      .then(data => console.log("post", data.data));
    axios
      .put(
        "https://my-json-server.typicode.com/subbiah28062/typicode_db/posts/1",
        {
          title: "updaated"
        }
      )
      .then(data => console.log("put", data.data));
    axios
      .patch(
        "https://my-json-server.typicode.com/subbiah28062/typicode_db/posts/1",
        {
          title: "updaated"
        }
      )
      .then(data => console.log("patch", data.data));
    axios
      .delete(
        "https://my-json-server.typicode.com/subbiah28062/typicode_db/posts/1"
      )
      .then(data => console.log("delete", data.data));
  }
}
</script>

<style scoped lang="scss"></style>
