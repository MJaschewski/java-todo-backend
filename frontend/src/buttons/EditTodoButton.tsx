import React, {ChangeEvent, useState} from 'react';
import {TodoType} from "../models/TodoType";
import axios from "axios";

type Props = {
    setView:(id:string)=>void
    oldTodo:TodoType
}

function EditToDoButton(props:Props) {

    const [newDescription,setNewDescription] = useState("");

    function seeNewDescription(event:ChangeEvent<HTMLInputElement>) {
        setNewDescription(event.target.value);
    }

    function editTodo(newTodo:TodoType){
        newTodo.description = newDescription;
        axios.put("api/todo/"+newTodo.id,newTodo)
            .then(function (response) {
                console.log(response);
                props.setView("");
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function editStatus(newTodo:TodoType,status:string){
        newTodo.status = status;
        axios.put("api/todo/"+newTodo.id,newTodo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <input type={"description"} value={newDescription} onInput={seeNewDescription}/>
            <button onClick={()=>editTodo(props.oldTodo)}>Edit </button>
            <ul>
                <li><button onClick={()=>editStatus(props.oldTodo,"OPEN")}> OPEN </button></li>
                <li><button onClick={()=>editStatus(props.oldTodo,"IN_PROGRESS")}> IN PROGRESS </button></li>
                <li><button onClick={()=>editStatus(props.oldTodo,"DONE")}> DONE </button></li>
            </ul>
        </div>
    );
}

export default EditToDoButton;