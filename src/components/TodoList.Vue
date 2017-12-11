<template>
  <div>
    <h5 v-if="done">끝낸 일</h5><h5 v-else>할 일</h5>
    <ul>
        <todo-item v-for="todo in todoList" :todo="todo" :key="todo.id"></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import Constant from '../constant';
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'todo-list',
    props: ['done'],
    computed: {
        todoList() {
            return this.done ? this.$store.getters[Constant.DONE_TODO_LIST] : this.$store.getters[Constant.UNDONE_TODO_LIST];
        }
    },
    components: {TodoItem}
}
</script>

<style lang="scss">
li {
    display: block;
}

</style>
