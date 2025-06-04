<template>
  <div class="dish-card" :class="{ bounce: isAnimating }" @animationend="isAnimating = false">
    <img :src="dish.image" :alt="dish.name" class="dish-image">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <div class="price-add">
      <span class="price">{{ dish.price }} ₽</span>
      <button @click="addToCart">Добавить</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store'

export default {
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAnimating: false
    }
  },
  methods: {
    addToCart() {
      const cartStore = useCartStore()
      cartStore.addToCart(this.dish)
      this.isAnimating = true
    }
  }
}
</script>

<style scoped>
.dish-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 250px;
  transition: transform 0.3s;
  background-color: azure;
}

.dish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.dish-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.price-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.price {
  font-weight: bold;
  font-size: 1.2em;
}

button {
  background-color: #5442b9;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5442b9;
}
</style>