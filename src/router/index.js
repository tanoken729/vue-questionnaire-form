import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicForm from '@/components/BasicForm.vue'
import QuestionnaireForm from '@/components/QuestionnaireForm.vue'
import ConsultationFrom from '@/components/ConsultationFrom.vue'

Vue.use(VueRouter)

const routes = [ //ルートをいくつか定義
  { //各ルートは 1 つのコンポーネントとマッピングされる必要がある（ここでは、path: '/'）
    path: '/', //path: '宛先パス'
    name: 'BasicForm', //(name: コンポーネント名)
    component: BasicForm //conponent コンポーネント名
  },
  {
    path: '/questionnaire',
    name: 'QuestionnaireForm',
    component: QuestionnaireForm
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/QuestionnaireForm.vue')//これは何
  },
  {
    path: '/consultation',
    name: 'ConsultationFrom',
    component: ConsultationFrom
  }
]

const router = new VueRouter({ //ルーターインスタンスを作成して、ルートオプションを渡す
  mode: 'history',
  base: process.env.BASE_URL,
  routes // `routes: routes` の短縮表記
})

export default router
