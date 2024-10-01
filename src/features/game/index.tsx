import React, { useEffect, useState } from "react";

import MapleButton from "@/components/MapleButton";

import Player1Image from "./assets/images/player1.png";
import Player2Image from "./assets/images/player2.webp";
import AvatarCard from "./components/AvatarCard";
import SimpleCard from "./components/SimpleCard";

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

const Game: React.FC = () => {
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
    <div className="flex gap-8">
      <div className="border-solid border-2 border-gray-400 py-4 px-6">
        <div className="grid grid-cols-4 gap-5">
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
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-solid border-2 border-gray-400 p-2 pb-0 flex gap-2 items-start">
          <div className="border-solid border-2 border-b-0 border-gray-400 text-sm p-1 pb-4">
            MAPLE MINIGAME
          </div>
          <div className="text-sm bg-blue-200 p-1 text-nowrap">
            Welcome to Maple Mini-Game
          </div>
        </div>
        <div className="border-solid border-2 border-gray-400 p-2 flex gap-2">
          <div className="flex-1">
            <AvatarCard playerImage={Player1Image} playerName="CHI" />
            <div className="border border-gray-400">Turns: {turns}</div>
          </div>
          <div className="flex-1">
            <AvatarCard playerImage={Player2Image} playerName="SEAN" />
            <div className="border border-gray-400">Turns: {turns}</div>
          </div>
        </div>
        <div className="flex justify-end">
          <MapleButton onClick={shuffleCards}>New Game</MapleButton>
        </div>
        <div className="border-solid border-2 border-gray-400 p-2 text-sm h-full">
          <div className="bg-black text-white p-2 flex flex-col gap-1 h-full">
            <p>Game Started.</p>
            <p className="text-yellow-400">[CHI] has joined the game.</p>
            <p className="text-yellow-400">[SEAN] has joined the game.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
