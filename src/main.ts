import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Flaticon UIcons — solid rounded for UI glyphs, brands for social links.
import '@flaticon/flaticon-uicons/css/solid/rounded.css'
import '@flaticon/flaticon-uicons/css/brands/all.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
