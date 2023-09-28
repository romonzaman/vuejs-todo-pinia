<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore2'

import userVuelidate from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'

const authStore = useAuthStore()
const router = useRouter()

// if (authStore.isAuthenticated == true) {
//     router.push("/")
// }
const loginOK = ref(false)
const form = reactive({ email: '', password: '', password2: '', })
const passMismatch = ref("")
const rules = {
    email: { required, email },
    password: { required },
    password2: {
        required,
        // sameAsPassword: sameAs('password')
    }
}
const v$ = userVuelidate(rules, form)

const formSubmit = async () => {
    console.log(form)
    passMismatch.value = ""
    const validateResult = await v$.value.$validate()
    if (!validateResult) {
        console.log('Invalid')
        return false
    }
    if (form.password != form.password2) {
        passMismatch.value = "Password does not match"
        return false
    }
    console.log("formSubmit")
    // simulate api execution delay
    loginOK.value = true
    authStore.register(form)
    setTimeout(() => {
        loginOK.value = false
        router.push('/')
    }, 2000)
}
const redirect_login = () => {
    router.push('/login')
}
</script>


<template>
    <div>
        <!-- component -->
        <div class="bg-grey-lighter flex flex-col mt-10">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <div v-if="loginOK" class="pt-5 pb-2 text-green-600 text-xs italic font-bold">Signup successful.
                        Please Login now..</div>

                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <!-- <input v-model="form.name" type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname" placeholder="Full Name" />
                    <p class="text-xs text-red-600 mt-2" v-for="error in v$.name.$errors">
                        {{ error.$message }}
                    </p> -->

                    <input v-model="form.email" type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email" placeholder="Email" />
                    <p class="text-xs text-red-600 mt-2" v-for="error in v$.email.$errors">
                        {{ error.$message }}
                    </p>

                    <input v-model="form.password" type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                        placeholder="Password" />
                    <p class="text-xs text-red-600 mt-2" v-for="error in v$.password.$errors">
                        {{ error.$message }}
                    </p>

                    <input v-model="form.password2" type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password"
                        placeholder="Confirm Password" />
                    <p class="text-xs text-red-600 mt-2" v-for="error in v$.password2.$errors">
                        {{ error.$message }}
                    </p>
                    <p class="text-xs text-red-600 mt-2" v-if="passMismatch.length > 0">
                        {{ passMismatch }}
                    </p>


                    <button type="submit" @click.prevent="formSubmit()"
                        class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-green-dark focus:outline-none my-1">Create
                        Account</button>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                    <a class="no-underline border-b border-blue text-blue" href="" @click.prevent="redirect_login()">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
