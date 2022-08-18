import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import i18n from '@/assets/setups/i18n'

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
