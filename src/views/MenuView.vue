<template>
  <div class="menu-view">
    <h1>Наше меню</h1>
    
    <CategoryFilter 
      :categories="categories" 
      :activeCategory="activeCategory"
      @category-change="setActiveCategory"
    />
    
    <div class="dishes-grid">
      <DishCard 
        v-for="dish in filteredDishes" 
        :key="dish.id" 
        :dish="dish" 
      />
    </div>
  </div>
</template>

<script>
import DishCard from '../components/DishCard.vue'
import CategoryFilter from '../components/CategoryFilter.vue'

export default {
  components: { DishCard, CategoryFilter },
  data() {
    return {
      activeCategory: '',
      dishes: [
        {
          id: 1,
          name: 'Маргарита',
          description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
          price: 450,
          category: 'Пицца',
          image: ''
        },
        {
          id: 2,
          name: 'Пепперони',
          description: 'Пицца с томатным соусом, моцареллой и острой колбаской пепперони',
          price: 550,
          category: 'Пицца',
          image: ''
        },
        {
          id: 3,
          name: 'Кола',
          description: 'Освежающий газированный напиток',
          price: 120,
          category: 'Напитки',
          image: ''
        },
        {
          id: 4,
          name: 'Тирамису',
          description: 'Итальянский десерт из печенья савоярди, сыра маскарпоне и кофе',
          price: 280,
          category: 'Десерты',
          image: ''
        },
        {
          id: 5,
          name: 'Чизкейк',
          description: 'Нежный десерт из творожного сыра на песочной основе',
          price: 250,
          category: 'Десерты',
          image: ''
        },
        {
          id: 6,
          name: 'Мохито',
          description: 'Освежающий коктейль с лаймом, мятой и содовой',
          price: 200,
          category: 'Напитки',
          image: ''
        }
      ]
    }
  },
  computed: {
    categories() {
      const categories = this.dishes.map(dish => dish.category)
      return ['Все', ...new Set(categories)]
    },
    filteredDishes() {
      if (!this.activeCategory || this.activeCategory === 'Все') {
        return this.dishes
      }
      return this.dishes.filter(dish => dish.category === this.activeCategory)
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
    }
  }
}
</script>

<style scoped>
.dishes-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(59, 223, 108);
  border-radius: 16px;
}
</style>