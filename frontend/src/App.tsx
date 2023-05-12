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
    const [todoByID,setTodoByID] = useState<TodoType>({description: "", id: "", status: ""});



    function setView(id:string){
        if(id===""){
            getToDos();
            setViewBoard("");
        }
        else  {
            getToDoById(id);
            setViewBoard(id);
        }
    }

    function getToDoById(id:string){
        axios.get("api/todo/" + id)
            .then(response => {
                setViewBoard(id)
                setTodoByID(response.data)
            })
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
              <ToDoBoard todos={toDos} setView={setView} view={viewBoard} getTodos={getToDos}/>
        </div>
      :<div className ="ToDoDetailsWrapper">
              <TodoCard todo={todoByID} setView={setView} view={viewBoard} getTodos={getToDos}/>
      </div>

      }

      </div>
  );
}

export default App;
