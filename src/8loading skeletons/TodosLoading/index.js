import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return(
        <li className="list_skeleton">

{/*
            <div className="tittle animate-skeleton"></div>

            <div className="skeleton-container-search">
                <div className="search animate-skeleton"></div>
            </div> */}

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