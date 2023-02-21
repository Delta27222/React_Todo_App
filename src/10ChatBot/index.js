import React from "react";
import './ChatBot.css';
import bot_img from '../10ChatBot/bot.png'


function ChatBot({ setOpenModal,setAction }){
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
        setAction('chatBot');
    }
    return(
        <>
            <div className="tooltip">
                <img className="img_bot" src={bot_img} alt="jooa" onClick={onClickButton}/>
            </div>
        </>
    );
}

export { ChatBot };