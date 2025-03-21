import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    notification: null,
  }),

  getters: {
    getNotification: (state) => state.notification,
  },

  actions: {
    setNotification(newData) {
      this.notification = {
        title: newData.title,
        description: newData.description,
      }
    }
  },
});