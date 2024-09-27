import React, { useEffect, useState } from "react";

import SimpleCard from "@/components/SimpleCard";
import { Button } from "@/components/ui/button";

const cardImages = [
  { src: "/images/horny-mushroom.jpeg", matched: false, flipped: false },
  { src: "/images/orange-mushroom.jpeg", matched: false, flipped: false },
  { src: "/images/pepe.jpeg", matched: false, flipped: false },
  { src: "/images/ribbon-pig.jpeg", matched: false, flipped: false },
  { src: "/images/slime.jpeg", matched: false, flipped: false },
  { src: "/images/yeti.jpeg", matched: false, flipped: false },
];

export interface Card {
  src: string;
  id: number;
  matched: boolean;
  flipped: boolean;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [checking, setChecking] = useState<boolean>(false); // disable all cards when the system is checking

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // handle a choice
  const handleChoice = (card: Card) => {
    if (card.id === choiceOne?.id) return; // prevent double clicking on the same card
    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset choices & increase turns
  const resetTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setChecking(false); // enable all cards after the system has checked
  };

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setChecking(true); // disable all cards when the system is checking

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          );
        });
        resetTurns();
      } else {
        setTimeout(() => {
          resetTurns();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // start a new game automatically when the page is loaded
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        MapleStroy Match Cards Mini Game
      </h1>
      <Button variant="outline" className="mt-10" onClick={shuffleCards}>
        New Game
      </Button>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {cards.map((card) => (
          <SimpleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={checking}
          />
        ))}
      </div>
      <p className="mt-5">Turns: {turns}</p>
    </div>
  );
};

export default Home;
