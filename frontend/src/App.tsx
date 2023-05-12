import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputButton from "./buttons/InputButton";
import {TodoType} from "./models/TodoType";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import TodoCard from "./models/TodoCard";
import ToDoBoard from "./models/ToDoBoard";

function App() {

    const [toDos,setToDos] = useState<TodoType[]>([])

    function getToDos() {
        axios.get("api/todo")
            .then(response => {
                setToDos(response.data);
            })
    }

    useEffect( () => {
        console.log("GetToDos");
        axios.get("api/todo")
            .then(response =>{
                setToDos(response.data)
            }).catch(error => console.error());
    },[])

  return (

        <div className="App">

            <InputButton getToDos={getToDos} />

            <ToDoBoard todos={toDos}/>


        </div>
  );
}

export default App;
