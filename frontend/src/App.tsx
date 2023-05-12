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

    const [viewBoard,setViewBoard] =useState("");

    function setView(id:string){
        setViewBoard(id);
    }

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

      {(viewBoard === "")
      ? <div className="BoardWrapper">
              <InputButton getToDos={getToDos} />
              <ToDoBoard todos={toDos} setView={setViewBoard} view={viewBoard}/>
        </div>
      :<div className ="ToDoDetailsWrapper">
               <TodoCard Todo={toDos.filter(todo => todo.id===viewBoard)[0]} setView={setView} view={viewBoard}/>
      </div>

      }

      </div>
  );
}

export default App;
