import React from 'react';

type Props= {
    id:string
    setView:(id:string)=>void
}

export default function DetailsButton(props:Props) {


    return (
        <div>
            <button onClick={()=>props.setView(props.id)}>Details</button>
        </div>
    );
}

