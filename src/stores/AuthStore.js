import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore( "auth", () => {

    const isAuthenticated = ref(false)

    function login(form) {
        console.log(form)
        isAuthenticated.value = true
    }
    function logout() {
        isAuthenticated.value = false
    }

    function register(form) {
        console.log(form)
        isAuthenticated.value = true
    }

    return  {isAuthenticated, login, logout, register}
})

export {useAuthStore}