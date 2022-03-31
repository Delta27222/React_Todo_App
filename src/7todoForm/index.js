import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'


function TodoForm(props){

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const [noEmpty, empty] = React.useState(false);

    const {
        addTodo,
        setOpenModal,
        editTodo
    } = React.useContext(TodoContext);

    const onchange =(event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
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
            editTodo(newTodoValue, props.id);
            setOpenModal(false);
        }
    }

    return(
        <form onSubmit={ props.action ===  'editTodo' ? editTodoNow : addNewTodo } name="form">
            <div className="container">
                <textarea
                    defaultValue={props.action == "editTodo" ? props.todoText : ""}
                    onChange={onchange}
                    placeholder="Do Homework, for school."
                    className="textAreaTodo"
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
                        {props.action == "editTodo" ? "Save" : "Create"}
                        </button>
                </div>
            </div>
        </form>
    );
}

export { TodoForm };