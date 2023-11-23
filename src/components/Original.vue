<script setup lang="ts">
import ContentWrapper from "./ContentWrapper.vue";
import { useItems } from "../composables/useItems";

const { items, updateItems } = useItems();
</script>

<template>
  <ContentWrapper title="何も制御しないversion" @click="updateItems">
    <section :class="styles.cards">
      <div v-for="item in items" :key="item.id" :class="styles.card">
        <div :class="styles.wrapper">
          <img :src="item.imageSrc" alt="" width="100" height="100" :class="styles.image" />
        </div>
        <h2>{{ item.title }}</h2>
        <p :class="styles.description">{{ item.description }}</p>
        <div :class="styles.points">
          <span>現在: {{ item.points.asis }}</span>
          <span>理想: {{ item.points.tobe }}</span>
        </div>
      </div>
    </section>
  </ContentWrapper>
</template>

<style module="styles">
.cards {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 300px);
  padding: 48px;
  border: 3px solid var(--accent-color);
  border-radius: 18px;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 6px;
  background-color: var(--secondary-color);
}
.wrapper {
  display: flex;
  justify-content: center;
}
.image {
  aspect-ratio: 1/1;
}
.description {
  font-size: 16px;
}
.points {
  display: flex;
  justify-content: space-evenly;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: var(--primary-color);
}
</style>
