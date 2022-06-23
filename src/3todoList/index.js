
import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList-container">

            {!props.loading && (props.totalTodos === 0) && props.onNonTodos()}

            {!props.loading && (props.totalTodos === 0) && props.onCreateNewTodo()}

            {props.error && props.onError() }

            {(!props.loading && !props.searchedTodos.length && (props.totalTodos !== 0)) && props.onEmptyTodos()}

            <div className="container_problems">
                {props.loading &&
                    Array(3)
                    .fill(1)
                    .map((a, i) => props.onLoading())
                }
            </div>

            {props.searchedTodos.map(props.render)}

                <ul>
                    {props.children}
                </ul>
        </section>
    );
}

export { TodoList};