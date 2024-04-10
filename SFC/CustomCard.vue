<template v-slot:default>
  <div class="card">
    <div v-if="condition">This is shown if the condition is true.</div>
    <div v-else>
      <img :src="imgSrc" alt="" />
      <h2>{{ title }}</h2>
      <p>{{ msg }}</p>
      <button>BUTTONS</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const condition = true;
defineProps({ imgSrc: String, title: String, msg: String });
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 5px;
  border: 4px solid rgb(235, 79, 235);
  padding: 10px;
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
