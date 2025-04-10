import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SlidePage from './components/SlidePage.vue'
import SlideH1 from './components/SlideH1.vue'
import SlideH2 from './components/SlideH2.vue'
import SlideBody1 from './components/SlideBody1.vue'
import SlidePoints from './components/SlidePoints.vue'
import SlideCodeImg from './components/SlideCodeImg.vue'
import AboutSlide from './components/AboutSlide.vue'
import SlideControls from './components/SlideControls.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app
  .component('SlidePage', SlidePage)
  .component('SlideH1', SlideH1)
  .component('SlideH2', SlideH2)
  .component('SlideBody1', SlideBody1)
  .component('SlidePoints', SlidePoints)
  .component('SlideCodeImg', SlideCodeImg)
  .component('SlideControls', SlideControls)
  .component('AboutSlide', AboutSlide)

app.mount('#app')
