import React, { useCallback, useEffect, useState } from "react";

import MapleButton from "@/components/MapleButton";

import Player1Image from "./assets/images/player1.png";
import Player2Image from "./assets/images/player2.webp";
import GameOverImage from "./assets/images/success.png";
import AvatarCard from "./components/AvatarCard";
import SimpleCard from "./components/SimpleCard";
import { MODE } from "./data/constants";
import { useGameStore } from "./store/gameStore";

const cardImages = [
  { src: "/images/mobs/blue-mushroom.png", matched: false, flipped: false },
  { src: "/images/mobs/blue-snail.png", matched: false, flipped: false },
  { src: "/images/mobs/cold-eye.png", matched: false, flipped: false },
  { src: "/images/mobs/curse-eye.png", matched: false, flipped: false },
  { src: "/images/mobs/drake.png", matched: false, flipped: false },
  { src: "/images/mobs/evil-eye.png", matched: false, flipped: false },
  { src: "/images/mobs/horny-mushroom.png", matched: false, flipped: false },
  { src: "/images/mobs/lorang.png", matched: false, flipped: false },
  { src: "/images/mobs/lupin.png", matched: false, flipped: false },
  { src: "/images/mobs/octopus.png", matched: false, flipped: false },
  { src: "/images/mobs/pig.png", matched: false, flipped: false },
  { src: "/images/mobs/ribbon-pig.png", matched: false, flipped: false },
  { src: "/images/mobs/tortie.png", matched: false, flipped: false },
  { src: "/images/mobs/wild-kargo.png", matched: false, flipped: false },
  { src: "/images/mobs/wraith.png", matched: false, flipped: false },
];

export interface Card {
  src: string;
  id: number;
  matched: boolean;
  flipped: boolean;
}

const Game: React.FC = () => {
  const { mode, players, setPlayers } = useGameStore();

  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [checking, setChecking] = useState<boolean>(false); // disable all cards when the system is checking
  const [isInitialReveal, setIsInitialReveal] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // reset players data
  const resetPlayersData = useCallback(() => {
    setPlayers([
      { id: 1, name: "Player 1", score: 0, turns: 0, current: true },
      { id: 2, name: "Player 2", score: 0, turns: 0, current: false },
    ]);
  }, [setPlayers]);

  // shuffle cards
  const shuffleCards = useCallback(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);

    // when the game starts, show all cards for 1 second
    setIsInitialReveal(true);
    setTimeout(() => {
      setIsInitialReveal(false);
    }, 1000);
  }, []);

  // start a new game
  const newGame = useCallback(() => {
    resetPlayersData();
    shuffleCards();
  }, [resetPlayersData, shuffleCards]);

  // start a new game automatically when the page is loaded
  useEffect(() => {
    newGame();
  }, [newGame]);

  // handle a choice
  const handleChoice = (card: Card) => {
    if (card.id === choiceOne?.id) return; // prevent double clicking on the same card
    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset choices
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
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

        setPlayers((prevPlayers) =>
          prevPlayers.map((player) =>
            player.current
              ? { ...player, score: player.score + 1, turns: player.turns + 1 }
              : { ...player }
          )
        );

        resetChoices();
      } else {
        setTimeout(() => {
          if (mode === MODE.SINGLE) {
            setPlayers((prevPlayers) =>
              prevPlayers.map((player) =>
                player.current
                  ? { ...player, current: true, turns: player.turns + 1 }
                  : { ...player }
              )
            );
          } else {
            setPlayers((prevPlayers) =>
              prevPlayers.map((player) =>
                player.current
                  ? { ...player, current: false, turns: player.turns + 1 }
                  : { ...player, current: true }
              )
            );
          }

          resetChoices();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo, mode, setPlayers]);

  // check if the game is over
  useEffect(() => {
    if (
      cards.length === cardImages.length * 2 &&
      cards.every((card) => card.matched)
    ) {
      setIsGameOver(true);
    }
  }, [cards]);

  return (
    <div className="flex gap-8">
      <div className="border-solid border-2 border-gray-400 py-4 px-6">
        <div className="grid grid-cols-6 gap-x-3 gap-y-2">
          {cards.map((card) => (
            <SimpleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                isInitialReveal ||
                card === choiceOne ||
                card === choiceTwo ||
                card.matched
              }
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
          <div className="text-sm bg-blue-200 p-1 text-nowrap text-black">
            Welcome to Maple Mini-Game
          </div>
        </div>
        <div className="border-solid border-2 border-gray-400 p-2 flex gap-2">
          <AvatarCard
            playerImage={Player1Image}
            playerName={players[0].name}
            current={players[0].current}
            turns={players[0].turns}
            score={players[0].score}
          />
          {mode === MODE.MULTI && (
            <AvatarCard
              playerImage={Player2Image}
              playerName={players[1].name}
              current={players[1].current}
              turns={players[1].turns}
              score={players[1].score}
            />
          )}
        </div>
        <div className="flex justify-end">
          <MapleButton onClick={newGame}>New Game</MapleButton>
        </div>
        <div className="border-solid border-2 border-gray-400 p-1 text-sm h-full">
          <div className="bg-black text-white p-1 flex flex-col gap-1 h-full border border-gray-400">
            <p>Game Started.</p>
            <p className="text-yellow-400">
              [{players[0].name}] has joined the game.
            </p>
            {mode === MODE.MULTI && (
              <p className="text-yellow-400">
                [{players[1].name}] has joined the game.
              </p>
            )}
          </div>
        </div>
      </div>
      {isGameOver && (
        <img
          src={GameOverImage}
          alt="Game Over Image"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
        />
      )}
    </div>
  );
};

export default Game;
