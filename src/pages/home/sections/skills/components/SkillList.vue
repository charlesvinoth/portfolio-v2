<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SkillItem } from '@/types'
import SkillListItem from './SkillListItem.vue'
import SkillListShowAll from './SkillListShowAll.vue'

const props = defineProps<{
  title: string
  items: SkillItem[]
}>()

const showAll = ref(false)

const _items = computed(() => {
  if (showAll.value) {
    return props.items
  }

  return props.items.slice(0, 6)
})
</script>

<template>
  <div v-motion-slide-visible-once-bottom>
    <h3 class="mb-6 text-lg font-semibold capitalize text-gray-800 dark:text-gray-200">
      {{ title }}
    </h3>
    <ul class="flex flex-wrap items-center gap-4">
      <SkillListItem v-for="item in _items" :key="item.name" :item />
      <SkillListShowAll v-if="!showAll" :count="items.length - 6" @click="showAll = true" />
    </ul>
  </div>
</template>

<style scoped></style>
