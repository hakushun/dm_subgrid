<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import ContentWrapper from "./ContentWrapper.vue";
import { useItems } from "../composables/useItems";

const titleRefs = ref<HTMLHeadingElement[]>([]);
const descriptionRefs = ref<HTMLParagraphElement[]>([]);
const { items, updateItems } = useItems();

function addMarginTop() {
  // 3つのタイトルの高さを取得
  const titleHeights = titleRefs.value.map((title) => title.clientHeight);
  // 3つのタイトルの高さで最大の値を取得
  const maxTilteHeight = Math.max(...titleHeights);
  // 説明に付与するマージントップの値を計算
  const marginTops = titleHeights.map((height) => maxTilteHeight - height);
  // 説明に付与するマージントップを付与
  descriptionRefs.value.forEach((element, index) => {
    element.style.marginTop = `${marginTops[index]}px`;
  });
}

onMounted(() => {
  // マウント時に発火
  addMarginTop();
});

watch(items, async () => {
  // itemsを変更を検知し、 DOMの更新処理を待ってから発火
  await nextTick();
  addMarginTop();
});
</script>

<template>
  <ContentWrapper title="JavaScriptを使用したversion" @click="updateItems">
    <section :class="styles.cards">
      <div v-for="item in items" :key="item.id" :class="styles.card">
        <div :class="styles.wrapper">
          <img :src="item.imageSrc" alt="" width="100" height="100" :class="styles.image" />
        </div>
        <!-- 高さ取得のためrefを付与 -->
        <h2 ref="titleRefs">{{ item.title }}</h2>
        <!-- マージントップ付与のためrefを付与 -->
        <p :class="styles.description" ref="descriptionRefs">{{ item.description }}</p>
        <div :class="styles.points">
          <span>現在: {{ item.points.asis }}</span>
          <span>理想: {{ item.points.tobe }}</span>
        </div>
      </div>
    </section></ContentWrapper
  >
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
  margin-top: auto;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: var(--primary-color);
}
</style>
