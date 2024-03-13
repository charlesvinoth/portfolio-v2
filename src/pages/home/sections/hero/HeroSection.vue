<script setup lang="ts">
import HeroContent from './components/HeroContent.vue'
import HeroImage from './components/HeroImage.vue'
</script>

<template>
  <section v-motion-slide-visible-once-bottom class="grid grid-cols-1 gap-24 py-24 lg:grid-cols-2">
    <HeroImage />
    <HeroContent />
  </section>
</template>

<style scoped></style>
