<script setup lang="ts">
defineProps<{
  tag?: string;
}>();
</script>

<template>
  <component :is="tag || 'div'" role="tablist">
    <slot></slot>
  </component>
</template>
