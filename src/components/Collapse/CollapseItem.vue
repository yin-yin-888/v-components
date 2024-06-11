<template>
  <div class="vk-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="vk-collapse-item__header"
      :id="`vk-header-${name}`"
      @click="handleClick"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <Transition name="slide">
      <div class="vk-collapse-item_wrapper" v-show="isActive">
          <div class="vk-collapse-item__content" :id="`vk-content-${name}`">
            <slot></slot>
          </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import type { CollapseItemProps } from './types'
import { inject, computed } from 'vue'
import { CollapseContextKey } from './types'
defineOptions({
  name: 'vkcollapseItem'
})
const CollapseContext = inject(CollapseContextKey)
const props = defineProps<CollapseItemProps>()
const isActive = computed(() => CollapseContext?.activeNames.value.includes(props.name))
const transitionEvents:Record<String,(el:HTMLElement)=>void>={
  beforeEnter(el){
    el.style.height='0px'
    el.style.overflow='hidden'
  },
  enter(el){
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el){
    el.style.height=''
    el.style.overflow=''
  },
  beforeLeave(el) { 
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
const handleClick = () => {
  if (props.disabled) {
    return
  }
  CollapseContext?.handleItemClick(props.name)
}
</script>
<style>
.vk-collapse-item__header {
  font-size: 30px;
}
</style>
