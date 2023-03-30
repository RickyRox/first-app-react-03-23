import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
// import ToDoList from './components/ToDo/ToDoForm/ToDoList/ToDoList';
import ToDo from './components/ToDo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Sono nel file index.js</p>
    {/* <App /> */}
    {/* <ToDoList /> */}
    <ToDo />
  </React.StrictMode>
);


