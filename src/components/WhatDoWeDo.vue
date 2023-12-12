<script setup>
import { useRouter } from 'vue-router'

import { useStaticDataStore } from '@/stores/staticData'
import ProductCard from './share/ProductCard.vue'
import AppButton from './share/AppButton.vue'

const router = useRouter()
const { homepageData: { whatDoWeDo: { title, description, products, callToAction } } } = useStaticDataStore()

const handleAction = () => {
  router.push({ name: callToAction.to })
}
</script>

<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    <div class="action">
      <AppButton color="red" varient="reversed" @click="handleAction">{{ callToAction.text }}</AppButton>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--color-primary);
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--color-white);
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: var(--color-black);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.action {
  text-align: center;
  padding-top: 2rem;
}

</style>
