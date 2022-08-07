<template>
  <div class="max-w-xl text-center">
    <h2>{{ "Oopps" }}</h2>
    <div class="my-4">
      <p>{{ "Your age is over our accepted limit." }}.</p>
      <p>{{ "We are sorry but we cannot insure you now" }}</p>
    </div>
    <Button text="Ok :(" @click="handleRedirection" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Error-Component",
  components: {
    Button,
  },
  methods: {
    handleRedirection() {
      this.$router.push({
        path: "/",
      });
    },
  },
});
</script>
