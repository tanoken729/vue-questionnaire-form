import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicForm from '@/components/BasicForm.vue'
import QuestionnaireForm from '@/components/QuestionnaireForm.vue'
import ConsultationFrom from '@/components/ConsultationFrom.vue'
import ConfirmationFrom from '@/components/ConfirmationFrom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BasicForm',
    component: BasicForm
  },
  {
    path: '/questionnaire',
    name: 'QuestionnaireForm',
    component: QuestionnaireForm
  },
  {
    path: '/consultation',
    name: 'ConsultationFrom',
    component: ConsultationFrom
  },
  {
    path: '/confirmation',
    name: 'ConfirmationFrom',
    component: ConfirmationFrom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
