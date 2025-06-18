import Toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { 
    faEnvelope, 
    faPhone, 
    faMapMarkerAlt,
    faDesktop,
    faFlask,
    faServer,
    faCloud,
    faMagic,
    faBullhorn,
    faPalette,
    faCodeBranch,
    faPaintBrush
  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWordpress, faVuejs } from '@fortawesome/free-brands-svg-icons'
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
    faGithub,
    faVuejs,
    faWordpress,
    faFlask,
    faCodeBranch,
    faPaintBrush
)

const app = createApp(App)
app.use(Toast)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')