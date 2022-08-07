<template>
  <div class="max-w-xl text-center">
    <h2 class="mb-2">{{ "Tell us about yourself" }}</h2>
    <div class="px-8 pt-6 pb-8 mb-4">
      <InputField
        label="Name"
        name="name"
        placeholder="Name"
        :value="name"
        @input="handleChange"
      />
      <InputField
        label="Age"
        min="0"
        name="age"
        placeholder="Age"
        type="number"
        :value="age"
        @input="handleChange"
      />
      <Select
        label="Where do you live"
        name="region"
        :options="regions"
        @change="handleChange"
      />
      <div class="mb-4 text-left">
        <div
          v-for="(option, index) in plans"
          v-bind:key="index"
          class="my-2 cursor-pointer"
        >
          <label class="flex items-center">
            <input
              type="radio"
              name="plan"
              :value="option"
              :checked="plan === option"
              @change="handleChange"
            />
            <span class="inline-block ml-2 text-gray-800 form-check-label">{{
              option + getExtraPremiumAmount(option)
            }}</span>
          </label>
        </div>
      </div>
      <div class="my-4">
        <h2>{{ "Your premium is" + ": " + amount + currencyCode }}</h2>
      </div>
      <div>
        <Button @click="handleGoBack" text="Back" :type="'outlined'" />
        <Button @click="handleGoNext" :disabled="disabled" text="Next" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import InputField from "@/components/InputField.vue";
import Select from "@/components/Select.vue";
import Button from "@/components/Button.vue";
import { PLAN, PLANS, REGIONS } from "@/shared/constants";

export default defineComponent({
  name: "Policy-Form",
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
    getExtraPremiumAmount(plan: string) {
      const value: number = this.age * 10 * this.rate;
      if (!value) {
        return "";
      }
      switch (plan) {
        case PLAN.SAFE:
          return " (+" + value * 0.5 + `${this.currencyCode}, 50%)`;
        case PLAN.SUPER_SAFE:
          return " (+" + value * 0.75 + `${this.currencyCode}, 75%)`;
        default:
          return "";
      }
    },
    handleGoBack() {
      this.$router.back();
    },
    handleGoNext() {
      if (!this.disabled) {
        if (this.age > 100) {
          this.$router.push({
            path: "/error",
          });
        } else {
          this.$router.push({
            path: "/summary",
          });
        }
      }
    },
    handleChange(e: Event) {
      const fieldName = (e.target as HTMLInputElement).name;
      const value = (e.target as HTMLInputElement).value;
      switch (fieldName) {
        case "age":
          this.store.commit("setAge", value);
          break;
        case "name":
          this.store.commit("setName", value);
          break;
        case "plan":
          this.store.commit("setPlan", value);
          break;
        case "region":
          this.store.commit("setRegion", value);
          break;
        default:
          break;
      }
    },
  },
  components: { InputField, Select, Button },
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
    disabled() {
      const name: string = this.name;
      const age: number = this.age;
      const isDisabled: boolean = name.trim() === "" || age === 0;
      return isDisabled;
    },
    extraPremium() {
      switch (this.plan) {
        case PLAN.STANDARD:
          return 0;
        case PLAN.SAFE:
          return 0.5;
        case PLAN.SUPER_SAFE:
          return 0.75;
        default:
          return 0;
      }
    },
  },
  setup() {
    const store = useStore();
    return {
      plans: PLANS,
      regions: REGIONS,
      store,
    };
  },
});
</script>
