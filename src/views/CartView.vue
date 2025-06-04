<template>
  <div class="cart-view">
    <h1>Ваша корзина</h1>
    
    <div v-if="items.length === 0" class="empty-cart">
      <p>Ваша корзина пуста</p>
      <router-link to="/menu" class="back-to-menu">Вернуться в меню</router-link>
    </div>
    
    <div v-else>
      <div class="cart-items">
        <CartItem 
          v-for="item in items" 
          :key="item.id" 
          :item="item" 
        />
      </div>
      
      <div class="cart-summary">
        <h3>Итого: {{ totalPrice }} ₽</h3>
        <router-link to="/checkout" class="checkout-btn">Оформить заказ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'pinia'
import { useCartStore } from '../store'
import CartItem from '../components/CartItem.vue'

export default {
  components: { CartItem },
  computed: {
    ...mapState(useCartStore, ['items']),
    ...mapGetters(useCartStore, ['totalPrice'])
  }
}
</script>

<style scoped>
.cart-view {
  max-width: 800px;
  margin: 0 auto;
}

.empty-cart {
  text-align: center;
  padding: 40px 0;
}

.back-to-menu {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5442b9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.cart-summary {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-btn {
  padding: 10px 25px;
  background-color: #5442b9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #4a38b4;
}
</style>