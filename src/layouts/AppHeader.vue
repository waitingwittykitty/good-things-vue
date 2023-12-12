<script setup>
import { RouterLink, useRouter } from 'vue-router'

import { useMenuStore } from '@/stores/menu'
import MagnifierIcon from '@/components/icons/MagnifierIcon.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'

const { appMenu } = useMenuStore()
const router = useRouter()

const handleLearn = () => {
  router.push({ name: 'ourNetwork', query: { service: 'learn' } })
}

const handleDonate = () => {
  router.push({ name: 'ourNetwork', query: { service: 'donate' } })
}
</script>

<template>
  <header>
    <div class="container extended-bar">
      <a class="search"><MagnifierIcon :size="16" classProp="icon" />Search</a>
      <a class="learn" @click="handleLearn">Learn</a>
      <a class="donate" @click="handleDonate">Donate</a>
    </div>
    <div class="container navbar">
      <LogoIcon classProp="logo" :size="216" />

      <div class="wrapper">
        <nav>
          <RouterLink v-for="menuItem in appMenu" :key="menuItem.label" :to="menuItem.path">
            {{ menuItem.label }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.extended-bar {
  border-bottom: 1px solid var(--color-border);
  display: flex;
}

.extended-bar .search {
  margin-right: auto;
}

.extended-bar .learn {
  border-bottom: 3px solid var(--color-green);
}

.extended-bar .donate {
  background: var(--color-red);
  color: var(--color-white);
}

.extended-bar a {
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
}

.icon {
  margin-right: 0.5rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-primary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.625rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-end;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
