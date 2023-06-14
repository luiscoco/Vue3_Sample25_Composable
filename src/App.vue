<template>
  <div id="app">
    <CounterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterComponent from "../src/components/CounterComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    CounterComponent,
  },
});
</script>
