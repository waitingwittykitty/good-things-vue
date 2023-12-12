<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'white', 'green', 'red'].includes(value)
  },
  varient: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'reversed', 'outlined'].includes(value)
  }
})
const emit = defineEmits(['click'])
</script>

<template>
  <button :class="[color, varient]" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: ease background .3s;
  font-weight: 600;
}

button.primary.reversed {
  color: var(--color-primary);
  border: var(--color-primary) solid 1px;
  background: var(--color-white);
}

button.white.reversed {
  color: var(--color-white);
  border: var(--color-white) solid 1px;
  background: var(--color-primary);
}

button.green.reversed {
  color: var(--color-green);
  border: var(--color-green) solid 1px;
  background: var(--color-white);
}

button.red.reversed {
  color: var(--color-red);
  border: var(--color-red) solid 1px;
  background: var(--color-white);
}

button.primary.outlined {
  color: var(--color-primary);
  border: var(--color-primary) solid 1px;
  background: none;
}

button.white.outlined {
  color: var(--color-white);
  border: var(--color-white) solid 1px;
  background: none;
}

button.green.outlined {
  color: var(--color-green);
  border: var(--color-green) solid 1px;
  background: none;
}

button.red.outlined {
  color: var(--color-red);
  border: var(--color-red) solid 1px;
  background: none;
}

button.primary.filled {
  color: var(--color-white);
  background: var(--color-primary);
}

button.primary:hover {
  color: var(--color-white-soft);
  background: var(--color-primary-soft);
}

button.white.filled {
  color: var(--color-black);
  background: var(--color-white);
}

button.white:hover {
  color: var(--color-black);
  background: var(--color-white-soft);
}

button.green.filled {
  color: var(--color-white);
  background: var(--color-green);
}

button.green:hover {
  color: var(--color-white-soft);
  background: var(--color-green-soft);
}

button.red.filled {
  color: var(--color-white);
  background: var(--color-red);
}

button.red:hover {
  color: var(--color-white-soft);
  background: var(--color-red-soft);
}
</style>
