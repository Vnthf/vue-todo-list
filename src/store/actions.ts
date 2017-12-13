import {ACTION_TYPE, State, Status, Response} from '../constant';
import * as todoAPI from '../api/toDoApi'
import {ActionTree} from 'vuex'

export const actions: ActionTree<State, any> = {
    async [ACTION_TYPE.FETCH_TODO_LIST] ({dispatch, commit}: any, payload: any) {
        let response: Response = await todoAPI.fetchTodoList();
        if(response.status === Status.SUCCESS) {
            commit(ACTION_TYPE.FETCH_TODO_LIST, response);
        } else {
            commit(ACTION_TYPE.FETCH_FAILURE, response);
        }
        return response;
    },
    async [ACTION_TYPE.ADD_TODO] ({dispatch}: any, payload: any) {
        let response: Response = await todoAPI.addTodo(payload);
        if(response.status === Status.SUCCESS) {
            await dispatch(ACTION_TYPE.FETCH_TODO_LIST);
        }
    },

    async [ACTION_TYPE.UPDATE_TODO] ({dispatch}: any, payload: any) {
        let response: Response = await todoAPI.updateTodo(payload);
        if(response.status === Status.SUCCESS) {
            await dispatch(ACTION_TYPE.FETCH_TODO_LIST);
        }
    },

    async [ACTION_TYPE.DELETE_TODO] ({dispatch}: any, payload: any) {
        let response: Response = await todoAPI.deleteTodo(payload);
        if(response.status === Status.SUCCESS) {
            await dispatch(ACTION_TYPE.FETCH_TODO_LIST);
        }
    },

    async [ACTION_TYPE.DONE_TOGGLE] ({dispatch}: any, payload: any) {
        let response: Response = await todoAPI.toggleTodo(payload);
        if(response.status === Status.SUCCESS) {
            await dispatch(ACTION_TYPE.FETCH_TODO_LIST);
        }
    }
}