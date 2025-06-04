<template>
  <div class="home">
    <h2>Добро пожаловать в наш ресторан - </h2>
    <h1>Kuligin Dishes</h1>
    <p>Накормим и наготовим, как бабушка :)</p>
    
    <router-link to="/menu" class="menu-btn">Перейти в меню</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
}

.menu-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #5442b9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.menu-btn:hover {
  background-color: #5442b9;
}
</style>