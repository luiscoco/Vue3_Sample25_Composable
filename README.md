# composable-sample

In Vue 3, composables are a way to organize and reuse code logic in a component-based architecture using the Composition API. Composables are essentially functions that encapsulate reusable logic and can be shared across multiple components.

To demonstrate the usage of composables in Vue 3 with the Composition API, let's create an example. Imagine we want to create a counter component with the ability to increment and decrement the value. We can extract the counter logic into a composable function.

Here's an example of how you can define a composable for the counter:

```vue
<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Define a composable function
const useCounter = () => {
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

// Use the composable
const { count, increment, decrement } = useCounter();
</script>
```

In the above example, we define a composable function called useCounter using the const keyword. Inside the composable, we create a reactive state count using the ref function from the Vue Composition API. We also define two methods increment and decrement that modify the count state.

Within the <script lang="ts" setup> block, we import ref from the Vue Composition API and call the useCounter composable. By invoking the composable function, we destructure and assign the returned values and methods to the variables count, increment, and decrement.

Finally, we use these variables in the template section to display the count value and attach the appropriate event handlers to the buttons.

With this approach, the counter logic is encapsulated within the composable, making it reusable across different components. You can easily use the useCounter composable in other components by calling it and accessing the returned values and methods.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
