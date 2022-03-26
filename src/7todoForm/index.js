import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'


function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const [noEmpty, empty] = React.useState(false);

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onchange =(event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
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

    return(
        <form onSubmit={ onSubmit } name="form">
            <div className="container">
                <textarea
                    value={newTodoValue}
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
                    >
                        Create
                        </button>
                </div>
            </div>
        </form>
    );
}

export { TodoForm };