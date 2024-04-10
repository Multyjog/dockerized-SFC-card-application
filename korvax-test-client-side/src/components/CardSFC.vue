<template>
  <div class="card">
    <img :src="imgSrc" alt="" />
    <h2>{{ title }}</h2>
    <p>{{ msg }}</p>
    <button>BUTTONS</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; msg: string; imgSrc: string }>();
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  border: 3px solid rgb(235, 79, 235);
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
h2 {
  color: black;
  text-align: start;
}
p {
  color: black;
  text-align: start;
}
img {
  object-fit: cover;
  max-width: 300px;
  height: 200px;
  border-radius: 10px;
}
</style>
