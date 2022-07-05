<script setup lang="ts">
import { TabbedInterface, TabList, Tab, TabPanel } from '../lib';
</script>

<template>
  <TabbedInterface default-tab="a">
    <TabList>
      <Tab name="a">A</Tab>
      <Tab name="b">B</Tab>
    </TabList>
    <TabPanel tab="a">Hello darkness my old friend</TabPanel>
    <TabPanel tab="b">I’ve come to talk with you again</TabPanel>
  </TabbedInterface>
</template>

<style>
[role='tablist'] {
  display: flex;
  border-bottom: solid 1px black;
  gap: 1rem;
}

[role='tab'] {
  all: unset;
  padding: 0 1rem;
  border-bottom: solid 2px transparent;
  cursor: pointer;
}
[role='tab']:focus {
  outline: 5px auto Highlight;
  outline: 5px auto -webkit-focus-ring-color;
}
[role='tab'][aria-selected='true'] {
  font-weight: bolder;
  border-bottom-color: black;
}

[role='tabpanel'] {
  padding: 0 1rem;
  margin: 1rem 0;
}
</style>
