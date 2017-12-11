import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoDetail from '../components/TodoDetail'

Vue.use(VueRouter)

const router = new VueRouter({
    base: __dirname,
    routes: [
        {path: '/todos/:id', component: TodoDetail}
    ]
})
export default router

