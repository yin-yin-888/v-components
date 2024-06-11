<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'vkcollapse'
})
import { ref, provide } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { watch } from 'vue';
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(()=>props.modelValue,()=>{
  activeNames.value=props.modelValue
})
import { CollapseContextKey } from './types'
if (props.accordion && activeNames.value.length > 1) {
  console.log('只能有一个')
}
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = [activeNames.value[0] === item ? ' ' : item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}
provide(CollapseContextKey, { activeNames, handleItemClick })
</script>
