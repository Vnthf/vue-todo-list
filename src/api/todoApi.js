let todos = [
    {
        id: 1,
        value: '잠즘 자기',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

export default {
    fetchTodoList() {
        return Promise.resolve({ 
            status: 200, 
            list: [...todos]
        });
    },
    addTodo(value) {
        let todo = {value};
        todo.id = todos.length + 1;
        todo.createdAt = new Date();
        todo.updatedAt = new Date();
        todos.push(todo);
        return Promise.resolve({
            status: 200
        })
    },
    updateTodo({id, value}) {
        let todo = todos.find(a => a.id === id);
        todo.value = value;
        todo.updatedAt = new Date();
        return Promise.resolve({
            status: 200
        }) 
    },
    deleteTodo(id) {
        let deleteIndex = todos.findIndex(a => a.id === id);
        todos.splice(deleteIndex, 1);
        return Promise.resolve({
            status: 200
        }) 
    },
    toggleTodo(id) {
        let todo = todos.find(a => a.id === id);
        todo.done = !todo.done;
        return Promise.resolve({
            status: 200
        }) 
    }
}

async function ccc () {
    console.log('hoho')
  }