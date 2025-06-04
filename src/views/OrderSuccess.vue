<template>
  <div class="order-success">
    <div class="success-card">
      <h1>Спасибо за ваш заказ!</h1>
      <p>Ваш заказ №{{ orderDetails.orderNumber }} успешно оформлен.</p>
      <p>Мы свяжемся с вами в ближайшее время для подтверждения.</p>
      
      <div class="order-details">
        <h3>Детали заказа:</h3>
        <p><strong>Имя:</strong> {{ orderDetails.name }}</p>
        <p><strong>Телефон:</strong> {{ orderDetails.phone }}</p>
        <p><strong>Адрес:</strong> {{ orderDetails.address }}</p>
        <p v-if="orderDetails.comments"><strong>Комментарий:</strong> {{ orderDetails.comments }}</p>
        
        <h4>Состав заказа:</h4>
        <ul>
          <li v-for="item in orderDetails.items" :key="item.id">
            {{ item.name }} × {{ item.quantity }} — {{ item.price * item.quantity }} ₽
          </li>
        </ul>
        <p class="total"><strong>Итого: {{ orderDetails.total }} ₽</strong></p>
      </div>
      
      <router-link to="/" class="home-link">Вернуться на главную</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCartStore } from '../store'

export default {
  computed: {
    ...mapState(useCartStore, ['orderDetails'])
  },
  mounted() {
    if (!this.orderDetails) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.order-success {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.success-card {
  max-width: 600px;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
}

.success-card h1 {
  color: #5442b9;
  margin-top: 0;
}

.order-details {
  margin: 30px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  text-align: left;
}

.order-details h3, .order-details h4 {
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

.order-details ul {
  list-style: none;
  padding: 0;
}

.order-details li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.total {
  text-align: right;
  font-size: 1.2em;
  margin-top: 10px;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5442b9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #3c2c96;
}
</style>