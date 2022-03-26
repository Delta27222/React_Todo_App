import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){

    const num = 0;

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
    // Esta funcion se usa para que cuando el usuario le de click, se cambie la imagen del estado (completada o no)
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
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

    const indexTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text) +1;
        return todoIndex;
    }

    // const forLoop = (int) => {
    //     for (let step = int; step < int+1; step++) {
    //         return step;
    //     }
    // }


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
            indexTodo,
            num,
        }}>
            {props.children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider}