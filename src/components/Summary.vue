<template>
  <div class="max-w-xl text-center">
    <h2>Summary</h2>
    <div class="my-4">
      <p class="mb-2">{{ "Name: " + name }}</p>
      <p class="mb-2">{{ "Age: " + age }}</p>
      <p class="mb-2">{{ "Where do you live: " + region }}</p>
      <p class="mb-2">{{ "Package: " + plan }}</p>
      <p class="mb-2">{{ "Premium: " + amount + currencyCode }}</p>
    </div>
    <div>
      <Button @click="handleGoBack" text="Back" :type="'outlined'" />
      <Button @click="handleBuy" text="Buy" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button.vue";

export default defineComponent({
  name: "Summary-Component",
  components: {
    Button,
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    handleRedirection(page: string) {
      if (this.$router) {
        this.$router.push({
          query: {
            page,
          },
        });
      }
    },
    handleGoBack() {
      this.$router.back();
    },
    handleBuy() {
      this.$router.push({
        path: "/",
      });
    },
  },
  computed: {
    age() {
      const value: number = this.store.getters["getAge"];
      return value;
    },
    name() {
      const value: string = this.store.getters["getName"];
      return value;
    },
    plan() {
      const value: string = this.store.getters["getPlan"];
      return value;
    },
    region() {
      const value: string = this.store.getters["getRegion"];
      return value;
    },
    rate() {
      const value: number = this.store.getters["getRate"];
      return value;
    },
    currencyCode() {
      const value: string = this.store.getters["getCurrencyCode"];
      return value;
    },
    amount() {
      const value: number = this.store.getters["getAmount"];
      return value;
    },
  },
});
</script>
