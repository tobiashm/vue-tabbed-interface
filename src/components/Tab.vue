<script setup lang="ts">
import { ref } from 'vue';
import { useTabbedInterface } from './TabbedInterface.vue';

defineProps<{
  name: string;
}>();

const { isSelected, selectTab } = useTabbedInterface();

const button = ref<HTMLButtonElement>();

function focusTab(tab: Element | null | undefined) {
  if (tab instanceof HTMLElement && tab.getAttribute('role') === 'tab') {
    (tab as HTMLElement).focus();
  }
}

/**
 * Understøt navigation med piletaster og Home/End, som beskrevet her:
 * https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-21
 */
function keydownEventListener(event: KeyboardEvent) {
  if (!button.value) return;
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      focusTab(
        button.value.previousElementSibling ??
          button.value.parentElement?.lastElementChild
      );
      break;
    case 'ArrowRight':
      event.preventDefault();
      focusTab(
        button.value.nextElementSibling ??
          button.value.parentElement?.firstElementChild
      );
      break;
    case 'Home':
      event.preventDefault();
      focusTab(button.value.parentElement?.firstElementChild);
      break;
    case 'End':
      event.preventDefault();
      focusTab(button.value.parentElement?.lastElementChild);
      break;
  }
}
</script>

<template>
  <button
    :id="`tab-${name}`"
    ref="button"
    role="tab"
    :aria-selected="isSelected(name)"
    :aria-controls="`tab-panel-${name}`"
    :tabindex="isSelected(name) ? undefined : -1"
    @click="selectTab(name)"
    @keydown="keydownEventListener"
  >
    <slot></slot>
  </button>
</template>
