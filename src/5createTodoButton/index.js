import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal, setAction}){

    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
        setAction('createTodo')
    }
    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };
