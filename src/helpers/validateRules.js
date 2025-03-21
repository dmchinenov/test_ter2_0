export const validateRules = {
  fullName: [
    { 
      check: (value) => value.length,
      errorText: 'Пожалуйста, заполните поле'
    },
    {
      check: (value) => /^[А-ЯЁ][а-яё]*(?:-[А-ЯЁ][а-яё]*)?\s[А-ЯЁ][а-яё]*(?:\s[А-ЯЁ][а-яё]*)?$/.test(value),
      errorText: 'Некоректное ФИО'
    },
    {
      check: (value) => value.length >= 6,
      errorText: 'Введите минимум 6 символов',
    }, 
  ],
  email: [
    { 
      check: (value) => value.length,
      errorText: 'Пожалуйста, заполните поле'
    },
    { 
      check: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      errorText: 'Укажите корректный email'
    },
  ],
  birthDate: [
    {
      check: (value) => value,
      errorText: 'Пожалуйста, заполните дату рождения',
    },
    {
      check: (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      errorText: 'Некорректная дата',
    },
    {
      check: (value) => {
        const date = new Date(value);
        const today = new Date();
        return date <= today;
      },
      errorText: 'Укажите дату в прошлом',
    },
  ],
  phoneNumber: [
    {
      check: (value) => value,
      errorText: 'Пожалуйста, укажите номер телефона',
    },
    {
      check: (value) => {
        return /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(value);
      },
      errorText: 'Укажите номер телефона в формате +7(ХХХ)ХХХ-ХХ-ХХ',
    },
  ],
  
}