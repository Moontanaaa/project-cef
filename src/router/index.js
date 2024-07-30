import HomePage from '@/views/HomePage.vue';
import NotFound from '@/views/NotFound.vue';
import ContactForm from '@/components/ContactForm.vue';
import FileProjects from '@/components/FileProjects.vue';


import { createRouter , createWebHistory } from 'vue-router';



const routes = [
    {
        path: '/',
        name : "HomePage",
        component : HomePage
    },
    {
        path: '/ContactForm',
        name : "ContactForm",
        component : ContactForm
    },
    {
        path:'/FileProject',
        name:"FileProject",
        component : FileProjects
    },
    {
        path : '/:pathmatch(.*)*', component: NotFound
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router