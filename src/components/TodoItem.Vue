<template>
    <li :class="{done: todo.done}">
        <div v-if="!isEditMode">
            <input type="checkbox" v-model="todo.done" v-on:click="done(todo.id)"/>
            <router-link v-bind:to="'/todos/' + todo.id"><span v-text="todo.value"></span></router-link>
            <button v-on:click="deleteTodo(todo.id)">x</button>
            <button v-on:click="toggleEditMode()">수정</button>
        </div>
        <div v-else>
            <input v-model="todo.value" v-on:keyup.enter="updateTodo(todo)"/>
            <button v-on:click="toggleEditMode()">취소</button>
        </div>
    </li>
</template>

<script>
import {mapActions} from 'vuex'
import Constant from '../constant';

export default {
    name: 'todo-item',
    data() {
        return {
            isEditMode: false
        }
    },
    props: ['todo'],
    methods: {
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
            if(this.isEditMode) {
                
            }
        },
        ...mapActions({
            'deleteTodo': Constant.DELETE_TODO,
            'updateTodo': Constant.UPDATE_TODO,
            'done': Constant.DONE_TOGGLE
        })
    }
}
</script>

<style lang="scss">
    .done {
        text-decoration: line-through;
    }
</style>
