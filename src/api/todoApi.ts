import {Todo, Response} from '../constant'

let todos: Array<Todo> = [{
    id: 1,
    value: '잠즘 자기',
    done: false,
    createdAt: new Date(),
    updatedAt: new Date()
}];

export function fetchTodoList(): Promise<Response> {
    return Promise.resolve({ 
        status: 200, 
        list: [...todos]
    });
}

export function addTodo(value: string): Promise<Response> {
    let todo: Todo = {
        value,
        id: todos.length + 1,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    todos.push(todo);
    return Promise.resolve({
        status: 200
    })
}

export function toggleTodo(id: number): Promise<Response>  {
    let todo = todos.find(a => a.id === id) as Todo;
    todo.done = !todo.done;
    return Promise.resolve({
        status: 200
    }) 
}
