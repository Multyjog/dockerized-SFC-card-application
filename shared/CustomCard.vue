<template v-slot:default>
  <div class="card-wrapper">
    <div class="card">
      <div v-if="applyCustomHTML" v-html="overrideHTML"></div>
      <div v-else>
        <img src="https://picsum.photos/800" alt="" />
        <div class="card-body">
          <h2>Card title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            repudiandae quidem repellendus ex, perspiciatis sapiente, corporis
            soluta vero libero at reprehenderit rem deleniti ab aliquid!
          </p>
          <button>BUTTONS</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "./custom-styles.css";

defineProps(["applyCustomHTML", "overrideHTML"]);
</script>

<style scoped>
.card-wrapper {
  border: 4px solid #754ef7;
  border-radius: 5px;
  padding: 5px;
  width: 40%;
}
.card {
  background-color: white;
  border-radius: 5px;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card-body {
  padding: 5px 15px 20px;
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
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  width: 100%;
  height: 200px;
}
</style>
