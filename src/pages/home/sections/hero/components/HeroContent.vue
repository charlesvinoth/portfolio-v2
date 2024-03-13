<script setup lang="ts">
import Button from '@/components/button/Button.vue'
import SectionDescription from '@/components/SectionDescription.vue'
import SectionTitle from '@/components/SectionTitle.vue'

function downloadResume() {
  const url = new URL('/src/assets/Charles Vinoth - Resume.pdf', import.meta.url).href
  window.open(url, '_blank')
}
</script>

<template>
  <div>
    <SectionTitle title="Hi, I'm Charles Vinoth." />

    <h1 class="mt-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
      Lead Front-end Developer
    </h1>

    <SectionDescription class="mt-6">
      Highly motivated and results-oriented Lead Front-End Developer with over 6 years of experience
      crafting user-centric web and mobile applications. Proven ability to architect, develop, and
      deliver high-performance, responsive experiences using modern frameworks (Vue.js, React.js)
      and best practices.
    </SectionDescription>

    <SectionDescription class="mt-4">
      Skilled in leading teams to achieve project goals and exceed client expectations. Notable
      accomplishment includes an 80% increase in sales through UI/UX improvements and optimized
      code.
    </SectionDescription>

    <Button class="mt-10" @click="downloadResume">Get Resume</Button>
  </div>
</template>

<style scoped></style>
