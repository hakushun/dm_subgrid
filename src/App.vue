<script setup lang="ts">
import Original from "./components/Original.vue";
import WithJs from "./components/WithJs.vue";
import WithSubgrid from "./components/WithSubgrid.vue";
</script>

<template>
  <main :class="styles.main">
    <Original />
    <WithJs />
    <WithSubgrid />
  </main>
</template>

<style module="styles">
.main {
  display: grid;
  place-items: center;
  row-gap: 32px;
  padding: 48px;
}
</style>
