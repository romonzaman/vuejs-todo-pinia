import { createWebHistory, createRouter } from "vue-router";

import HomeComponent from "../components/HomeComponent.vue"
import TodoComponent from "../components/TodoComponent.vue"
import SignupComponent from "../components/Signup.vue"
import LoginComponent from "../components/Login.vue"
import LeftMenu from "../components/LeftMenu.vue"
import { useAuthStore } from "../stores/AuthStore2";

const routes = [
    {
        path: "/",
        components: { default: HomeComponent, LeftSideBar: LeftMenu}
    },
    {
        path: "/login",
        components: { default: LoginComponent, LeftSideBar: LeftMenu}
    },
    {
        path: "/register",
        components: { default: SignupComponent, LeftSideBar: LeftMenu}
    },
    {
        path: "/todo",
        components: { default: TodoComponent, LeftSideBar: LeftMenu},
        meta:{
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {

    const auth = useAuthStore()

    if(to.meta.requiresAuth && !auth.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})

export default router