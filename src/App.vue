<template>
  <main>
    <Button plain type="primary">a</Button>
    <Button round>a</Button>
    <Button circle>U•ェ•*U</Button>
    <Button disabled>U•ェ•*U</Button>
    <a href="#">the link</a>
</main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/Button/Button.vue'
import type { ButtonInstance } from '.components/Button/types'
const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref)
  }
})
</script>

<style scoped></style>
