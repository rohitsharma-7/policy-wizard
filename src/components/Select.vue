<template>
  <div class="mb-4 text-left">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
      {{ label }}
    </label>
    <select
      class="form-select form-select-lg w-full py-2 px-3 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      @change="handleChange"
      :name="name"
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
