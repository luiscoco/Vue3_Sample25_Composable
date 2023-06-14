import { ref } from "vue";

// Define a composable function
export const useCounter = () => {
  // Define the reactive state
  const count = ref(0);

  // Define the methods
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  // Return the necessary values and methods
  return {
    count,
    increment,
    decrement,
  };
};
