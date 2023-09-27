<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from './stores/AuthStore2'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
    authStore.logout()
    router.push("/")
}

</script>


<template>
    <div class="h-screen">
        <div class="p-5 bg-blue-500 text-white flex justify-between items-center">
            <div>LOGO</div>
            <div>
                <span>{{ authStore.getUser }}</span>
                <a v-if="authStore.isAuthenticated" href="" @click.prevent="logout()"
                    class="bg-red-900 p-2 cursor-pointer text-white rounded-lg ml-4">
                    logout
                </a>
            </div>
        </div>
        <div class="flex justify-start items-center">
            <div class="w-[200px] bg-slate-50 h-screen p-5">
                <router-view name="LeftSideBar"></router-view>
            </div>
            <div class="w-full bg-white h-screen border border-gray-200">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
