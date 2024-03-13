<script setup lang="ts">
import { computed, ref } from 'vue'
import ImageFrame from '@/components/ImageFrame.vue'
import Lightbox from './Lightbox.vue'

const props = defineProps<{ type: string; folder: string; screenshotsCount: number }>()

const showLightbox = ref(false)
const activeIndex = ref(0)

const screenshots = computed(() => {
  const _screenshots = []

  for (let i = 1; i <= props.screenshotsCount; i++) {
    _screenshots.push(
      new URL(`/src/assets/projects/${props.folder}/${i}.jpg`, import.meta.url).href
    )
  }

  return _screenshots
})

function openLightbox(idx: number) {
  activeIndex.value = idx
  showLightbox.value = true
}
</script>

<template>
  <div class="mt-16">
    <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-50">Screenshots</h2>

    <div
      class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
      :class="type === 'MOBILE' ? 'lg:grid-cols-4 xl:grid-cols-5' : 'lg:grid-cols-3'"
    >
      <ImageFrame
        v-for="(screenshot, idx) in screenshots"
        :key="screenshot"
        v-motion-slide-visible-once-bottom
        class="p-4"
        @click="openLightbox(idx)"
      >
        <img :src="screenshot" alt="screenshot" />
      </ImageFrame>
    </div>

    <Lightbox v-model="showLightbox" :active-index="activeIndex" :screenshots="screenshots" />
  </div>
</template>

<style scoped></style>
