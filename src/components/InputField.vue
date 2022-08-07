<template>
  <div class="mb-4 text-left">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :min="min"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField-Component",
  emits: ["input"],
  props: {
    label: {
      required: true,
      type: String,
    },
    min: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    value: [Number, String],
  },
  setup(_, { emit }) {
    const handleChange = (e: Event) => emit("input", e);
    return {
      handleChange,
    };
  },
});
</script>
