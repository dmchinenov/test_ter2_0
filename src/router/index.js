import { createRouter, createWebHistory } from 'vue-router';
import FormView from '@/views/FormView.vue';
import DataView from '@/views/DataView.vue';

const routes = [
  { path: '/', name: 'FormView', component: FormView },
  { path: '/data', name: 'DataView', component: DataView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;