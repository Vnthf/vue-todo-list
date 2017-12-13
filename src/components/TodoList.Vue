<template>
  <div>
    <h5 v-if="done">끝낸 일</h5><h5 v-else>할 일</h5>
    <ul>
        <todo-item v-for="todo in todoList" :todo="todo" :key="todo.id"></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">

import {GETTER_TYPE, Todo} from '../constant';
import TodoItem from './TodoItem.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Getter} from 'vuex-class'

@Component({
    components: {
        TodoItem
    }
})
export default class TodoList extends Vue {
    @Getter(GETTER_TYPE.DONE_TODO_LIST) doneTodoList: Todo[]
    @Getter(GETTER_TYPE.UNDONE_TODO_LIST) undoneTodoList: any

    @Prop()
    done: boolean

    get todoList() {
        return this.done ? this.doneTodoList : this.undoneTodoList;
    }
}

// import TodoItem from './TodoItem';
// import Constant from '../constant';
// import {mapState, mapGetters} from 'vuex'

// export default {
//     name: 'todo-list',
//     props: ['done'],
//     computed: {
//         todoList() {
//             return this.done ? this.$store.getters[Constant.DONE_TODO_LIST] : this.$store.getters[Constant.UNDONE_TODO_LIST];
//         }
//     },
//     components: {TodoItem}
// }
</script>

<style lang="scss">
li {
    display: block;
}

</style>
