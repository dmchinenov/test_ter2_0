<template>
  <div class="data-table">
    <div class="data-table__headers">
      <div
        v-for="(header, index) in props.headers"
        :key="index"
        class="data-table__header">
        {{ header }}
      </div>
    </div>

    <div class="data-table__content">
      <div
        v-for="(row, rowIndex) in tableData"
        :key="rowIndex"
        class="data-table__row">
        <div
          v-for="(field, fieldIndex) in row"
          :key="fieldIndex"
          class="data-table__ceil">
          {{ field }}
        </div>
        <span class="data-table__delete" @click="deleteRow(fieldIndex)">Удалить</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  tableData: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['deleteRow'])

const deleteRow = (rowIndex) => {
  emit('deleteRow', rowIndex)
}
</script>

<style lang="scss" scoped>
.data-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  max-width: 1000px;
  width: 100vw;

  .data-table__headers {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    background: #f1f1f1;
    border-bottom: 1px solid #ddd;
    :not(:last-child) {
      border-right: 1px solid #ddd;
    }
  }

  .data-table__header {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .data-table__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    >:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }
  }

  .data-table__row {
    display: flex;
    width: 100%;
    height: 40px;
    transition: 0.2s;
    position: relative;
    >:not(:last-child) {
      border-right: 1px solid #ddd;
    }
    &:hover {
      background: #f1f1f1;
      .data-table__delete {
        opacity: 1;
      }
    }

    .data-table__delete {
      position: absolute;
      right: -84px;
      opacity: 0;
      padding: 10px;
      cursor: pointer;
    }
  }

  .data-table__ceil {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>