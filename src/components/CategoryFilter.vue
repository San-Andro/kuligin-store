<template>
  <div class="category-filter">
    <button 
      v-for="category in categories" 
      :key="category" 
      @click="setCategory(category)"
      :class="{ active: activeCategory === category }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: String,
      default: ''
    }
  },
  methods: {
    setCategory(category) {
      this.$emit('category-change', category)
    }
  }
}
</script>

<style scoped>
.category-filter {
  margin: 20px 0;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.category-filter button {
  padding: 8px 15px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-filter button:hover {
  background-color: #ddd;
}

.category-filter button.active {
  background-color: #5442b9;
  color: white;
}
</style>