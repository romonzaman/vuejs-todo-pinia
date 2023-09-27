<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../stores/AuthStore2'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
    authStore.logout()
    router.push("/")
}

const login = () => {
    authStore.isAuthenticated = true
}

</script>


<template>
    <ul class="text-left m-5">
        <li>
            <router-link class="text-md text-blue-700 hover:pr-2 hover:bg-blue-800 hover:text-white"
                to="/">Home</router-link>
        </li>
        <!-- <li class="mt-5">
            <router-link v-if="!authStore.isAuthenticated"
                class="text-md text-blue-700 hover:pr-2 hover:bg-blue-800 hover:text-white" to="/login">Login</router-link>

            <a v-else class="text-md text-blue-700 hover:pr-2 hover:bg-blue-800 hover:text-white cursor-pointer"
                @click="logout()">Logout</a>
        </li> -->
        <!-- <li>
            <router-link v-if="!authStore.isAuthenticated"
                class="text-md text-blue-700 hover:pr-2 hover:bg-blue-800 hover:text-white"
                to="/register">Register</router-link>
        </li> -->
        <li class="mt-5" v-if="authStore.isAuthenticated">
            <router-link class="text-md text-blue-700 hover:pr-2 hover:bg-blue-800 hover:text-white"
                to="/todo">ToDo</router-link>
        </li>
    </ul>
</template>

<style scoped></style>
