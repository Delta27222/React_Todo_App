import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from "../3todoList";
import { TodoItem } from "../4todoItem";
import { TodoForm } from "../7todoForm";
import { CreateTodoButton } from "../5createTodoButton";
import { AdviceDelete } from "../9AdviceDelete";
import { TodoHeader } from "../1_2_TodoHeader";

// Aca llamamos al componente modal
import { Modal } from '../6modal'

// LLamamos a los componenetes que muestren algo en pantalla
import { TodosError } from '../8loading skeletons/TodosError'
import { TodosLoading } from '../8loading skeletons/TodosLoading'
import { EmptyTodos } from '../8loading skeletons/EmptyTodos'
import { NonTodos, CreateNewTodo } from '../8loading skeletons/NonTodos'
import { ChatBot } from "../10ChatBot";

//Toast
import { Toaster } from 'react-hot-toast';

function App() {
   // Aqui usaremos un nuevo HOOK
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        getKey,

        setTodoText,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        setOpenModal,
        editTodo,
        todoText,
        numberOfTask,
    } = useTodos();

    const [action, setAction] = React.useState("");

    const [id, setId] = React.useState(0);

    return(
        <React.Fragment>
                <TodoHeader
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    loading={loading}
                />

                <div className="todoListContainer">

                    <TodoList
                        key={() => getKey()}
                        error={error}
                        loading={loading}
                        totalTodos={totalTodos}
                        searchedTodos={searchedTodos}
                        // Estas serian TODAS LAS RENDER PROPS QUE ESTARIA USANDO EN ESTE CASO
                        onError={() =>  <TodosError error={error} />}
                        onLoading={() => <TodosLoading />}
                        onEmptyTodos={() =>  <EmptyTodos/> }

                        onNonTodos={() => <NonTodos/>}
                        onCreateNewTodo={() =>  <CreateNewTodo/>}

                        render={todo => (
                            <TodoItem
                                key={todo.id}
                                text={ todo.text}
                                completed={todo.completed}
                                id={todo.id}
                                onComplete={() => completeTodo(todo.text, todo.completed)}
                                onDelete={() => deleteTodo(todo.id)}
                                setOpenModal={ setOpenModal }
                                setAction = { setAction }
                                action={action}
                                setTodoText = { setTodoText }
                                setId = { setId }
                                numberOfTask = { numberOfTask }

                            />
                        )}
                    />
                </div>

                    {!!openModal &&(

                        <Modal>
                            { (action === 'createTodo' || action === 'editTodo') &&(
                                <TodoForm
                                    action={action}
                                    todoText={todoText}
                                    setTodoText = { setTodoText }
                                    id = { id }
                                    setOpenModal={setOpenModal}
                                    addTodo = { addTodo }
                                    editTodo = { editTodo}
                                />
                            )}
                            { action === 'deleteTodo'&& (
                                <AdviceDelete
                                    todoText = { todoText }
                                    setOpenModal={setOpenModal}
                                    id = { id }
                                    deleteTodo = { deleteTodo }
                                />
                            )}
                        </Modal>

                    )}


                <CreateTodoButton
                    setOpenModal={setOpenModal}
                    setAction = { setAction }
                />

                <Toaster
                    position="top-center"
                    toastOptions={{className: '',duration: 1500,}}
                />

                {/* <ChatBot/> */}

        </React.Fragment>

    );
}

export default App;