<template>
  Админский интерфейс
  <div class="form-wrapper">
    <CardEdit @submit="onCardEdit" />
    <CustomCard
      :html="overrideHTML"
      :isCustom="applyCustomHTML"
      title="Card title"
      msg="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates repudiandae quidem repellendus ex, perspiciatis sapiente, corporis soluta vero libero at reprehenderit rem deleniti ab aliquid!"
      imgSrc="https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineAsyncComponent } from "vue";
import { IFormData } from "../../interfaces.ts";
import api from "../../api.ts";

const CustomCard = defineAsyncComponent(
  () => import("./components/CustomCard.vue")
);
const CardEdit = defineAsyncComponent(
  () => import("./components/CardEdit.vue")
);

onMounted(() => {
  fetchItems();
});
const overrideHTML = ref("");

const applyCustomHTML = computed(() => {
  return overrideHTML.value !== "";
});

const onCardEdit = (e: IFormData) => {
  api
    .post("/data", e)
    .then((res) => {
      console.log("RESPONSE:", res);
    })
    .catch((e) => {
      console.log(e);
    });
};
async function fetchItems() {
  try {
    const response = await api.get("/data");
    console.log(response);
    overrideHTML.value = response.data.vueCode;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}
</script>

<style scoped>
.form-wrapper {
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 30px;
  border-radius: 5px;
}
</style>
