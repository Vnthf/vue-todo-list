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

export function updateTodo({id, value}: Todo): Promise<Response>  {
    let todo = todos.find(a => a.id === id) as Todo;
    todo.value = value;
    todo.updatedAt = new Date();
    return Promise.resolve({
        status: 200
    }) 
}

export function deleteTodo(id: number): Promise<Response>  {
    let deleteIndex: number = todos.findIndex(a => a.id === id) ;
    todos.splice(deleteIndex, 1);
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

// export default let Api = {
//     fetchTodoList(): Promise<any> {
//         return Promise.resolve({ 
//             status: 200, 
//             list: [...todos]
//         });
//     },
//     addTodo(value: string): Promise<any> {
//         let todo:Todo = {
//             value: cc,
//             id: todos.length + 1,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         };
//         todos.push(todo);
//         return Promise.resolve({
//             status: 200
//         })
//     },
//     updateTodo({id, value}: Todo): Promise<any>  {
//         let todo = todos.find(a => a.id === id);
//         todo.value = value;
//         todo.updatedAt = new Date();
//         return Promise.resolve({
//             status: 200
//         }) 
//     },
//     deleteTodo(id: any): Promise<any>  {
//         let deleteIndex = todos.findIndex(a => a.id === id);
//         todos.splice(deleteIndex, 1);
//         return Promise.resolve({
//             status: 200
//         }) 
//     },
//     toggleTodo(id: int): Promise<any>  {
//         let todo = todos.find(a => a.id === id);
//         todo.done = !todo.done;
//         return Promise.resolve({
//             status: 200
//         }) 
//     }
// }
