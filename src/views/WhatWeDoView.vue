<script setup>
import { useStaticDataStore } from '@/stores/staticData';
import ProductCard from '../components/share/ProductCard.vue'

const { whatWeDoData: { title, description, products } } = useStaticDataStore()
</script>

<template>
  <main class="container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 4rem;
}

p {
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--color-primary);
  gap: 4rem;
  padding: 4rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

</style>
