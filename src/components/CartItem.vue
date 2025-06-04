<template>
  <div class="cart-item">
    <div class="item-info">
      <h4>{{ item.name }}</h4>
      <p>{{ item.price }} ₽ × {{ item.quantity }} = {{ item.price * item.quantity }} ₽</p>
    </div>
    <div class="item-actions">
      <input 
        type="number" 
        min="1" 
        v-model.number="quantity" 
        @change="updateQuantity"
        class="quantity-input"
      >
      <button @click="removeItem" class="remove-btn">×</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: this.item.quantity
    }
  },
  methods: {
    updateQuantity() {
      if (this.quantity < 1) this.quantity = 1
      const cartStore = useCartStore()
      cartStore.updateQuantity(this.item.id, this.quantity)
    },
    removeItem() {
      const cartStore = useCartStore()
      cartStore.removeFromCart(this.item.id)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.item-info {
  flex: 1;
}

.item-actions {
  display: flex;
  align-items: center;
}

.quantity-input {
  width: 50px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
}

.remove-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background-color: #cc0000;
}
</style>