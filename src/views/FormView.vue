<template>
  <div class="form-view">
    <UiInput
    v-for="field in userData"
    :placeholder="field.placeholder"
    :type="field.type" :errorText="field.errorText"
    :key="field.name"
    v-model.trim="field.value"
    :hasValidation="!!field.validateRules"
    @checkValue="checkValue(field)" />

    <UiButton
    :disabled="isFormInvalid"
    :isLoading="isLoading"
    @click="sendUserData"
    disabledText="Заполните корректно все поля">
      Далее
    </UiButton>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { useAppStore } from '@/stores/appStore';
import UiInput from '@/components/UI/UiInput.vue';
import UiButton from '@/components/UI/UiButton.vue';
import { validateRules } from '@/helpers/validateRules.js'

const formStore = useFormStore();
const appStore = useAppStore();

const isLoading = ref(false)

// Данные формы
const userData = ref([
  { 
    name: 'fullName',
    placeholder: 'Введите ФИО',
    type: 'text',
    value: '',
    touch: false,
    hasError: null,
    errorText: null,
    validateRules: null
  },
  {
    name: 'birthDate',
    placeholder: 'Укажите дату рождения',
    type: 'date',
    value: '',
    touch: false,
    hasError: null,
    errorText: null,
    validateRules: null,
  },
  {
    name: 'phoneNumber',
    placeholder: 'Укажите номер телефона',
    type: 'text',
    value: '',
    touch: false,
    hasError: null,
    errorText: null,
    validateRules: null,
  },
  {
    name: 'email',
    placeholder: 'Укажите email',
    type: 'text',
    value: '',
    touch: false,
    hasError: null,
    errorText: null,
    validateRules: null,
  },
])

onMounted(() => {
  initFormData()
})

// Подгрузка правил валидации для формы и первоначальная проверка формы
const initFormData = () => {
  userData.value.forEach((field) => {
    field.validateRules = validateRules[field.name] || null
  })

  userData.value.forEach((field) => {
    checkValue(field)
  })
}

// Проверка всей формы на валидность
const isFormInvalid = computed(() => {
  return userData.value.some((field) => field.hasError)
})

// Проверка филда по правилам валидации
const checkValue = (field) => {
  if (!field.validateRules) return
  field.touch = field.touch || !!field.value.length;
  field.hasError = field.validateRules.find((rule) => !rule.check(field.value)) || null;
  if (field.touch && field.hasError) field.errorText = field.hasError.errorText
  else field.errorText = null
}

// Очистка формы
const clearForm = () => {
  userData.value.forEach((field) => {
    field.value = ''
    field.hasError = field.touch = field.errorText = null;
    checkValue(field)
  })
}

// Отправка формы
const sendUserData = () => {
  const formData = {}
  userData.value.forEach((field) => {
    formData[field.name] = field.value
  })
  isLoading.value = true
  setTimeout(() => {
    formStore.addFormData(formData)
    appStore.setNotification({title: 'Ого!', description: 'Кажется, всё добавилось. Проверим данные?'})
    isLoading.value = false;
    clearForm()
  }, 2000)

}
</script>

<style lang="scss" scoped>

.form-view {
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

</style>