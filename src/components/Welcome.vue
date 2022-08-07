<template>
  <div class="max-w-xl text-center">
    <h2 class="mb-2">{{ "Hello There!" }}</h2>
    <p class="mb-2">
      {{ "Let's buy some insurance. It is going to take only a few steps" }}
    </p>
    <button
      class="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-600"
      @click="handleRedirection"
    >
      {{ "Start" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome-Component",
  methods: {
    handleRedirection() {
      this.$router.push({
        path: "/policy",
      });
    },
  },
});
</script>
