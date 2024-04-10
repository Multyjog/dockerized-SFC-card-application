<template>
  <form @submit.prevent="onSubmit" class="inputs">
    <textarea
      class="border-light"
      id="vue-code"
      placeholder="Vue.js code"
      rows="10"
      cols="50"
      v-model="formData.vueCode"
    ></textarea>
    <textarea
      class="border-light"
      id="css-code"
      placeholder="CSS code"
      rows="10"
      cols="50"
      v-model="formData.cssCode"
    ></textarea>
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<{
  (
    e: "submit",
    value: { vueCode: string | null; cssCode: string | null }
  ): void;
}>();

const formData = ref({
  vueCode: null,
  cssCode: null,
});
const onSubmit = () => {
  emit("submit", formData.value);
};
</script>

<style scoped>
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
