import React from "react";


const defaultTodos =[
    {text:'Cortar Cebolla', completed:true},
    {text:'picar cebolla', completed:false},
    {text:'tomar cebolla', completed:false},
    {text:'comer cebolla', completed:false},
    {text:'Barriendo la casa', completed:true},
    {text:'cocinando cebolla', completed:false},
    {text:'picando la sopa cebolla', completed:true},
]

// creamos nuestro reacHook
function useLocalStorage(itemName, initiaValue) {

    // Estado de carga
    const [loading, setLoading] = React.useState(true);

    // Estado de error
    const [error, setError] = React.useState(false);
// Aca se coloca el nombre del array con los todos 👇
    const [item , setItem] = React.useState(initiaValue);
    React.useEffect(() => {
        setTimeout(() => {

        try {

            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
            if (!localStorageItem){
                localStorage.getItem(itemName,JSON.stringify(initiaValue));
                parsedItem = initiaValue;
            }else{
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);

        } catch (error) {
            setError(error);
        }

        }, 3000);

    });
    const saveItem  = (newItem) => {
        try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        } catch (error) {
        setError(false);
        }
    }
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };