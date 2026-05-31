import { createApp } from 'vue'
import './style.css'
import pinia from 'pinia'
import Plugin from './plugins'

import App from './App.vue'

createApp(App).use(pinia).use(Plugin).mount('#app')
