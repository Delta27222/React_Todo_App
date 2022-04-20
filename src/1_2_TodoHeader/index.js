import React from "react";
import './TodoHeader.css';
import { TodoCounter } from "../1todoCounter";
import { TodoSearch } from "../2todoSearch";

function TodoHeader({totalTodos, completedTodos, searchValue, setSearchValue }){
    return(
        <header>
            <div className="todoCounterContainer">
                <TodoCounter
                    totalTodos= {totalTodos}
                    completedTodos={completedTodos}
                />
            </div>

            <div className="todoSearchContainer">
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
        </header>
    );
}

export { TodoHeader };