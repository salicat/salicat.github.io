import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt,
    faDesktop,
    faServer,
    faCloud,
    faMagic,
    faBullhorn,
    faPalette
  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import router from './router'

library.add(
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt,
    faDesktop,
    faServer,
    faCloud,
    faMagic,
    faBullhorn,
    faPalette,
    faGithub
  )

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
