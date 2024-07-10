import { createRouter, createWebHistory, } from 'vue-router'

const routes = [{
    //路由初始指向
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('../components/Login.vue'),

}, {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: () =>
        import ('../components/Home.vue'),
    children: [{
        path: 'index',
        name: 'index',
        component: () =>
            import ('../components/Main/Index.vue')
    }, {
        path: 'article/articlelist',
        name: 'articlelist',
        component: () =>
            import ('../components/Main/article/ArticleList.vue')
    }, {
        path: 'article/createarticle',
        name: 'createarticle',
        component: () =>
            import ('../components/Main/article/createarticle.vue')
    }, {
        path: 'usermanagement',
        name: 'usermanagement',
        component: () =>
            import ('../components/Main/UserManagement.vue')
    }, {
        path: 'leaveword',
        name: 'leaveword',
        component: () =>
            import ('../components/Main/LeaveWord.vue')
    }, {
        path: 'projectmanagement',
        name: 'projectmanagement',
        component: () =>
            import ('../components/Main/ProjectManagement.vue')
    }, {
        path: 'link',
        name: 'link',
        component: () =>
            import ('../components/Main/Link.vue')
    }]
}, ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router