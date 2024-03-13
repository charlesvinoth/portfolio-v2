<script setup lang="ts">
defineProps<{ href: string; icon: string; label: string }>()
</script>

<template>
  <a
    v-motion-slide-visible-once-bottom
    :href="href"
    target="_blank"
    class="inline-flex items-center gap-4 font-medium hover:text-secondary-500 hover:underline dark:hover:text-secondary-400"
  >
    <i class="size-5 text-primary-700 dark:text-primary-600" :class="icon" />
    {{ label }}
  </a>
</template>

<style scoped></style>
