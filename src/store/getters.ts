import {GETTER_TYPE, State, Todo} from '../constant';
import {GetterTree} from 'vuex'

export const getters: GetterTree<State, any> = {
    [GETTER_TYPE.UNDONE_TODO_LIST] ({todoList}: {todoList: Array<Todo>}, getters: any) {
        return todoList.filter((v:Todo) => !v.done)
    },
    [GETTER_TYPE.DONE_TODO_LIST] ({todoList}: {todoList: Array<Todo>}, getters: any) {
        return todoList.filter((v:Todo) => v.done)
    },
    [GETTER_TYPE.GET_TODO] ({todoList}: {todoList: Array<Todo>}, getters: any) {
        return (id: number) => todoList.find((v:Todo) => v.id === id);
    }
}