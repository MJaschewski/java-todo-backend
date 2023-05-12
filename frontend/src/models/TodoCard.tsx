import React from 'react';
import {TodoType} from "./TodoType";
import DetailsButton from "../buttons/DetailsButton";

type Props = {
    Todo:TodoType
    setView:(id:string)=>void
    view:string
}



function TodoCard(props:Props) {
    return (
        <div>
            <p>
                {props.Todo.description}
            </p>
            {props.view === ""
                ? <DetailsButton id={props.Todo.id} setView={props.setView}/>
                : <button onClick={()=>props.setView("")}>View Board</button>

            }

        </div>

    );
}

export default TodoCard;