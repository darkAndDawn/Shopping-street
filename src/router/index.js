import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const User = () => import('views/user/User')

Vue.use(VueRouter)

const routes = [
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect: 'home'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
