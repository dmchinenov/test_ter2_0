<template>
  <div class="app">
    <UiNotification />
    <TabsSelector class="tabs-selector"/>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TabsSelector from '@/components/TabsSelector.vue';
import UiNotification from '@/components/UI/UiNotification.vue';

</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .tabs-selector {
    margin: 40px 0px;
  }
}
</style>
