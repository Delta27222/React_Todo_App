import React from "react";
import { TodoContext } from "../TodoContext";
import './AdviceDelete.css';

// Imagenes svg
import { ReactComponent as Trash }  from "../assets/trash.svg";
function AdviceDelete(props){

    const {deleteTodo} = React.useContext(TodoContext);

    const onClickClose = () => {
        props.setOpenModal(false);
    }
    const  onClickDelete = () => {
        deleteTodo(props.id);
        props.setOpenModal(false);
    }
    return(
        <div className="Form">
            <div className="circle_icon_trash">
                <Trash className="icon_trash"/>
            </div>
            <h3 className="tittle">Are you sure to delete your task?</h3>
            <h4 className="task">'{props.todoText}'</h4>
            <p>Your task will be delete from de list of Todos!!</p>
            <div className="container_buttons">
                <button onClick={onClickClose}>Cancel</button>
                <button onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    );
}

export { AdviceDelete };