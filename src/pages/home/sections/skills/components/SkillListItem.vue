<script setup lang="ts">
import { computed } from 'vue'
import type { SkillItem } from '@/types'

const props = defineProps<{ item: SkillItem }>()

const logo = computed(
  () => new URL(`/src/assets/skills/${props.item.name}.svg`, import.meta.url).href
)
</script>

<template>
  <li
    v-motion-slide-visible-once-bottom
    class="flex size-28 flex-col items-center justify-center gap-4 rounded border border-gray-100 dark:border-gray-800"
  >
    <div class="flex items-center justify-center">
      <img :src="logo" alt="vue logo" class="size-10" />
    </div>

    <p class="text-center text-sm font-medium">
      {{ item.label }}
    </p>
  </li>
</template>

<style scoped></style>
