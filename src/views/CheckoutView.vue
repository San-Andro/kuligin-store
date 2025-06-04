<template>
  <div class="checkout-view">
    <h1>Оформление заказа</h1>
    
    <div class="checkout-container">
      <div class="order-summary">
        <h3>Ваш заказ</h3>
        <ul>
          <li v-for="item in items" :key="item.id">
            {{ item.name }} × {{ item.quantity }} — {{ item.price * item.quantity }} ₽
          </li>
        </ul>
        <div class="total">
          <strong>Итого: {{ totalPrice }} ₽</strong>
        </div>
      </div>
      
      <form @submit.prevent="submitOrder" class="order-form">
        <h3>Данные для доставки</h3>
        
        <div class="form-group">
          <label for="name">Имя:</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name" 
            required
            placeholder="Ваше имя"
          >
        </div>
        
        <div class="form-group">
          <label for="phone">Телефон:</label>
          <input 
            type="tel" 
            id="phone" 
            v-model="form.phone" 
            required
            placeholder="+7 (XXX) XXX-XX-XX"
          >
        </div>
        
        <div class="form-group">
          <label for="address">Адрес доставки:</label>
          <textarea 
            id="address" 
            v-model="form.address" 
            required
            placeholder="Улица, дом, квартира"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="comments">Комментарий к заказу:</label>
          <textarea 
            id="comments" 
            v-model="form.comments" 
            placeholder="Ваши пожелания"
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Подтвердить заказ</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'pinia'
import { useCartStore } from '../store'

export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        address: '',
        comments: ''
      }
    }
  },
  computed: {
    ...mapState(useCartStore, ['items']),
    ...mapGetters(useCartStore, ['totalPrice'])
  },
  methods: {
    ...mapActions(useCartStore, ['setOrderDetails', 'clearCart']),
    submitOrder() {
      const orderDetails = {
        ...this.form,
        items: this.items,
        total: this.totalPrice,
        orderNumber: Math.floor(Math.random() * 1000000),
        date: new Date().toLocaleString()
      }
      
      this.setOrderDetails(orderDetails)
      this.clearCart()
      this.$router.push('/order-success')
    }
  }
}
</script>

<style scoped>
.checkout-view {
  max-width: 1000px;
  margin: 0 auto;
}

.checkout-container {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.order-summary, .order-form {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.order-summary {
  max-width: 300px;
}

.order-summary h3, .order-form h3 {
  margin-top: 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.order-summary ul {
  list-style: none;
  padding: 0;
}

.order-summary li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.total {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 2px solid #ddd;
  text-align: right;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  height: 80px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #5442b9;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #5442b9;
}

@media (max-width: 768px) {
  .checkout-container {
    flex-direction: column;
  }
  
  .order-summary {
    max-width: 100%;
  }
}
</style>