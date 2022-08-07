<template>
  <ErrorComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ErrorComponent from "@/components/ErrorComponent.vue";

export default defineComponent({
  name: "OverAgeUsersView",
  components: { ErrorComponent },
});
</script>
