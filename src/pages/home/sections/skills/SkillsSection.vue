<script setup lang="ts">
import SectionDescription from '@/components/SectionDescription.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import SkillList from './components/SkillList.vue'

const skills = {
  proficient: [
    {
      label: 'Vue.js',
      name: 'vue'
    },
    {
      label: 'React.js',
      name: 'react'
    },
    {
      label: 'TypeScript',
      name: 'typescript'
    },
    {
      label: 'JavaScript',
      name: 'javascript'
    },
    {
      label: 'CSS',
      name: 'css'
    },
    {
      label: 'HTML',
      name: 'html'
    },
    {
      label: 'Vuex',
      name: 'vuex'
    },
    {
      label: 'Redux',
      name: 'redux'
    },
    {
      label: 'Vue Router',
      name: 'vue-router'
    },
    {
      label: 'React Router',
      name: 'react-router'
    },
    {
      label: 'Pinia',
      name: 'pinia'
    },
    {
      label: 'Tailwind',
      name: 'tailwind'
    },
    {
      label: 'MUI',
      name: 'mui'
    },
    {
      label: 'Vuetify',
      name: 'vuetify'
    },
    {
      label: 'Bulma',
      name: 'bulma'
    },
    {
      label: 'Mantine UI',
      name: 'mantine'
    },
    {
      label: 'Prime Vue',
      name: 'primevue'
    }
  ],
  experienced: [
    {
      label: 'Next.js',
      name: 'next'
    },
    {
      label: 'Nuxt.js',
      name: 'nuxt'
    },
    {
      label: 'Astro.js',
      name: 'astro'
    },
    {
      label: 'Jest',
      name: 'jest'
    },
    {
      label: 'Cypress',
      name: 'cypress'
    },
    {
      label: 'Node.js',
      name: 'node'
    },
    {
      label: 'React Query',
      name: 'query'
    },
    {
      label: 'Headless UI',
      name: 'headlessui'
    },
    {
      label: 'Dart',
      name: 'dart'
    },
    {
      label: 'Flutter',
      name: 'flutter'
    },
    {
      label: 'Sass',
      name: 'sass'
    },
    {
      label: 'Quasar.js',
      name: 'quasar'
    },
    {
      label: 'Bootstrap',
      name: 'bootstrap'
    }
  ],
  familiar: [
    {
      label: 'Python',
      name: 'python'
    },
    {
      label: 'PostgreSQL',
      name: 'postgresql'
    },
    {
      label: 'Firebase',
      name: 'firebase'
    },
    {
      label: 'jQuery',
      name: 'jquery'
    },
    {
      label: 'AWS',
      name: 'aws'
    },
    {
      label: 'Netlify',
      name: 'netlify'
    },
    {
      label: 'Azure',
      name: 'azure'
    },
    {
      label: 'Postman',
      name: 'postman'
    },
    {
      label: 'Grafana',
      name: 'grafana'
    },
    {
      label: 'Webpack',
      name: 'webpack'
    },
    {
      label: 'Git',
      name: 'git'
    },
    {
      label: 'GitHub',
      name: 'github'
    },
    {
      label: 'GitLab',
      name: 'gitlab'
    },
    {
      label: 'Vite',
      name: 'vite'
    }
  ]
}
</script>

<template>
  <section class="py-24">
    <SectionTitle v-motion-slide-visible-once-bottom title="Skills" />
    <SectionDescription v-motion-slide-visible-once-bottom>
      As a lead front-end developer, I possess a comprehensive skill set that enables me to
      architect, develop, and deliver high-performance, responsive, and user-centric web
      applications. My expertise spans a wide range of modern front-end technologies and best
      practices:
    </SectionDescription>

    <div class="mt-20 space-y-10">
      <SkillList v-for="(value, key) in skills" :key="key" :title="key" :items="value" />
    </div>
  </section>
</template>

<style scoped></style>
