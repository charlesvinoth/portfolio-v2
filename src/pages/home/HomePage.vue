<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Header from './components/header/Header.vue'
import ContactSection from './sections/contact/ContactSection.vue'
import ExperienceSection from './sections/experience/ExperienceSection.vue'
import HeroSection from './sections/hero/HeroSection.vue'
import ProjectsSection from './sections/projects/ProjectsSection.vue'
import SkillsSection from './sections/skills/SkillsSection.vue'

const headerRef = ref(null)
const isHeaderVisible = useElementVisibility(headerRef)
</script>

<template>
  <main class="container mx-auto px-6 lg:px-10">
    <Header ref="headerRef" />
    <HeroSection id="home" />
    <SkillsSection id="skills" />
    <ExperienceSection id="experience" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
    <Footer />
    <ScrollToTop v-if="!isHeaderVisible" />
  </main>
</template>

<style scoped></style>
