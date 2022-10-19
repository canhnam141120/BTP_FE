import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = [
    {
        path:'/',
        name:'homepage',
        component: () => import('@/pages/HomePage'),
    }
]

export const constantRoutes = [...routers]

const createRouter = () => new VueRouter({
    mode: 'history', // require service support
    allowHashBang: true,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router