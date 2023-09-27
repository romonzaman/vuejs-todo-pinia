import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth2', {
  state: () => ({
    users: [
    ],
    currentUser: "",
    isLoading: false,
    isAuthenticated: false
  }),
  persist: true,
  getters: {
    getUser(state) {
      return this.currentUser
    }
  },
  actions: {
        login(form) {
            console.log("login ok")
            this.currentUser = form.email
            this.isAuthenticated = true
            this.router.push('/')
        },
        logout() {
            this.currentUser = ""
            this.isAuthenticated = false
        },
        register(form) {
            console.log("register ok")
            this.users.push(form)
            this.router.push('/')
        }
    }
})
