import React from "react";
import './TodosLoading.css'
import ContentLoader from "react-content-loader";

function TodosLoading(props){
    return(
        <li className="list_skeleton">
            <div className="skeleton-container">
                <div className="s1-skeleton">
                    <div className="icon-skeleton animate-skeleton"></div>
                </div>
                <div className="s2-skeleton">
                    <div className="title-skeleton animate-skeleton"></div>
                    <div className="text-skeleton animate-skeleton"></div>
                    <div className="text-skeleton animate-skeleton"></div>
                    <div className="text-skeleton animate-skeleton"></div>
                </div>
                <div className="s3-skeleton">
                    <div className="delete-skeleton animate-skeleton"></div>
                </div>
            </div>
        </li>

    )
}

export { TodosLoading };