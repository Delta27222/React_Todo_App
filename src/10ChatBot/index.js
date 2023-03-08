import React from "react";
import './ChatBot.css';
import bot_img from '../10ChatBot/bot.png'


function ChatBot(){
    const handleClick = ()=>{
        window.open('https://www.google.com.ar/', '_blank')
    }
    return(
        <>
            <div className="tooltip" >
                <img className="img_bot" src={bot_img} alt="jooa" onClick={handleClick} />
            </div>
        </>
    );
}

export { ChatBot };