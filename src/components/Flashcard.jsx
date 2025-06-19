import { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const categoryClass = card.category ? card.category.toLowerCase() : "";

  return (
    <div className={`card-container ${categoryClass}`} onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="front">
          {card.image && <img src={card.image} alt="card visual" className="card-image" />}
          <p>{card.question}</p>
        </div>
        <div className="back">
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
}
