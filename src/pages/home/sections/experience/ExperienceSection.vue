<script setup lang="ts">
import SectionDescription from '@/components/SectionDescription.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import type { ExperienceItem } from '@/types'
import ExperienceListItem from './components/ExperienceListItem.vue'

const experiences: ExperienceItem[] = [
  {
    id: '1',
    jobTitle: 'Lead Front-end Developer',
    company: 'Happiest Minds',
    period: 'Aug 2023 - Present',
    roles: [
      'Developed and maintained the front-end of 3 high-impact, cloud-based applications using Vue.js, React.js, and TypeScript, achieving a 20% increase in user engagement.',
      'Led a team of 5 developers in a UI overhaul for a high-traffic web application, significantly enhancing site usability and user experience.',
      'Migrated a Vue.js v2 app codebase to Vue.js v3, leading a front-end team of 5 developers, resulting in a 25% improvement in application speed and efficiency.',
      'Mentored junior developers, fostering a culture of continuous learning, which led to a 40% reduction in development errors and a significant increase in project efficiency, enhancing code quality and client satisfaction.',
      'Collaborated with team members and clients, achieving a significant increase in project efficiency, leading to improved client satisfaction and project delivery timelines.'
    ]
  },
  {
    id: '2',
    jobTitle: 'Senior Front-end Developer',
    company: 'Happiest Minds',
    period: 'Dec 2022 - Jul 2023',
    roles: [
      'Spearheaded the development of a highly-responsive web application using Vue.js and Nuxt.js, achieving a 40% reduction in page load times.',
      'Implemented a robust caching system and optimized asynchronous data fetching, leading to a 35% improvement in overall application performance.',
      'Collaborated closely with UX/UI designers, translating complex design concepts into pixel-perfect frontend implementations.',
      'Leveraged server-side rendering and component-level code-splitting techniques, achieving a 50% reduction in initial load times for application routes.',
      'Designed and implemented a reusable component library adhering to industry-standard guidelines, enabling consistent UI/UX across multiple projects.',
      'Actively contributed to the adoption of modern frontend testing frameworks such as Jest and Cypress, resulting in a 50% increase in test coverage and a 20% decrease in bug regression rate.'
    ]
  },
  {
    id: '3',
    jobTitle: 'Senior Front-end Developer',
    company: 'ezofis',
    period: 'Sep 2021 - Nov 2022',
    roles: [
      'Successfully implemented architectural improvements within a Vue.js application, achieving a 15% reduction in page load time.',
      'Utilized agile methodologies like Scrum and Kanban, streamlining the feature delivery process from requirements gathering to testing. This included writing user stories, clean code, unit tests, and integration tests, ensuring efficient development cycles.',
      'Conducted thorough code reviews and enforced coding standards, achieving a 95% code coverage and adherence to best practices.',
      'Implemented a state management solution using Vuex, resulting in a 40% reduction in application state complexity and a significant improvement in code maintainability.',
      'Designed and delivered comprehensive training sessions on Vue.js best practices, JavaScript performance optimization, and modern web development techniques, upskilling over 6 developers across multiple teams.',
      'Collaborated with cross-functional teams to implement a robust authentication and authorization system with AES encryption/decryption using Vue.js, Vue Router, and JWT, enhancing application security.'
    ]
  },
  {
    id: '4',
    jobTitle: 'Front-end Developer',
    company: 'ezofis',
    period: 'Sep 2019 - Aug 2021',
    roles: [
      'Developed high-performance web applications and progressive web apps using React.js, Vue.js, and their ecosystems, delivering exceptional user experiences.',
      'Crafted a comprehensive design system, enforcing consistent branding, UI/UX patterns, and accessibility standards across all digital products.',
      'Translated designs and wireframes into responsive, cross-browser compatible user interfaces and reusable components, leveraging modern CSS techniques.',
      'Performed rigorous user experience testing and quality assurance, ensuring a polished user experience.',
      'Introduced and championed best practices in code organization, maintainability, and performance optimization, fostering healthy codebases.',
      'Interfaced with clients regularly, providing expertise, knowledge-sharing, and effective communication throughout the project lifecycle.',
      'Collaborated with cross-functional teams, analyzing business requirements and contributing to design, development, and testing.'
    ]
  },
  {
    id: '5',
    jobTitle: 'Junior Front-end Developer',
    company: 'ezofis',
    period: 'Nov 2018 - Aug 2019',
    roles: [
      'Developed modern and performant front-end applications for clients and internal projects using the latest web technologies.',
      'Conducted research and provided recommendations for integrating new technologies based on suitability and business goals.',
      'Optimized application performance by replacing legacy jQuery with vanilla JavaScript, resulting in a 50% speed increase.',
      'Collaborated effectively with project managers and cross-functional teams for timely project delivery.',
      'Introduced Git and GitHub for version control and source code management, streamlining development workflows.',
      'Replaced XML with JSON as the API payload format, improving application speed by 20%. Participated in code reviews, knowledge-sharing sessions, and continuous learning initiatives.'
    ]
  },
  {
    id: '6',
    jobTitle: 'Front-end Developer Trainee',
    company: 'ezofis',
    period: 'Apr 2018 - Oct 2018',
    roles: [
      'Developed high-performance web applications and progressive web apps using React.js, Vue.js, and their ecosystems, delivering exceptional user experiences.',
      'Crafted a comprehensive design system, enforcing consistent branding, UI/UX patterns, and accessibility standards across all digital products.',
      'Translated designs and wireframes into responsive, cross-browser compatible user interfaces and reusable components, leveraging modern CSS techniques and component libraries.',
      'Performed rigorous user experience testing and quality assurance, addressing usability issues to ensure a polished user experience.',
      'Introduced and championed best practices in code organization, maintainability, and performance optimization, fostering healthy codebases and coding standards.',
      'Interfaced with clients regularly, providing technological expertise, knowledge-sharing, and effective communication throughout the project lifecycle.',
      'Collaborated with cross-functional teams, analyzing business requirements, participating in technical design discussions, and contributing to development and testing.'
    ]
  }
]
</script>

<template>
  <section class="py-24">
    <SectionTitle v-motion-slide-visible-once-bottom title="Experience" />
    <SectionDescription v-motion-slide-visible-once-bottom>
      As a lead front-end developer with extensive experience in developing high-performance,
      responsive, and user-centric web applications, I have had the opportunity to work on a diverse
      range of projects across various industries. My expertise lies in architecting scalable
      front-end solutions, leading development teams, and delivering exceptional user experiences.
    </SectionDescription>

    <div class="mt-20 divide-y divide-gray-100 dark:divide-gray-800">
      <ExperienceListItem
        v-for="experience in experiences"
        :key="experience.id"
        v-motion-slide-visible-once-bottom
        :item="experience"
      />
    </div>
  </section>
</template>

<style scoped></style>
