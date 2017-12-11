import Constant from '../constant';

export default {
    [Constant.UNDONE_TODO_LIST] (state, getters) {
        return state.todoList.filter(v => !v.done)
    },
    [Constant.DONE_TODO_LIST] (state, getters) {
        return state.todoList.filter(v => v.done)
    },
    [Constant.GET_TODO] (state, getters) {
        return id => state.todoList.find(v => v.id === id);
    }
}