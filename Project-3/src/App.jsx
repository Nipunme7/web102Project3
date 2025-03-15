import React, { useState } from 'react'
import Flashcard from './Flashcard'
import './App.css'

const flashcards = [
  { question: "What is the most spoken language in the world?", answer: "Mandarin Chinese" },
  { question: "What language is primarily spoken in Brazil?", answer: "Portuguese" },
  { question: "What is the official language of Japan?", answer: "Japanese" },
  { question: "Which language uses the Cyrillic alphabet?", answer: "Russian" },
  { question: "What is the language of instruction in most schools in the United States?", answer: "English" },
  { question: "What language is known for its use of clicks?", answer: "Xhosa" },
  { question: "Which language has the most words?", answer: "English" },
  { question: "What is the official language of the European Union?", answer: "There is no single official language; all 24 languages are official." },
  { question: "What language is spoken in the most countries?", answer: "English" },
  { question: "What is the only language that is written from right to left?", answer: "Arabic" },
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setShowAnswer(false);
    setUserGuess('');
    setFeedback('');
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setShowAnswer(false);
    setUserGuess('');
    setFeedback('');
  };

  const toggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = () => {
    if (userGuess.toLowerCase() === flashcards[currentCard].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect! The correct answer is: ' + flashcards[currentCard].answer);
    }
    setShowAnswer(true);
  };

  return (
    <div className="container">
      <h1>The Ultimate Language Learner!</h1>
      <p>Test your language knowledge with these flashcards!</p>
      <p>Number of cards: {flashcards.length}</p>

      <Flashcard
        question={flashcards[currentCard].question}
        answer={flashcards[currentCard].answer}
        showAnswer={showAnswer}
        onClick={toggleAnswer}
      />

      <input
        type="text"
        value={userGuess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleSubmit}>Submit</button>
      {feedback && <p>{feedback}</p>}

      <div className="button-container">
        <button onClick={prevCard} disabled={currentCard === 0}>
          Back
        </button>
        <button onClick={nextCard}>
          Next Card
        </button>
      </div>
    </div>
  )
}

export default App
