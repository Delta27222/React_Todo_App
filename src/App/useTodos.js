import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();
function useTodos(){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const [todoText, setTodoText] = React.useState("");


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
    const deleteTodo = (idTask) => {
        const todoIndex = todos.findIndex(todo => todo.id === idTask);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    // Funcion para editar el todo
    const editTodo = (newText, idTask) => {
        console.log(newText)
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === idTask){
                console.log(todos[i].id)
                console.log(idTask)
                const newTodos = [...todos];
                newTodos[i].text = newText;
                console.log( newTodos[i].text);
                saveTodos(newTodos);
            }
        }
    };

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

    function getKey() {
    return uuidv4();
    }


    return{
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
        todoText,
        setTodoText,
        editTodo,
        getKey,
    };

}

export { useTodos }