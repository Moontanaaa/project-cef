import HomePage from '@/views/HomePage.vue';
import NotFound from '@/views/NotFound.vue';
import { createRouter , createWebHistory } from 'vue-router';



const routes = [
    {
        path: '/',
        name : "HomePage",
        component : HomePage
    },
    {
        path : '/:pathmatch(.*)*', component: NotFound
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router