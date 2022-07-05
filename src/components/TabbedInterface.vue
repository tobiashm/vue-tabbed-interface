<script lang="ts">
import { inject, InjectionKey, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const SelectedTab: InjectionKey<Ref<string>> = Symbol('SelectedTab');

export function useTabbedInterface() {
  const router = useRouter();
  const selectedTab = inject(SelectedTab, ref(''));

  return {
    isSelected: (tab: string) => tab === selectedTab.value,
    selectTab: (tab: string) =>
      router.push({ query: { ...router.currentRoute.value.query, tab } })
  };
}

</script>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { provide } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  defaultTab: string;
}>();

const route = useRoute();

const selectedTab = computed(() =>
  (route.query.tab || props.defaultTab).toString()
);

provide(SelectedTab, selectedTab);
</script>

<template>
  <slot></slot>
</template>
