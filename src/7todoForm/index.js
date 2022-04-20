import React from "react";
import './TodoForm.css'


function TodoForm({ id, action, addTodo, setOpenModal, editTodo, todoText , setTodoText }){

    action={action}

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const [noEmpty, empty] = React.useState(false);


    const onchange =(event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
        console.log(todoText)
    }
    const addNewTodo = (event) => {
        if(!newTodoValue.trim().length){
            event.preventDefault();
            empty(true);
            setOpenModal(true);
        }else{
            event.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    const editTodoNow = (event) => {
        if(!newTodoValue.trim().length){
            event.preventDefault();
            empty(true);
            setOpenModal(true);
        }else{
            event.preventDefault();
            editTodo(newTodoValue, id);
            setOpenModal(false);
        }
    }
    
    return(
        <form onSubmit={ action ===  'editTodo' ? editTodoNow : addNewTodo } name="form">
            <div className="container">
                <textarea
                    defaultValue={action == "editTodo" ? todoText : ""}
                    onChange={onchange}
                    placeholder="Do Homework, for school."
                    className="textAreaTodo"
                    // onKeyDown={action == "editTodo" ? editTodoNowEnter : addNewTodoEnter}
                />
                {noEmpty && <p className="message">Please, enter your task!!</p>}
                <div className='containerButtonModal'>
                    <button
                    className="cancelBtn"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={!newTodoValue.length}
                    >
                        {action == "editTodo" ? "Save" : "Create"}
                        </button>
                </div>
            </div>
        </form>
    );
}

export { TodoForm };