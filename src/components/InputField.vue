<template>
  <div class="mb-4 text-left">
    <label class="block mb-2 text-sm font-bold text-gray-700" :for="name">
      {{ label }}
    </label>
    <input
      class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      :min="min"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="handleChange"
    />
    <span class="text-sm text-error" v-if="errorMessage">{{
      errorMessage
    }}</span>
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
    errorMessage: {
      type: String,
      default: "",
    },
  },
  setup(_, { emit }) {
    const handleChange = (e: Event) => emit("input", e);
    return {
      handleChange,
    };
  },
});
</script>
