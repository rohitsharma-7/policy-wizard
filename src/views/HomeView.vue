<template>
  <Welcome />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Welcome from "@/components/Welcome.vue";

@Options({
  components: {
    Welcome,
  },
})
export default class HomeView extends Vue {}
</script>
