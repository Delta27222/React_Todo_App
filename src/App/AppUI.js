import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../1todoCounter";
import { TodoSearch } from "../2todoSearch";
import { TodoList } from "../3todoList";
import { TodoItem } from "../4todoItem";
import { TodoForm } from "../7todoForm";
import { CreateTodoButton } from "../5createTodoButton";
import { AdviceDelete } from "../9AdviceDelete";

// Aca llamamos al componente modal
import { Modal } from '../6modal'

// LLamamos a los componenetes que muestren algo en pantalla
import { TodosError } from '../8loading skeletons/TodosError'
import { TodosLoading } from '../8loading skeletons/TodosLoading'
import { EmptyTodos } from '../8loading skeletons/EmptyTodos'
import { NonTodos, CreateNewTodo } from '../8loading skeletons/NonTodos'


function AppUI (){
    // Aqui usaremos un nuevo HOOK
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        todoText,
        setTodoText,
    } = React.useContext(TodoContext);

    const [action, setAction] = React.useState("");

    const [id, setId] = React.useState(0);

    return(
        <React.Fragment>

            <div className="todoCounterContainer">
                <TodoCounter />
            </div>

            <div className="todoSearchContainer">
                <TodoSearch />
            </div>

            <div className="todoListContainer">
                <TodoList>

                    {!loading && (totalTodos === 0) && <NonTodos/>}

                    {!loading && (totalTodos === 0) &&  <CreateNewTodo/>}

                    {error && <TodosError error={error} />}

                    {(!loading && !searchedTodos.length && (totalTodos !== 0)) && <EmptyTodos/> }

                    <div className="container_problems">

                    {loading &&
                        Array(3)
                        .fill(1)
                        .map((a, i) => <TodosLoading key={i}/>)
                    }

                    </div>

                    <div className="container_TodoList">
                        {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.id}
                                    text={ todo.text}
                                    completed={todo.completed}
                                    id={todo.id}
                                    onComplete={() => completeTodo(todo.text, todo.completed)}
                                    onDelete={() => deleteTodo(todo.id)}
                                    setOpenModal={ setOpenModal }
                                    setAction = { setAction }
                                    setTodoText = { setTodoText }
                                    setId = { setId }
                                />
                        ))}
                    </div>

                </TodoList>
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
                            />
                        )}
                        { action === 'deleteTodo'&& (
                            <AdviceDelete
                                todoText = { todoText }
                                setOpenModal={setOpenModal}
                                id = { id }
                            />
                        )}

                    </Modal>

                )}


            <CreateTodoButton
                setOpenModal={setOpenModal}
                setAction = { setAction }
            />

        </React.Fragment>

    );
}

export { AppUI };