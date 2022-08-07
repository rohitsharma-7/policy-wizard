<template>
  <div class="flex items-center justify-center w-full h-screen">
    <div>
      <h1 class="mb-4 text-2xl font-semibold">
        {{ "The page you're looking for does not exists" }}
      </h1>
      <Button @click="handleRedirection" text="Home" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "PageNotFoundView",
  components: { Button },
  methods: {
    handleRedirection() {
      this.$router.push({
        path: "/",
      });
    },
  },
});
</script>
