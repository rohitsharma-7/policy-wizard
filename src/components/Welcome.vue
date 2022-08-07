<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div class="w-full max-w-xl p-4 text-center bg-primary rounded-xl">
      <h2 class="mb-4 text-3xl font-bold">{{ "Hello There!" }}</h2>
      <p class="mb-4 font-semibold">
        {{ "Let's buy some insurance. It is going to take only a few steps" }}
      </p>
      <Button @click="handleRedirection" text="Start" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Welcome-Component",
  methods: {
    handleRedirection() {
      this.$router.push({
        path: "/policy",
      });
    },
  },
  components: { Button },
});
</script>
