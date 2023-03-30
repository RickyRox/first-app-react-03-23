
import { useState } from "react";

function ToDoList(){

let tasks = ["primo task", "secondo task", "terzo task"];

const [lista , setLista] = useState([]);
const [elemento, setElemento] = useState("");

let handleClick = () => {
    console.log("Cliccato")


 let nuovoArray3 = []
    lista.forEach(elemento => nuovoArray3.push(elemento))
    nuovoArray3.push(elemento) 
    setLista(nuovoArray3)


    setElemento("")
};


let handleChange = (e) => {
    console.log(e.target.value)
    setElemento(e.target.value)
}

return (
    <>
        <h1>ToDoList</h1>
        {/* il value prende elemento se esiste altrimenti (grazie a ||) prende una stringa vuota */}
        <input value={elemento || ""} type="text" onChange={(e) => handleChange(e)} />
        <button onClick={() => handleClick()}>Aggiungi task</button>
        
        <p>Numero task: {lista.length}</p>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
            {lista.map((elemento, index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    </>
);
}

export default ToDoList;