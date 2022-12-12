import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
        {
            path: '/',
            redirect: '/index/login',
        },
        {
            path: '/index/login',
            component: () => import('./components/pages/Login/ManagerLogin.vue'),
            name: '登录',
        },
        {
            path: '/index/activities',
            component: () => import('./components/pages/Activity/ActivityFather.vue'),
            name: '活动',
            redirect: '/index/activities/view',
            children:[
                {
                    path: 'create',
                    component: () => import('./components/pages/Activity/CreateActivity.vue'),
                    name: '新建活动',
                },
                {
                    path: 'view',
                    component: () => import('./components/pages/Activity/ActivityAll.vue'),
                    name: '活动总览',
                },
            ]
        },
        {
            path: '/index/check',
            component: () => import('./components/pages/Check/CheckTicket.vue'),
            name: '优惠券核验',
        },
        {
            path: '/index/announcement',
            component: () => import('./components/pages/Announcement/AnnounceFather.vue'),
            name: '公告',
            redirect: '/index/announcement/view',
            children:[
                {
                    path: 'create',
                    component: () => import('./components/pages/Announcement/CreateAnnounce.vue'),
                    name: '新建公告',
                },
                {
                    path: 'view',
                    component: () => import('./components/pages/Announcement/AnnouncementManage.vue'),
                    name: '公告总览',
                },
            ]
        },
        {
            path: '/index/community',
            component: () => import('./components/pages/Community/CommunityManage.vue'),
            name: '社区管理',
        },
        {
            path: '/index/activities/blank',
            component: () => import('./components/pages/Blanks/ActivityBlank.vue'),
            name: '活动页空白',
        },
        {
            path: '/index/announcement/blank',
            component: () => import('./components/pages/Blanks/AnnouncementBlank.vue'),
            name: '公告页空白',
        },
        {
            path: '/index/community/blank',
            component: () => import('./components/pages/Blanks/CommunityBlank.vue'),
            name: '社区页空白',
        },
        {
            path: '/index/about',
            component: () => import('./components/pages/About/AboutUs.vue'),
            name: '关于我们',
        }

            
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router


