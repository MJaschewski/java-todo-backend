import React from 'react';
import {TodoType} from "./TodoType";
import TodoCard from "./TodoCard";
type Props = {
    todos:TodoType[]
    setView:(id:string)=>void
    getTodos:()=>void
    view:string
}
function ToDoBoard(props:Props) {
    return (
        <div className="ToDoBoardWrapper">

            <div className="OpenToDosWrapper">
                <h2>OPEN</h2>
                {
                    props.todos.map( (openTodo:TodoType) =>  {
                        if(openTodo.status==="OPEN") {
                            return <TodoCard todo={openTodo} setView={props.setView} view={props.view} getTodos={props.getTodos}/>
                        }
                    })
                }
            </div>

            <div className="IN_PROGRESSToDosWrapper">
                <h2>IN_PROGRESS</h2>
                {
                    props.todos.map( (inPTodo:TodoType) =>  {
                        if(inPTodo.status==="IN_PROGRESS") {
                            return <TodoCard todo={inPTodo} setView={props.setView} view={props.view} getTodos={props.getTodos}/>
                        }
                    })
                }
            </div>

            <div className="DONEToDosWrapper">
                <h2>DONE</h2>
                {
                    props.todos.map( (doneTodo:TodoType) =>  {
                        if(doneTodo.status==="DONE") {
                            return <TodoCard todo={doneTodo} setView={props.setView} view={props.view} getTodos={props.getTodos}/>
                        }
                    })
                }
            </div>

        </div>
    );
}

export default ToDoBoard;