import { createRouter, createWebHistory} from "vue-router";
import RegistrationPage from './components/RegistrationPage.vue';
import DashboardPage from './components/DashboardPage.vue';
import LoginPage from './components/LoginPage.vue';
import HomePage from './components/HomePage.vue';


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect: '/registration'},
        {path:'/registration', component:RegistrationPage},
        {path:'/dashboard', component:DashboardPage},
        {path:'/login', component:LoginPage},
        {path:'/home', component:HomePage},

        
    ]
})


export default router;