<script setup lang="ts">
import { useTabbedInterface } from '../composables/TabbedInterface';

defineProps<{
  tab: string;
  tag?: string;
}>();

const { isSelected } = useTabbedInterface();
</script>

<template>
  <component
    :is="tag || 'section'"
    :id="`tab-panel-${tab}`"
    :hidden="!isSelected(tab)"
    role="tabpanel"
    tabindex="0"
    :aria-labelledby="`tab-${tab}`"
  >
    <slot></slot>
  </component>
</template>
