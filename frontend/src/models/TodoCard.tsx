import React from 'react';
import {TodoType} from "./TodoType";
type Props = {
    Todo:TodoType
}
function TodoCard(props:Props) {
    return (
        <div>
            <p>
                {props.Todo.description}
            </p>
        </div>

    );
}

export default TodoCard;