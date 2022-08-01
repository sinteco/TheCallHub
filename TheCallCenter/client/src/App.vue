<template>
  <div id="app">
    <div id="theWarning" class="alert alert-warning" v-if="error">{{ error }}</div>
    <router-view />
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import store from "./store";
    //import callHub from "./callHub.js";

  export default {
    store,
    computed: mapState([ "error" ]),
        //mounted() {
        //    callHub.client.on("NewCall", function (newCall) {
        //        store.commit("addCall", newCall);
        //    });
        //    callHub.start();
        //}
  }
</script>
