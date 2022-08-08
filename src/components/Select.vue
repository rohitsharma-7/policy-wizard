<template>
  <div class="mb-4 text-left">
    <label class="block mb-2 text-sm font-bold text-gray-700" :for="name">
      {{ label }}
    </label>
    <select
      class="w-full px-3 py-2 m-0 text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded form-select form-select-lg bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      @change="handleChange"
      :name="name"
      :value="value"
    >
      <option
        v-for="(option, index) in options"
        v-bind:key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Select-Component",
  emits: ["change"],
  props: {
    label: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    options: {
      required: true,
      type: Array as () => string[],
    },
    value: {
      required: true,
      type: String,
    },
  },
  setup(_, { emit }) {
    const handleChange = (e: Event) => {
      emit("change", e);
    };
    return {
      handleChange,
    };
  },
});
</script>
