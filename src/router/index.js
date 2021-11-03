
import {createRouter, createWebHistory} from 'vue-router'
// import poetry from '../../service/model/poetry/poetry'


const Home = () => import ('../view/home/Home.vue')
const Poetry = () => import ('../view/poetry/Poetry.vue')
const Detail = () => import ('../view/detail/Detail.vue')
const Story = () => import ('../view/story/Story.vue')
const History = () => import ('../view/history/History.vue')
const People = () => import ('../view/people/People.vue')
const Star = () => import ('../view/star/Star.vue')
const Column = () => import ('../view/column/Column.vue')
const Problem = () => import ('../view/problem/Problem.vue')
// const NavBar = ()=> import('../components/common/nav/NavBar')
const Login = () => import('../components/content/Login')
const Center = () => import('../view/center/Center.vue')

const NewsList = () => import('../view/news/NewsList')
const NewsDetail = () => import('../view/news/NewsDetail')
const About = () => import('../view/about/About')
const Contact = () => import('../view/contact/Contact')

const routes = [

   {
       path: '/home',
       redirect: '/'
   },
    {
        path: '/',
       
        name: Home,
        component: Home
    },
    {
        path: '/poetry',
        name: Poetry,
        component: Poetry
    },
    {
        path: '/detail/:id',
        name: Detail,
        component: Detail
    },
    {
        path: '/story',
        name: Story,
        component: Story
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/center',
        component: Center,
        meta: {
            title: '故事中心'
          }
    },
    {
        path: '/newslist',
        component: NewsList,
        meta: {
            title: '新闻列表'
          }
    },
    {
        path: '/newsdetail/:id',
        component: NewsDetail,
        meta: {
            title: '新闻详情'
          }
    },
    {
        path: '/problem',
        name: Problem,
        component: Problem
    },
    {
        path: '/history',
        name: History,
        component: History
    },
    {
        path: '/people',
        name: People,
        component: People
    },
    {
        path: '/star',
        name: Star,
        component: Star
    },
    {
        path: '/column',
        name: Column,
        component: Column
    },
    {
        path: '/about',
        name: About,
        component: About
    },
    {
        path: '/contact',
        name: Contact,
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
  })
  

export default router