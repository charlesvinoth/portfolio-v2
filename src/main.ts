import './styles/index.css'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(VueEasyLightbox)

app.mount('#app')
