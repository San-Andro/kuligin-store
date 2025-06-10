<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/menu">Меню</router-link> |
    <router-link to="/cart">Корзина ({{ itemCount }})</router-link>
  </nav>
</template>

<script>
import { mapState } from 'pinia'
import { useCartStore } from '../store'

export default {
  computed: {
    ...mapState(useCartStore, ['itemCount'])
  }
}
</script>

<style scoped>
nav {
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  max-width: 1500px;
  width: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #5442b9;
}
</style>