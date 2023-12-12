<script setup>
import { useRouter } from 'vue-router'

import { useStaticDataStore } from '@/stores/staticData'
import StandardSelect from './share/StandardSelect.vue'
import AppButton from './share/AppButton.vue'
import { ref, watch } from 'vue'

const router = useRouter()
const {
  homepageData: {
    howCanWeHelpYou: { title, description, roles, services, callToAction }
  }
} = useStaticDataStore()
const role = ref('')
const service = ref('')

watch(
  roles,
  (newValue) => {
    if (!role.value) {
      role.value = newValue?.[0]?.value
    }
  },
  { immediate: true }
)

watch(
  services,
  (newValue) => {
    if (!service.value) {
      service.value = newValue?.[0]?.value
    }
  },
  { immediate: true }
)

const handleAction = () => {
  router.push({ name: callToAction.to, query: { role: role.value, service: service.value } })
}
</script>

<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="box">
      I am <StandardSelect :items="roles" v-model="role" /> and I want
      <StandardSelect :items="services" v-model="service" />
      <AppButton color="red" varient="filled" @click="handleAction">
        {{ callToAction.text }}
      </AppButton>
    </div>
  </section>
</template>

<style scoped>
section {
  background: var(--color-gray);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

.box {
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 1.5rem;
  font-size: 18px;
  gap: 0.5rem;
}
</style>
