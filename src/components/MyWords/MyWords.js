import React from 'react';

import MyWord from './MyWord/MyWord';

const MyWords = (props) => {
    return props.words.map((word, index) => {
        return <MyWord
            word={word.word}
            color={word.color}
            clicked={() => props.clicked(index)} />
    });
}

export default MyWords;