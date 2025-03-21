import { defineStore } from 'pinia';

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: [],
  }),

  getters: {
    getFormData: (state) => state.formData,
  },

  actions: {
    addFormData(data) {
      this.formData.push(data);
      this.saveFormDataToLocalStorage();
    },
    removeElementByIndex(elementIndex) {
      this.formData.splice(elementIndex, 1)
      this.saveFormDataToLocalStorage();
    },
    loadFormData() {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        this.formData = JSON.parse(savedData);
      }
    },
    saveFormDataToLocalStorage() {
      localStorage.setItem('formData', JSON.stringify(this.formData));
    },
  },
});