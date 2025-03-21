<template>
  <div class="tabs-selector" ref="tabsSelector">
    <router-link
    v-for="tab in tabs"
    :key="tab.name"
    :to="tab.path"
    class="tabs-selector__tab"
    :class="{ 'tabs-selector__tab_active': tab.path === route.path }">
      {{ tab.label }}
    </router-link>
    <div class="tabs-selector__active-line" :style="indicatorStyle" />
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const indicatorStyle = ref({});
const tabsSelector = ref(null)
const isMount = ref(true)

const tabs = [
  { name: 'form', label: 'Форма', path: '/' },
  { name: 'data', label: 'Данные', path: '/data' },
]

const changeTabIndicator = () => {
  nextTick(() => {
    const selectedTab = tabsSelector.value.querySelector('.router-link-active') || {}
    indicatorStyle.value = {
      width: `${selectedTab.offsetWidth}px`,
      transform: `translateX(${selectedTab.offsetLeft}px`,
      transition: isMount.value ? '0s' : '0.2s'
    };
    if (isMount.value) isMount.value = false
  })
}

watch(route, () => {
  changeTabIndicator()
})


</script>

<style lang="scss" scoped>
.tabs-selector {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .tabs-selector__tab {
    padding: 10px 20px;
    text-decoration: none;
    min-width: 200px;
    color: $text-light-color;
    border-bottom: 2px solid $secondary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    &_active {
      color: $text-dark-color;
    }
  }

  .tabs-selector__active-line {
    position: absolute;
    bottom: 0px;
    left: 0px;
    transform: translateX(0px);
    height: 2px;
    background-color: $primary-color;
    transition: 0.2s;
  }
}
</style>