import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
        children: [
          {
            path: '',
            redirect: '/tabs/tab3/mybooks'
          },
          {
            path: 'mybooks',
            component: () => import('@/views/MyBooks.vue')
          },
          {
            path: 'favourite',
            component: () => import('@/views/FavouritePage.vue')
          },
          {
            path: 'bookmark',
            component: () => import('@/views/BookmarkPage.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/onboarding/',
    component: () => import('@/views/onboarding/OnboardingLayout.vue'),
    // component: ,
    children: [
      {
        path: '',
        redirect: '/onboarding/firstboard'
      },
      {
        path: 'firstboard',
        component: () => import('@/views/onboarding/FirstBoard.vue')
      },
      {
        path: 'secondboard',
        component: () => import('@/views/onboarding/SecondBoard.vue')
      },
      {
        path: 'thirdboard',
        component: () => import('@/views/onboarding/ThirdBoard.vue')
      }
    ]
  },
  {
    path: '/auth/',
    component: () => import('@/views/auth/AuthLayout.vue'),
    // component: ,
    children: [
      {
        path: '',
        redirect: '/auth/signin'
      },
      {
        path: 'signin',
        component: () => import('@/views/auth/SignIn.vue')
      },
      {
        path: 'signup',
        component: () => import('@/views/auth/SignUp.vue')
      },
      {
        path: 'emailsent',
        component: () => import('@/views/auth/EmailSent.vue')
      }
    ]
  },
  {
    path: '/onboardingpage',
    component: () => import('@/views/onboarding/OnboardingPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
