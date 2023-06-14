<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useCounter } from "../composables/useCounter";

// Use the composable
const { count, increment, decrement } = useCounter();
</script>
