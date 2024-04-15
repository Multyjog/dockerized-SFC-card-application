<template>
  Клиентская страница
  <div class="client-page">
    <CustomCard
      :overrideHTML="overrideHTML"
      :applyCustomHTML="applyCustomHTML"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineAsyncComponent } from "vue";
import { IFormData } from "./interfaces.ts";
import api from "./api.ts";

const CustomCard = defineAsyncComponent(
  () => import("../../korvax-test-admin/src/components/CustomCard.vue")
);
onMounted(() => {
  fetchItems();
});
const overrideHTML = ref("");

const applyCustomHTML = computed(() => {
  return overrideHTML.value && overrideHTML.value.length ? true : false;
});
const fetchItems = async () => {
  try {
    const response = await api.get("/data");
    setNewTemplate(response.data);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
const setNewTemplate = (data: IFormData) => {
  overrideHTML.value = data.vueCode;
};
</script>

<style>
.client-page {
  max-width: 800px;
  min-height: 450px;
  display: flex;
  justify-content: center;
  background: #f1f1f1;
  padding: 30px;
  border-radius: 5px;
}
</style>
