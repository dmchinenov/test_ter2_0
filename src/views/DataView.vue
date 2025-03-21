<template>
  <div class="data-view">
    <DataTable v-if="tableData.length" :headers="headers" :tableData="tableData" @deleteRow="deleteRow" />
    <div v-else class="data-view__empty">
      <span class="data-view__empty-title">Упс, данных еще нет</span>
      <span class="data-view__empty-description">Добавьте новые данные на вкладке Форма</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFormStore } from '@/stores/formStore';
import DataTable from '@/components/DataTable.vue';

const formStore = useFormStore();
formStore.loadFormData();

const headers = ['ФИО', 'Дата Рождения', 'Номер Телефона', 'Электронная почта'];

const tableData = computed(() => {
  return formStore.getFormData
});

const deleteRow = (rowIndex) => {
  formStore.removeElementByIndex(rowIndex)
}
</script>

<style lang="scss" scoped>
.data-view {

  .data-view__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    &>:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .data-view__empty-description {
    font-size: 14px;
    color: $text-color;
  }

  .data-view__empty-title {
    font-size: 18px;
    color: $text-dark-color;
  }
}
</style>