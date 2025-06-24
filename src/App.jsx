import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';
import FlashcardSet from './components/FlashcardSet';
import { flashcards as originalCards} from './data';

function App() {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState([...originalCards]);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = cards[index];

  const normalize = (text) =>
    text.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").trim();

  const checkAnswer = () => {
    const userAnswer = normalize(guess);
    const correctAnswer = normalize(currentCard.answer);

    if (userAnswer === correctAnswer) {
      setFeedback('correct');
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback('incorrect');
      setCurrentStreak(0);
    }
  };

  const goNext = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setGuess('');
      setFeedback(null);
    }
  };

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
      setGuess('');
      setFeedback(null);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setIndex(0);
    setGuess('');
    setFeedback(null);
    setCurrentStreak(0);
  };

  return (
    <div className="App">
      <FlashcardSet 
        title="Smart Flashcards" 
        description="Practice with streaks, feedback, and shuffle mode." 
        total={cards.length} 
      />

      <Flashcard card={currentCard} />

      <div className="input-box">
        <input
          type="text"
          placeholder="Type your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>

      {feedback === 'correct' && <p style={{ color: 'green' }}>✅ Correct!</p>}
      {feedback === 'incorrect' && <p style={{ color: 'red' }}>❌ Incorrect</p>}

      <div className="streaks">
        <p>🔥 Current Streak: {currentStreak}</p>
        <p>🏆 Longest Streak: {longestStreak}</p>
      </div>

      <div className="nav-buttons">
        <button onClick={goBack} disabled={index === 0}>Back</button>
        <button onClick={goNext} disabled={index === cards.length - 1}>Next</button>
        <button onClick={shuffleCards}>🔀 Shuffle</button>
      </div>
    </div>
  );
}

export default App;
