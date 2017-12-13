import {ACTION_TYPE, Todo} from '../constant';

export default {
    [ACTION_TYPE.FETCH_TODO_LIST] (state: any, {list}: {list: Array<Todo>}) {
        state.todoList = list;
    }
}