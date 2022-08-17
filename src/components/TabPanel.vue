<script setup lang="ts">
import { useTabbedInterface } from '../composables/TabbedInterface';

defineProps<{
  tab: string;
}>();

const { isSelected } = useTabbedInterface();
</script>

<template>
  <section
    :id="`tab-panel-${tab}`"
    :hidden="!isSelected(tab)"
    role="tabpanel"
    tabindex="0"
    :aria-labelledby="`tab-${tab}`"
  >
    <slot></slot>
  </section>
</template>
