<template>
    <li :class="{done: todo.done}">
        <div>
            <input type="checkbox" v-model="todo.done" v-on:click="done(todo.id)"/>
            <span v-text="todo.value"></span>
        </div>
    </li>
</template>

<script lang="ts">
import {ACTION_TYPE, Todo} from '../constant';
import { Component, Vue, Prop } from 'vue-property-decorator'
import {
  Action
} from 'vuex-class'

@Component
export default class TodoItem extends Vue {
    @Action(ACTION_TYPE.DONE_TOGGLE) done: any
    @Prop()
    todo: Todo
}

</script>

<style lang="scss">
    .done {
        text-decoration: line-through;
    }
</style>
