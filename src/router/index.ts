import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoDetail from '../components/TodoDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/todos/:id', component: TodoDetail}
    ]
})
export default router

