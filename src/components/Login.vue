<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore2'
import userVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const authStore = useAuthStore()
const router = useRouter()

if (authStore.isAuthenticated == true) {
    router.push("/")
}

const form = reactive({ email: '', password: '' })
const wrongLogin = ref("")

const rules = {
    email: { required, email },
    password: { required }
}
const v$ = userVuelidate(rules, form)

const loginSubmit = async () => {

    wrongLogin.value = ""
    const validateResult = await v$.value.$validate()
    if (!validateResult) {
        console.log('Invalid')
        return false
    }
    console.log("loginSubmit")
    if (!authStore.login(form)) {
        wrongLogin.value = "Wrong Login"
    }
}

</script>


<template>
    <div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                    account</h2>
            </div>
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p class="text-lg text-red-600 mt-2 text-center font-bold" v-if="wrongLogin.length > 0">
                    {{ wrongLogin }}
                </p>
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div class="mt-2">
                            <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                            <p class="text-xs text-red-600 mt-2" v-for="error in v$.email.$errors">
                                {{ error.$message }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input v-model="form.password" id="password" name="password" type="password"
                                autocomplete="current-password" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2">
                            <p class="text-xs text-red-600 mt-2" v-for="error in v$.password.$errors">
                                {{ error.$message }}
                            </p>

                        </div>
                    </div>

                    <div>
                        <button type="submit" @click.prevent="loginSubmit()"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                        <router-link to="/register"
                            class="mt-10 flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            Up</router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<style scoped></style>
