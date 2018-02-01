import React from 'react';

const myWord = (props) => {
    let style = {
        color: props.color,
    }

    return (
        <p 
            style={style} 
            onClick={props.clicked}>
        {props.word}</p>
    );
}

export default myWord