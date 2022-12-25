import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routers = [
    {
        path:'*',
        name:'404Page',
        component: () => import('@/pages/404Page'),
    },
    {
        path:'/Policy-Infomation',
        name:'Policy-Infomation',
        component: () => import('@/pages/Policy/Policy-Infomation'),
    },
    {
        path:'/Guide-Payment',
        name:'Guide-Payment',
        component: () => import('@/pages/Policy/Guide-Payment'),
    },
    {
        path:'/ResultPayment',
        name:'ResultPayment',
        component: () => import('@/pages/ResultPayment'),
    },
    {
        path:'/Process',
        name:'Process',
        component: () => import('@/pages/Process'),
    },
    {
        path:'/ResultPaymentRent',
        name:'ResultPaymentRent',
        component: () => import('@/pages/ResultPaymentRent'),
    },
    {
        path:'/',
        name:'HomePage',
        component: () => import('@/pages/HomePage'),
    },
    {
        path:'/AllBooks',
        name:'AllBooks',
        component: () => import('@/pages/AllBooks'),
    },
    {
        path:'/BlogIndex',
        name:'BlogIndex',
        component: () => import('@/pages/BlogIndex'),
    },
    {
        path:'/Policy-Payment',
        name:'Policy-Payment',
        component: () => import('@/pages/Policy/Policy-Payment'),
    },
    {
        path:'/TermOfUse',
        name:'TermOfUse',
        component: () => import('@/pages/Policy/TermOfUse'),
    },
    {
        path:'/Policy-Refund',
        name:'Policy-Refund',
        component: () => import('@/pages/Policy/Policy-Refund'),
    },
    {
        path:'/Policy&Terms',
        name:'Policy&Terms',
        component: () => import('@/pages/Policy&Terms'),
    },
    {
        path:'/Policy-Cencorship',
        name:'Policy-Cencorship',
        component: () => import('@/pages/Policy/Policy-Cencorship'),
    },
    {
        path:'/Introduce',
        name:'Introduce',
        component: () => import('@/pages/Introduce'),
    },
    {
        path:'/PostDetail',
        name:'PostDetail',
        component: () => import('@/pages/PostDetail'),
    },
    {
        path:'/Login',
        name:'Login',
        component: () => import('@/pages/Authorize/Login'),
    },
    {
        path:'/Register',
        name:'Register',
        component: () => import('@/pages/Authorize/Register'),
    },
    {
        path:'/VerifyRegister',
        name:'VerifyRegister',
        component: () => import('@/pages/Authorize/VerifyRegister'),
    },
    {
        path:'/ResetPassword',
        name:'ResetPassword',
        component: () => import('@/pages/Authorize/ResetPassword'),
    },
    {
        path:'/MyInformation',
        name:'MyInformation',
        component: () => import('@/pages/Personal/MyInformation'),
    },
    {
        path:'/MyBooks',
        name:'MyBooks',
        component: () => import('@/pages/Personal/MyBooks'),
    },
    {
        path:'/ViewRequestBook',
        name:'ViewRequestBook',
        component: () => import('@/pages/Personal/ViewRequestBook'),
    },
    {
        path:'/OtherPerson',
        name:'OtherPerson',
        component: () => import('@/pages/Visit/OtherPerson'),
    },
    {
        path:'/MyPosts',
        name:'MyPosts',
        component: () => import('@/pages/Personal/MyPosts'),
    },
    {
        path:'/AllNotification',
        name:'AllNotification',
        component: () => import('@/pages/AllNotification'),
    },
    {
        path:'/MyFavorites',
        name:'MyFavorites',
        component: () => import('@/pages/Personal/MyFavorites'),
    },
    {
        path:'/MyRequests',
        name:'MyRequests',
        component: () => import('@/pages/Personal/MyRequests'),
    },
    {
        path:'/MyTransaction',
        name:'MyTransaction',
        component: () => import('@/pages/Personal/MyTransaction'),
    },
    {
        path:'/BookDetail',
        name:'BookDetail',
        component: () => import('@/pages/BookDetail'),
    },
    {
        path:'/ManageAdmin',
        name:'GetAdmins',
        component: () => import('@/pages/ManageAdmin/GetAdmins'),
    },
    {
        path:'/ManageBook',
        name:'GetBooks',
        component: () => import('@/pages/ManageBook/GetBooks'),
    },
    {
        path:'/ManageCategory',
        name:'GetCategories',
        component: () => import('@/pages/ManageCategory/GetCategories'),
    },
    {
        path:'/ManageFee',
        name:'GetFees',
        component: () => import('@/pages/ManageFee/GetFees'),
    },
    {
        path:'/ManagePost',
        name:'GetPosts',
        component: () => import('@/pages/ManagePost/GetPosts'),
    },
    {
        path:'/ManageUser',
        name:'GetUsers',
        component: () => import('@/pages/ManageUser/GetUsers'),
    },
    {
        path:'/ManageTransaction/exchange',
        name:'GetExchanges',
        component: () => import('@/pages/ManageTransaction/GetExchanges'),
    },
    {
        path:'/ManageTransaction/rent',
        name:'GetRents',
        component: () => import('@/pages/ManageTransaction/GetRents'),
    },
    {
        path:'/ManageIndex',
        name:'ManageIndex',
        component: () => import('@/pages/ManagePage/ManageIndex'),
    },
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