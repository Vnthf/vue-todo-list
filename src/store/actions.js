import Constant from '../constant';
import todoAPI from '../api/toDoApi'

export default {
    async fetchTodoList ({dispatch, commit}, payload) {
        let response = await todoAPI.fetchTodoList();
        if(response.status === 200) {
            commit(Constant.FETCH_TODO_LIST, response);
        } else {
            commit(Constant.FETCH_FAILURE, response);
        }
        return response;
    },
    async [Constant.ADD_TODO] ({dispatch}, payload) {
        let response = await todoAPI.addTodo(payload);
        if(response.status === 200) {
            await dispatch(Constant.FETCH_TODO_LIST);
        }
    },

    async [Constant.UPDATE_TODO] ({dispatch}, payload) {
        let response = await todoAPI.updateTodo(payload);
        if(response.status === 200) {
            await dispatch(Constant.FETCH_TODO_LIST);
        }
    },

    async [Constant.DELETE_TODO] ({dispatch}, payload) {
        let response = await todoAPI.deleteTodo(payload);
        if(response.status === 200) {
            await dispatch(Constant.FETCH_TODO_LIST);
        }
    },

    async [Constant.DONE_TOGGLE] ({dispatch}, payload) {
        let response = await todoAPI.toggleTodo(payload);
        if(response.status === 200) {
            await dispatch(Constant.FETCH_TODO_LIST);
        }
    }
}