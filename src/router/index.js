import { createRouter, createWebHistory } from 'vue-router'
import ProdutoView from "../views/ProdutoView.vue"
import MainView from "../views/MainView.vue"
import CartView from '../views/CartView.vue'
import Login from '../views/LoginView.vue'
import Men from '../views/MenView.vue'
import Woman from '../views/WomanView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import Administrator from '../views/AdministratorView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes: [
    {
      path:'/',
      name:'main',
      component: MainView,
      props: true
    },
    {
      path:'/login',
      name:'login',
      component: Login,
    },
    {
      path:'/Men',
      name:'Men',
      component: Men,
    },
    {
      path:'/Woman',
      name:'Woman',
      component: Woman,
    },
    {
      path:'/About',
      name:'About',
      component: About,
    },
    {
      path:'/Contact',
      name:'Contact',
      component: Contact,
    },
    {
      path:'/administrator',
      name:'administrator',
      component: Administrator
    },
    {
      path:'/cart',
      name:'cart',
      component: CartView,
    },
    {
      path:'/produto/:id',
      name:'produto',
      component: ProdutoView,
      props: true
    }

  
  ]
})

export default router
