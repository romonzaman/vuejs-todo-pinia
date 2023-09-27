import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const ProductStore = defineStore('products', {
  state: () => ({
    products: reactive([])
  }),
  getters: {
    totalProducts(state) {
      return this.products.length
    }
  },
  actions: {
        addProduct(product) {
            this.products.push({
                id: Number(product.id),
                name: product.name,
                price: Number(product.price)
            })
            // console.log(this.products)
        }
    }
})
