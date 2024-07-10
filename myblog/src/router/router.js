import { createRouter, createWebHistory } from 'vue-router';

// 头部组件
import Home from '../components/Home.vue';
// 主内容组件
import Content from '../components/content/Content.vue'
import Classify from '../components/content/Classify.vue'
import Leave from '../components/content/Leave_message.vue'
import About from '../components/content/About.vue'

// 展示组件
import Index from '../components//content/info/Index.vue'
import Archive from '../components//content/info/Archive.vue'
import Search from '../components/content/info/SearchBlogPage.vue'

// 通用展示组件
import Show from "../components/utils/Show.vue";

const routes = [{
        path: '/',
        redirect: '/home',
        children: [{
            path: 'home',
            component: Home,
            redirect: '/home/content',
            children: [{
                    path: 'content',
                    component: Content,
                    redirect: '/home/content/index',
                    children: [{
                            path: 'index',
                            component: Index,
                        },
                        {
                            path: 'archive',
                            component: Archive
                        }, {
                            path: 'search',
                            component: Search
                        }
                    ]
                },
                {
                    path: 'classify',
                    component: Classify
                }, {
                    path: 'leave_message',
                    component: Leave
                }, {
                    path: 'about',
                    component: About
                }, {
                    path: 'show',
                    component: Show
                }
            ]
        }]
    },


];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router