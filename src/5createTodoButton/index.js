import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
        props.setAction('createTodo')
    }
    return(
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };
