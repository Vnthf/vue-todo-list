import Constant from '../constant';

export default {
    [Constant.FETCH_TODO_LIST] (state, {list}) {
        state.todoList = list;
    }
}