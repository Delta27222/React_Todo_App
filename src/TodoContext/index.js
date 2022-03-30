import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();
// const cantidad = 0;
function TodoProvider(props){

    const numerosTodosListadas = [];

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;

    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length === 0){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }
    // Esta funcion se usa para que se agreguen los nuevos todos a la lista que ya esta creada de todos
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id: numberOfId(newTodos), //Aca le damos el valor del id
        })
        saveTodos(newTodos);

        // console.log('Este es el ultimo id que se metio en el arryr->'+funcionNumerosId(newTodos))
    }

    // Esta funcion se usa para que cuando el usuario le de click, se cambie la imagen del estado (completada o no)
    const completeTodo = (text, complete) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if (complete){
            newTodos[todoIndex].completed = false;
        }else{
            newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
    }
    // Esta funcion es para que se eliminen  los tofo que el usuario le de click
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    // Esta funcion se usa para darle id a cada TODO que se va agregando
    const numberOfId = (array) => {
        if(array.length === 0){
            return 1;
        }else{
            const numSigId = (array[array.length-1].id + 1);
            return numSigId;
        }
    }

    // Funcion para mostrar el numero de la tarea que esta en pantalla
    const numberOfTask = (id) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id){
                return i+1;
            }
        }
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            numberOfTask,
            // num,
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider}