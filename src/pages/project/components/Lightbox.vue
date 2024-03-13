<script setup lang="ts">
const model = defineModel<boolean>({ required: true })

defineProps<{ activeIndex: number; screenshots: string[] }>()
</script>

<template>
  <VueEasyLightbox :visible="model" :imgs="screenshots" :index="activeIndex" @hide="model = false">
    <!-- hide toolbar -->
    <template #toolbar />
  </VueEasyLightbox>
</template>

<style scoped></style>
