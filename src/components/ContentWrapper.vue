<script setup lang="ts">
const props = defineProps({ title: String });
const emits = defineEmits<{ (e: "click"): void }>();

function onClick() {
  emits("click");
}
</script>

<template>
  <article :class="styles.root">
    <div :class="styles.heading">
      <h1>{{ props.title }}</h1>
      <button type="button" :class="styles.button" @click="onClick">要素を入れ替え</button>
    </div>
    <slot />
  </article>
</template>

<style module="styles">
.root {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.heading {
  display: flex;
  gap: 32px;
  align-items: center;
}
.button {
  display: block;
  padding: 4px 8px;
  font-weight: bold;
  color: var(--white);
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  border-radius: 6px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}
.button:hover {
  color: var(--accent-color);
  background-color: var(--white);
}
.button:active {
  box-shadow: none;
  transform: translateY(3px);
}
</style>
