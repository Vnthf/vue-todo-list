
export const ACTION_TYPE = {
    FETCH_TODO_LIST: 'fetchTodoList',
    ADD_TODO: 'addTodo',
    DELETE_TODO: 'deleteTodo',
    UPDATE_TODO: 'updateTodo',
    DONE_TOGGLE: 'doneToggle',
    FETCH_FAILURE: 'fetchFailure',
}

export const GETTER_TYPE = {
    UNDONE_TODO_LIST: 'undoneTodoList',
    DONE_TODO_LIST: 'doneTodoList',
    GET_TODO: 'getTodo'
}

export interface Todo {
    id: number,
    value: string,
    done?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface Response {
    status: Status
}

export enum Status {
    SUCCESS = 200,
    FORBIDDEN = 403,
    NOT_FOUND = 404
}

export interface State {
    todoList: Todo[]
}
