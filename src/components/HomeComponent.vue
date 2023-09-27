<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '../stores/AuthStore2'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const login = () => {
    router.push('/login')
}
const register = () => {
    router.push('/register')
}

</script>


<template>
    <p class="text-md w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore
        et dolore magna
        aliqua. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Quis risus sed vulputate odio. Proin sed
        libero enim sed faucibus turpis in. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Quis lectus nulla at
        volutpat diam ut venenatis tellus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Mi in nulla
        posuere sollicitudin aliquam ultrices. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Pretium
        aenean pharetra magna ac. Sed odio morbi quis commodo odio aenean sed adipiscing. Id diam vel quam elementum. Cursus
        eget nunc scelerisque viverra mauris in. Nibh ipsum consequat nisl vel pretium lectus quam. Sed augue lacus viverra
        vitae congue eu consequat ac felis. Vitae aliquet nec ullamcorper sit amet risus. Pulvinar neque laoreet suspendisse
        interdum consectetur libero. Quis hendrerit dolor magna eget est. Sollicitudin aliquam ultrices sagittis orci.</p>

    <div class="flex flex-col justify-start items-start mt-10">
        <button v-if="!authStore.isAuthenticated" class="text-md bg-green-700 text-white p-2 rounded-lg" @click="login()">
            Login
            Here</button>
        <button v-if="!authStore.isAuthenticated" class="text-md bg-blue-700 text-white mt-4 p-2 rounded-lg"
            @click="register()"> Register Now
        </button>
    </div>
</template>

<style scoped></style>
