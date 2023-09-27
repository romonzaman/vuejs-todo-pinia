import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
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
            const filterCB = (user)=> {
              console.log(user)
              console.log(form)
              return user.email==form.email
            }
            const matchedUsers = this.users.filter(filterCB)
            console.log(matchedUsers)
            if (matchedUsers.length > 0){
              console.log("true");
              this.currentUser = matchedUsers[0]
              this.isAuthenticated = true
              this.router.push('/')
            } else {
              console.log("false");
              return false
            }
            return true
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
