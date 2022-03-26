import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import './App.css';

const path1 = 'https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/000000/external-check-ui-essential-febrian-hidayat-outline-color-febrian-hidayat.png'
const path2 = 'https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/000000/external-check-ui-essential-febrian-hidayat-outline-color-febrian-hidayat.png'


function App() {
  return (
    <div id='myApp'>
        <TodoProvider>

          <AppUI/>

        </TodoProvider>
    </div>
  );
}

export default App;