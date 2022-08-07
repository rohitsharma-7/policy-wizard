<template>
  <PolicyForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PolicyForm from "@/components/PolicyForm.vue";

export default defineComponent({
  name: "PolicyView",
  components: { PolicyForm },
});
</script>
