<script setup lang="ts">
import { useTabbedInterface } from '../composables/TabbedInterface';

const props = defineProps<{
  name: string;
}>();

const { isSelected, selectTab } = useTabbedInterface();

function focusTab(tab: Element | null | undefined) {
  if (tab instanceof HTMLElement && tab.getAttribute('role') === 'tab') {
    (tab as HTMLElement).focus();
  }
}

function clickEventListener() {
  if (!isSelected(props.name)) {
    selectTab(props.name);
  }
}

/**
 * Support keyboard navigation with arrows and Home/End, as described here:
 * https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-21
 */
function keydownEventListener(event: KeyboardEvent) {
  const button = event.target as HTMLButtonElement;
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      focusTab(
        button.previousElementSibling ?? button.parentElement?.lastElementChild
      );
      break;
    case 'ArrowRight':
      event.preventDefault();
      focusTab(
        button.nextElementSibling ?? button.parentElement?.firstElementChild
      );
      break;
    case 'Home':
      event.preventDefault();
      focusTab(button.parentElement?.firstElementChild);
      break;
    case 'End':
      event.preventDefault();
      focusTab(button.parentElement?.lastElementChild);
      break;
  }
}
</script>

<template>
  <button
    :id="`tab-${name}`"
    role="tab"
    :aria-selected="isSelected(name)"
    :aria-controls="`tab-panel-${name}`"
    :tabindex="isSelected(name) ? undefined : -1"
    @click="clickEventListener"
    @keydown="keydownEventListener"
  >
    <slot></slot>
  </button>
</template>
