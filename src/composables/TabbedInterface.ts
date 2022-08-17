import { computed, ref } from 'vue';

type TabbedInterfaceConfig = {
  selectedTab: () => string;
  onTabSelected: (tab: string) => void;
};

const backupSelectedTab = ref('');

const currentConfig = {
  selectedTab: computed(() => backupSelectedTab.value),
  onTabSelected(tab: string) {
    backupSelectedTab.value = tab;
  }
};

export function useTabbedInterface(config?: TabbedInterfaceConfig) {
  if (config) {
    currentConfig.selectedTab = computed(config.selectedTab);
    currentConfig.onTabSelected = config.onTabSelected;
  }

  return {
    isSelected: (tab: string) => tab === currentConfig.selectedTab.value,
    selectTab: (tab: string) => currentConfig.onTabSelected(tab)
  };
}
