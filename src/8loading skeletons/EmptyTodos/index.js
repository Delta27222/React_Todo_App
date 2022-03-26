import React from "react";
import './EmptyTodos.css'

function EmptyTodos(){
    return(
        <div className="container_error1">
            <h3 className="tittle1">No tasks were found!!</h3>
            {/* <h3 className="tittle1">Task not found!!</h3> */}
            <img className="img1" src="https://img.icons8.com/emoji/96/000000/pensive-face.png"/>
        </div>
    )
}

export { EmptyTodos };