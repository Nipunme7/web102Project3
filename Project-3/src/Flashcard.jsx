import React from 'react';

const Flashcard = ({ question, answer, showAnswer, onClick }) => {
    return (
        <div className={`card ${showAnswer ? 'answer' : 'question'}`} onClick={onClick}>
            <p>{showAnswer ? answer : question}</p>
        </div>
    );
};

export default Flashcard; 