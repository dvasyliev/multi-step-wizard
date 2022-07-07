import WelcomeView from '@/views/WelcomeView.vue'

import WizardView from '@/views/WizardView.vue'
import AgeErrorView from '@/views/AgeErrorView.vue'
import SummaryView from '@/views/SummaryView.vue'

import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
  },

  {
    path: '/wizard',
    name: 'wizard',
    component: WizardView,
  },
  {
    path: '/age-error',
    name: 'age-error',
    component: AgeErrorView,
  },
  {
    path: '/summary',
    name: 'summary',
    component: SummaryView,
  },

  {
    path: '/not-found',
    name: 'not-found',
    component: NotFoundView,
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'not-found' },
  },
]

export default routes
