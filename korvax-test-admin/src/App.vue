<template>
  Админский интерфейс
  <div class="form-wrapper">
    <CardEdit @submit="onCardEdit" />
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
  () => import("../../shared/CustomCard.vue")
);
const CardEdit = defineAsyncComponent(
  () => import("./components/CardEdit.vue")
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
const onCardEdit = (e: IFormData) => {
  api
    .post("/data", e)
    .then((res) => {
      setNewTemplate(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<style scoped>
.form-wrapper {
  max-width: 800px;
  min-height: 450px;
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 30px;
  border-radius: 5px;
}
</style>
