<template>
  <transition name="ui-notification" appear>
    <div v-if="isVisible" class="ui-notification">
      <div class="ui-notification__content">
        <span class="ui-notification__title">{{ getNotification.title }}</span>
        <span class="ui-notification__description">{{ getNotification.description }}</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useAppStore } from '@/stores/appStore';

const isVisible = ref(false)
const duration = 4000;
const appStore = useAppStore()

const getNotification = computed(() => {
  return appStore.getNotification
})

const showNotification = () => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
    setTimeout(() => {
      // удалить из стора
    }, 300);
  }, duration);
}

watch(() => getNotification.value, () => {
  if (getNotification.value) showNotification()
})

</script>

<style lang="scss" scoped>
.ui-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: $primary-color;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 300px;

  .ui-notification__title {
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
  }

  .ui-notification__description {
    margin: 5px 0px 0px;
    font-size: 14px;
  }

  .ui-notification__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.ui-notification-enter-active,
.ui-notification-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}

.ui-notification-enter-from,
.ui-notification-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

.ui-notification-enter-to,
.ui-notification-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>