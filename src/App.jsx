import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';
import FlashcardSet from './components/FlashcardSet';
import { flashcards } from './data';

function App() {
  const [index, setIndex] = useState(0);

  const shuffleCard = () => {
    const random = Math.floor(Math.random() * flashcards.length);
    setIndex(random);
  };

  return (
    <div className="App">
      <FlashcardSet 
        title="Fun Flashcards" 
        description="A simple flashcard quiz app." 
        total={flashcards.length} 
      />
      <Flashcard card={flashcards[index]} />
      <button onClick={shuffleCard}>Next Card</button>
    </div>
  );
}

export default App;
