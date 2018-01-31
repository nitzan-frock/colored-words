import React from 'react';

const myWord = (props) => {
    const style = {
        color: props.color,
    }
    return (
        <p 
        style={style} 
        onClick={props.click}>{props.word}</p>
    );
}

export default myWord