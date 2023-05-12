import React from 'react';
import {TodoType} from "./TodoType";
import TodoCard from "./TodoCard";
type Props = {
    todos:TodoType[]
    setView:(id:string)=>void
    view:string
}
function ToDoBoard(props:Props) {
    return (
        <div>
            <div className="OpenToDosWrapper">
                <h2>OPEN</h2>
                {
                    props.todos.map( (todo:TodoType) =>  {
                        if(todo.status==="OPEN") {
                            return <TodoCard Todo={todo} setView={props.setView} view={props.view}/>
                        }
                    })
                }
            </div>

            <div className="IN_PROGRESSToDosWrapper">
                <h2>IN_PROGRESS</h2>
                {
                    props.todos.map( (todo:TodoType) =>  {
                        if(todo.status==="IN_PROGRESS") {
                            return <TodoCard Todo={todo} setView={props.setView} view={props.view}/>
                        }
                    })
                }
            </div>

            <div className="DONEToDosWrapper">
                <h2>DONE</h2>
                {
                    props.todos.map( (todo:TodoType) =>  {
                        if(todo.status==="DONE") {
                            return <TodoCard Todo={todo} setView={props.setView} view={props.view}/>
                        }
                    })
                }
            </div>

        </div>
    );
}

export default ToDoBoard;