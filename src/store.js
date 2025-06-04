import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    orderDetails: null
  }),
  actions: {
    addToCart(dish) {
      const existingItem = this.items.find(item => item.id === dish.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...dish, quantity: 1 })
      }
      
      this.saveToLocalStorage()
    },
    removeFromCart(itemId) {
      this.items = this.items.filter(item => item.id !== itemId)
      this.saveToLocalStorage()
    },
    updateQuantity(itemId, newQuantity) {
      const item = this.items.find(item => item.id === itemId)
      if (item) {
        item.quantity = newQuantity
        this.saveToLocalStorage()
      }
    },
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    setOrderDetails(details) {
      this.orderDetails = details
    }
  },
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    itemCount: (state) => {
      return state.items.reduce((count, item) => {
        return count + item.quantity
      }, 0)
    }
  }
})