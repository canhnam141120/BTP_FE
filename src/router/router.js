import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routers = [
    {
        path:'/',
        name:'HomePage',
        component: () => import('@/pages/HomePage'),
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
        path:'/PersonalIndex',
        name:'PersonalIndex',
        component: () => import('@/pages/Personal/PersonalIndex'),
    },
    {
        path:'/Personal/MyInformation',
        name:'MyInformation',
        component: () => import('@/pages/Personal/MyInformation'),
    },
    {
        path:'/Personal/MyBooks',
        name:'MyBooks',
        component: () => import('@/pages/Personal/MyBooks'),
    },
    {
        path:'/Personal/MyPosts',
        name:'MyPosts',
        component: () => import('@/pages/Personal/MyPosts'),
    },
    {
        path:'/Book_Detail/',
        name:'Book_Detail',
        component: () => import('@/pages/Book_Detail'),
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
        path:'/ManageBook/detail',
        name:'DetailBook',
        component: () => import('@/pages/ManageBook/DetailBook'),
    },
    {
        path:'/ManageBook/feedback',
        name:'GetFeedbacks',
        component: () => import('@/pages/ManageBook/GetFeedbacks'),
    },
    {
        path:'/ManageCategory',
        name:'GetCategories',
        component: () => import('@/pages/ManageCategory/GetCategories'),
    },
    {
        path:'/ManageCategory/create',
        name:'CreateCategory',
        component: () => import('@/pages/ManageCategory/CreateCategory'),
    },
    {
        path:'/ManageFee',
        name:'GetFees',
        component: () => import('@/pages/ManageFee/GetFees'),
    },
    {
        path:'/ManageFee/create',
        name:'CreateFee',
        component: () => import('@/pages/ManageFee/CreateFee'),
    },

    {
        path:'/ManagePost',
        name:'GetPosts',
        component: () => import('@/pages/ManagePost/GetPosts'),
    },
    {
        path:'/ManagePost/detail',
        name:'DetailPost',
        component: () => import('@/pages/ManagePost/DetailPost'),
    },
    {
        path:'/ManagePost/comment',
        name:'GetComments',
        component: () => import('@/pages/ManagePost/GetComments'),
    },
    {
        path:'/ManageUser',
        name:'GetUsers',
        component: () => import('@/pages/ManageUser/GetUsers'),
    },
    {
        path:'/ManageUser/detail',
        name:'DetailUser',
        component: () => import('@/pages/ManageUser/DetailUser'),
    },
    {
        path:'/ManageBill/exchange-bill',
        name:'GetExchangeBills',
        component: () => import('@/pages/ManageBill/GetExchangeBills'),
    },
    {
        path:'/ManageBill/exchange-bill/detail',
        name:'DetailExchangeBill',
        component: () => import('@/pages/ManageBill/DetailExchangeBill'),
    },
    {
        path:'/ManageBill/rent-bill',
        name:'GetRentBills',
        component: () => import('@/pages/ManageBill/GetRentBills'),
    },
    {
        path:'/ManageBill/rent-bill/detail',
        name:'DetailRentBill',
        component: () => import('@/pages/ManageBill/DetailRentBill'),
    },
    {
        path:'/ManageTransaction/exchange',
        name:'GetExchanges',
        component: () => import('@/pages/ManageTransaction/GetExchanges'),
    },
    {
        path:'/ManageTransaction/exchange/detail',
        name:'DetailExchange',
        component: () => import('@/pages/ManageTransaction/DetailExchange'),
    },
    {
        path:'/ManageTransaction/exchange/bill',
        name:'ExchangeBill',
        component: () => import('@/pages/ManageTransaction/ExchangeBill'),
    },
    {
        path:'/ManageTransaction/rent',
        name:'GetRents',
        component: () => import('@/pages/ManageTransaction/GetRents'),
    },
    {
        path:'/ManageTransaction/rent/detail',
        name:'DetailRent',
        component: () => import('@/pages/ManageTransaction/DetailRent'),
    },
    {
        path:'/ManageTransaction/rent/bill',
        name:'RentBill',
        component: () => import('@/pages/ManageTransaction/RentBill'),
    },
    {
        path:'/ManageTransaction/exchange',
        name:'GetExchanges',
        component: () => import('@/pages/ManageTransaction/GetExchanges'),
    },
    {
        path:'/ManageIndex',
        name:'ManageIndex',
        component: () => import('@/pages/ManagePage/ManageIndex'),
    },
    {
        path:'/ManageUser',
        name:'GetUsers',
        component: () => import('@/pages/ManageUser/GetUsers'),
    },
    // {
    //
    //     path: '/ManageIndex',
    //     component: () => import('@/pages/ManagePage/ManageIndex'),
    //     name: 'ManageIndex',
    //     redirect: '/home',
    //     children: [
    //         {
    //             path: '/home',
    //             component: () => import('@/pages/HomePage'),
    //         },
    //         {
    //             path:'/ManageUser',
    //             name:'GetUsers',
    //             component: () => import('@/pages/ManageUser/GetUsers'),
    //         },
    //         {
    //             path:'/ManageAdmin',
    //             name:'GetAdmins',
    //             component: GetAdmins,
    //         },
    //
    //     ]
    // }
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