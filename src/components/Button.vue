<template>
  <button :class="btnClass" @click="handleClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { clsx } from "@/shared/helpers";

export default defineComponent({
  name: "Button-Component",
  emits: ["click"],
  props: {
    className: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    text: {
      required: true,
      type: String,
    },
    type: {
      type: String as () => "filled" | "outlined",
      default: "filled",
    },
    value: {
      type: String,
    },
  },
  computed: {
    btnClass() {
      const classes = clsx(
        this.type !== "filled"
          ? "bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded mr-2"
          : "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded",
        this.disabled && "cursor-not-allowed opacity-50",
        this.className
      );
      return classes;
    },
  },
  setup(_, { emit }) {
    const handleClick = (e: Event) => emit("click", e);
    return {
      handleClick,
    };
  },
});
</script>
