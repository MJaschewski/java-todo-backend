import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import {TodoType} from "../models/TodoType";

type Props = {
    getToDos:()=>void
}
function InputButton(props:Props) {

    const [newDescription,setNewDescription] = useState("");

    function seeNewDescription(event:ChangeEvent<HTMLInputElement>) {
        setNewDescription(event.target.value);
    }

    function postNewTodo(){
        const newTodo:TodoType={
            id:"",
            description:newDescription,
            status:"OPEN"
        }
        axios.post("api/todo",newTodo)
           .then(function (response) {
           console.log(response);
            })
           .catch(function (error) {
               console.log(error);
           })
            .then(props.getToDos);
    }

    return (
        <div>
            <input type={"description"} value={newDescription} onInput={seeNewDescription}/>
            <button onClick={postNewTodo}>Add</button>
        </div>
    );
}

export default InputButton;