<script setup lang="ts">
import SectionDescription from '@/components/SectionDescription.vue'

defineProps<{ name: string; description: string }>()
</script>

<template>
  <div class="mt-24">
    <h1 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-50">
      {{ name }}
    </h1>
    <SectionDescription>{{ description }}</SectionDescription>
  </div>
</template>

<style scoped></style>
