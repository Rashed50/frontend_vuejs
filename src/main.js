import './assets/main.css'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import { createRouter,createMemoryHistory,createWebHistory  } from 'vue-router'
import App from './App.vue'
//import VueRouter from 'vue-router'

import AppHome from './components/public/AppHome.vue';
import LoginUI from './components/auth/LoginUI.vue'
import SignupUI from './components/auth/SignupUI.vue';
import NavMenu from './components/public/NavMenu.vue';
import CurrencyRate from './components/public/CurrencyRate.vue'


const routes = [
    { path:'/',name:'home', component:AppHome},
    { path:'/login',name:'login', component:LoginUI},
    { path:'/signup', name:'signup' , component:SignupUI},
    { path:'/currency_rate',name:'currency_rate',component:CurrencyRate},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app =createApp(App)
app.use(router)
app.provide('bootstrap', bootstrap); 
app.component("NavMenu",NavMenu)
app.mount('#app')
