import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import i18n from '@/assets/setups/i18n'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
