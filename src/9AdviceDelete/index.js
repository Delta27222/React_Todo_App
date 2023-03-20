import React from "react";
import './AdviceDelete.css';
import toast from 'react-hot-toast';

// Imagenes svg
import { ReactComponent as Trash }  from "../assets/trash.svg";
function AdviceDelete({todoText, setOpenModal, id, deleteTodo}){
    

    const onClickClose = () => {
        setOpenModal(false);
    }
    const  onClickDelete = () => {
        deleteTodo(id);
        setOpenModal(false);
        toast(`The task: "${todoText}" was removed successfully`, {
            icon: '🗑️',
          });
    }
    return(
        <div className="Form">
            <div className="circle_icon_trash">
                <Trash className="icon_trash"/>
            </div>
            <h3 className="tittle">Are you sure to delete your task (id = {id})?</h3>
            <h4 className="task">'{todoText}'</h4>
            <p>Your task will be delete from de list of Todos!!</p>
            <div className="container_buttons">
                <button onClick={onClickClose}>Cancel</button>
                <button onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    );
}

export { AdviceDelete };