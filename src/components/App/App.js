
// import Layout from '../Layout/Layout';
import Layout from './Layout/Layout';

// import NomeComponente from "percorso dove si trova il file NomeComponente.jsx"
import "./App.css";


function App (){
        // // javascript normale
        // let numero = 2
        // let stringa = "ciao"
        // /* 
        //   commento  
        // */
        // let nome = "Pippo"
        // let stringaNuova = `ciao io sono ${nome}`
        // let risultato = somma(1,2)
    return(
        <>
        <p>Sono nel componente App</p>
        <Layout />
        </>
    );
}

export default App;


// function somma(a, b){
//     return a+b
//   }
