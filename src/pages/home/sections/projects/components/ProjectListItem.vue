<script setup lang="ts">
import { computed } from 'vue'
import ImageFrame from '@/components/ImageFrame.vue'
import type { ProjectItem } from '@/types'

const props = defineProps<{ item: ProjectItem }>()

const coverImg = computed(
  () => new URL(`/src/assets/projects/${props.item.folder}/cover.jpg`, import.meta.url).href
)
</script>

<template>
  <ImageFrame class="p-8">
    <img :src="coverImg" alt="cover image" />

    <h3 className="mt-8 font-semibold text-gray-900 dark:text-gray-50">{{ item.name }}</h3>
    <p className="mt-1 text-sm">{{ item.description.short }}</p>
  </ImageFrame>
</template>

<style scoped></style>
