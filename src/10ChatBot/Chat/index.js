import React, { useState } from "react";
import './Chat.css';


function Chat(props){

    const [ pregunta, setPregunta ] = useState("");

        const submit_ChatGPT = (e) => {
            e.preventDefault();
            console.log(pregunta);
        };

        const [inputValor, setInputValor] = useState('');

        function manejarEnvio(evento) {
            evento.preventDefault();
            alert(`El valor ingresado fue: ${inputValor}`);
            preguntando_a_ChatGPT1();
        }

        function manejarCambio(evento) {
            setInputValor(evento.target.value);
        }


        async function preguntando_a_ChatGPT(prompt){
            const OPENAI_API_KEY = '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';
            const MODEL = 'davinci'; // Specify the GPT model to use

            prompt = 'Hola como estas?'

            const resolve = await fetch(OPENAI_API_KEY, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + OPENAI_API_KEY,
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 60,
                    n: 1,
                    stop: '\n',
                }),
            });

            try {
                const response = await fetch('https://api.openai.com/v1/engines/' + MODEL + '/completions',resolve);

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.choices[0].text.trim());
                    // return data.choices[0].text.trim();
                } else {
                    throw new Error('Error: ' + response.status + 'HAY UN ERROR ');
                }
            } catch (error) {
                console.error(error + "HAY UN ERRPRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
                return null;
            }
        }

        async function preguntando_a_ChatGPT1(){
            const OPENAI_API_KEY = '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';

            const { Configuration, OpenAIApi } = require("openai");
            const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + OPENAI_API_KEY,
                },
                body: JSON.stringify({
                    prompt: prompt,
                    max_tokens: 60,
                    n: 1,
                    stop: '\n',
                }),
            });

            console.log(response);
        }


    return(
        // <form onSubmit={manejarEnvio}>
        //     <label>
        //         Ingresa un valor:
        //         <input type="text" value={inputValor} onChange={manejarCambio} />
        //     </label>
        //         <button type="submit">Enviar</button>
        // </form>
        <div className="container">
            <div className="chat">
                <div className="response">
                <div className="mensajes derecha">Hola maria, como estas?</div>
                    <div className="respuesta izquierda">Yo bien, ahorita comiendome un helado tengo mucha hambre.</div>
                    <div className="mensajes derecha">Coye que bueno, de que es?</div>
                    <div className="respuesta izquierda">De chocolate, llovia de colores.</div>
                    <div className="mensajes derecha">Mmm pero que sabroso.</div>
                    <div className="mensajes derecha">Hola maria, como estas?</div>
                    <div className="respuesta izquierda">Yo bien, ahorita comiendome un helado tengo mucha hambre.</div>
                    <div className="mensajes derecha">Coye que bueno, de que es?</div>
                    <div className="respuesta izquierda">De chocolate, llovia de colores.</div>
                    <div className="mensajes derecha">Mmm pero que sabroso.</div>
                    <div className="chat-output"></div>
                </div>
                <form className="query_btn" onSubmit={submit_ChatGPT}>
                    <input
                        className="message-input"
                        value={pregunta}
                        onChange={e => setPregunta(e.target.value)}
                    />
                    <button className="send-button" type="submit">Enviar</button>
                </form>
            </div>
            <script src="./conection_ChatGPT.js"></script>
        </div>
    );
}

export { Chat };