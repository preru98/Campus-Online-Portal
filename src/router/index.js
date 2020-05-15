import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Grid from '../views/StudentGrid.vue'
import ElaborateStudentAdmin from '../views/DetailStudentAdminView'
import StudentPortal from '../views/StudentPortal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/elaborateStudentAdmin',
    name: 'ElaborateStudentAdmin',
    component: ElaborateStudentAdmin
  },
  {
    path: '/studentPortal',
    name: 'EStudentPortal',
    component: StudentPortal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
