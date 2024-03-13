<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue'
import IconButton from '@/components/button/IconButton.vue'
import type { ExperienceItem } from '@/types'

const props = defineProps<{ item: ExperienceItem }>()

const isCollapsed = ref(props.item.id !== '1')
const rolesRef = ref()
const { height } = useElementSize(rolesRef)
</script>

<template>
  <div>
    <div class="flex gap-4 py-6" @click="isCollapsed = !isCollapsed">
      <IconButton
        name="expand"
        :icon="isCollapsed ? 'icon-[material-symbols--add]' : 'icon-[ic--round-minus]'"
        class="text-secondary-500 dark:text-secondary-400"
      />

      <div class="flex-1">
        <h3 class="space-x-1 font-semibold leading-10">
          <span class="text-gray-900 dark:text-gray-50"> {{ item.jobTitle }} </span>
          <span class="text-secondary-500 dark:text-secondary-400">@ {{ item.company }}</span>
        </h3>
        <p class="text-sm text-gray-500">{{ item.period }}</p>
      </div>
    </div>

    <div
      class="overflow-hidden transition-[height] duration-300 ease-in-out"
      :style="{ height: isCollapsed ? '0px' : `${height + 48}px` }"
    >
      <ul
        ref="rolesRef"
        class="ml-16 list-disc space-y-3 py-6 marker:text-secondary-500 dark:marker:text-secondary-400"
      >
        <li v-for="role in item.roles" :key="role" class="max-w-7xl text-pretty text-sm leading-6">
          {{ role }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
