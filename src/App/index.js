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

function App() {
   // Aqui usaremos un nuevo HOOK
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,

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
                {/* <TodoList>

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

                    </div> */}
                        {/* ESTE DIV SE QUITA PARA QUE QUEDE CENTRADO EN PANTALLA */}
                    {/* <div className="container_TodoList">
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
                                    numberOfTask = { numberOfTask }

                                />
                        ))}
                    </div>

                </TodoList> */}
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

        </React.Fragment>

    );
}

export default App;