<script setup lang="ts">
// HACK: Workaround for dts rollup failing with 'empty' component.
// If we just add the macro for defining props, everything works as expected.
defineProps();
</script>

<template>
  <div role="tablist">
    <slot></slot>
  </div>
</template>
