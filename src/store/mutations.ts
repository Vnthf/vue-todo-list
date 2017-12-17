import {ACTION_TYPE, State, Todo} from '../constant';
import {MutationTree} from 'vuex'

export const mutations: MutationTree<State> =  {
    [ACTION_TYPE.FETCH_TODO_LIST] (state: any, {list}: {list: Array<Todo>}) {
        state.todoList = list;
    }
}