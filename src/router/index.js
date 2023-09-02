import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

import TestPage from '../views/pages/TestPage.vue'
import ExamPage from '../views/pages/ExamPage.vue'
import AccreditPage from '../views/pages/AccreditPage.vue'
import InstructionPage from '../views/pages/InstructionPage.vue'
import StudyPage from '../views/pages/StudyPage.vue'
import WorkPage from '../views/pages/WorkPage.vue'
import NotifPage from '../views/pages/NotifPage.vue'
import AchievePage from '../views/pages/AchievePage.vue'


const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: InstructionPage
  },
  {
    path: '/exam',
    name: 'exam',
    component: ExamPage
  },
  {
    path: '/tests',
    name: 'tests',
    component: TestPage
  },
  {
    path: '/accreditation',
    name: 'accreditation',
    component: AccreditPage
  },
  {
    path: '/work',
    name: 'work',
    component: WorkPage
  },
  {
    path: '/study',
    name: 'study',
    component: StudyPage
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotifPage
  },
  {
    path: '/achivements',
    name: 'achivements',
    component: AchievePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
