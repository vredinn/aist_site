import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import header from '@/js/header'

createApp(App).use(router).use(header).use(VueScrollTo,{
    container: "body",
     duration: 250,
     easing: "linear",
     offset: 0,
     lazy: false,
     cancelable: false
}).mount('#app')
