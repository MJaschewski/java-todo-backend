import React from 'react';
import {TodoType} from "./TodoType";
import DetailsButton from "../buttons/DetailsButton";
import EditToDoButton from "../buttons/EditTodoButton";
import axios from "axios";

type Props = {
    todo:TodoType
    setView:(id:string)=>void
    getTodos:()=>void
    view:string
}



function TodoCard(props:Props) {

    function openToIn_progress(newTodo:TodoType){
        newTodo.status="IN_PROGRESS";
        axios.put("api/todo/"+newTodo.id,newTodo)
            .then(function (response) {
                console.log(response);
                props.getTodos();
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    function in_progressToDone(newTodo:TodoType){
            newTodo.status="DONE";
            axios.put("api/todo/"+newTodo.id,newTodo)
                .then(function (response) {
                    console.log(response);
                    props.getTodos();
                })
                .catch(function (error) {
                    console.log(error);
                })
    }

   function deleteTodo(doneTodo:TodoType){
       axios.delete("api/todo/"+doneTodo.id)
           .then(function (response) {
               console.log(response);
               props.getTodos();
           })
           .catch(function (error) {
               console.log(error);
           })
    }

    return (
        <div className="ToDoWrapper">
            <p>
                {props.todo.description}
            </p>
            {props.view === ""
                ?<div className="ToDoBoardWrapper">
                    <DetailsButton id={props.todo.id} setView={props.setView}/>
                    {props.todo.status === "OPEN"
                        ?   <button onClick={()=>openToIn_progress(props.todo)}> Advance </button>
                        :   (props.todo.status === "IN_PROGRESS")
                            ?<button onClick={()=>in_progressToDone(props.todo)}> Advance </button>
                            :<button onClick={()=>deleteTodo(props.todo)}> Delete </button>

                    }
                </div>
                : <div className="ToDoDetailWrapper">
                    <button onClick={()=>props.setView("")}>View Board</button>
                    <EditToDoButton  oldTodo={props.todo} setView={props.setView}/>
                </div>




            }

        </div>

    );
}

export default TodoCard;