export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
export type NameType = String | Number
import type { Ref, InjectionKey } from 'vue'
export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}
export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}
export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}
