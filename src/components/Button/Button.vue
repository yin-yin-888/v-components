<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
 import type { ButtonProps } from './types'
 import {ref} from 'vue'
 withDefaults(defineProps<ButtonProps>(),{nativeType:'button'})
defineOptions({
    name:'VKbutton'
  })
const _ref = ref<HTMLButtonElement>()
  defineExpose({
    ref:_ref
  })
  // import {buttonProps} from './types'
  // defineProps(buttonProps)
</script>

<style>

</style>

