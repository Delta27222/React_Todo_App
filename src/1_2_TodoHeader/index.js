import React from "react";
import './TodoHeader.css';
import { TodoCounter } from "../1todoCounter";
import { TodoSearch } from "../2todoSearch";

function TodoHeader({totalTodos, completedTodos, searchValue, setSearchValue, loading }){
    return(
        <header>
            <div className="todoCounterContainer">
                <TodoCounter
                    totalTodos= {totalTodos}
                    completedTodos={completedTodos}
                    loading={loading}
                />
            </div>

            <div className="todoSearchContainer">
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    loading={loading}
                    totalTodos={totalTodos}
                />
            </div>
        </header>
    );
}

export { TodoHeader };