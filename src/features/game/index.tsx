import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";

import MapleButton from "@/components/MapleButton";
import { Skeleton } from "@/components/ui/skeleton";

import Player1Image from "./assets/images/player1.png";
import Player2Image from "./assets/images/player2.webp";
import SuccessImage from "./assets/images/success.png";
import AvatarCard from "./components/AvatarCard";
import SimpleCard from "./components/SimpleCard";
import { API_REGION, API_VERSION, DEFAULT_CARDS, MODE } from "./data/constants";
import { Card, Mob } from "./interfaces";
import { useGameStore } from "./store/gameStore";
import {
  playClearSound,
  playClickSound,
  playFailSound,
  playMatchSound,
} from "./utils/sounds";

const defaultMobCards = DEFAULT_CARDS.map((src) => ({
  src,
  matched: false,
  flipped: false,
}));

const Game: React.FC = () => {
  const { mode, players, setPlayers } = useGameStore();

  const [mobs, setMobs] = useState<Mob[]>([]); // mobs data fetched from the API
  const [cards, setCards] = useState<Card[]>([]); // cards data to be displayed
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [checking, setChecking] = useState<boolean>(false); // disable all cards when the system is checking
  const [isInitialReveal, setIsInitialReveal] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Use React Query to fetch mobs data and filter out duplicated mobs by name
  const { data: mobsData, isError } = useQuery({
    queryKey: ["mobs"],
    queryFn: async () => {
      const response = await fetch(
        `https://maplestory.io/api/${API_REGION}/${API_VERSION}/mob/?&count=50&startPosition=0`
      );
      return await response.json();
    },
    retry: false,
  });
  useEffect(() => {
    if (!mobsData) return;

    const filteredMobs = mobsData.reduce((acc: Mob[], mob: Mob) => {
      const isDuplicated = acc.some((m: Mob) => m.name === mob.name);
      return isDuplicated ? acc : [...acc, mob];
    }, []);

    setMobs(filteredMobs);
  }, [mobsData]);

  // To start a new game, we need to reset the players data and shuffle the cards
  const resetPlayersData = useCallback(() => {
    setPlayers([
      { id: 1, name: "Player 1", score: 0, turns: 0, current: true },
      { id: 2, name: "Player 2", score: 0, turns: 0, current: false },
    ]);
  }, [setPlayers]);
  const shuffleCards = useCallback(async () => {
    if (!mobs.length && isError) {
      // If there is an issue with the API, use the default cards
      const shuffledCards = [...defaultMobCards, ...defaultMobCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({
          ...card,
          id: Math.random(),
        }));
      setCards(shuffledCards);
    } else {
      // Randomly select 15 mobs
      const randomMobs = mobs.sort(() => Math.random() - 0.5).slice(0, 15);

      // Use Promise.all to fetch all images at once
      const images = await Promise.all(
        randomMobs.map(async (mob: Mob) => {
          const imageResponse = await fetch(
            `https://maplestory.io/api/${API_REGION}/${API_VERSION}/mob/${mob.id}/render/stand`
          );
          return imageResponse.url;
        })
      );

      // Combine the images into the format of Card
      const mobCards = images.map((image) => ({
        src: image,
        matched: false,
        flipped: false,
      }));
      const shuffledCards = [...mobCards, ...mobCards].map((card) => ({
        ...card,
        id: Math.random(),
      }));

      setCards(shuffledCards);
    }

    // Reset choices
    setChoiceOne(null);
    setChoiceTwo(null);

    // When the game starts, show all cards for 1 second
    setIsInitialReveal(true);
    setTimeout(() => {
      setIsInitialReveal(false);
    }, 1000);
  }, [mobs, isError]);
  const startNewGame = useCallback(() => {
    resetPlayersData();
    shuffleCards();
  }, [resetPlayersData, shuffleCards]);

  // Start a new game when the "New Game" button is clicked, or when the page is loaded
  const handleClickNewGame = () => {
    playClickSound();
    startNewGame();
  };
  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Handle a choice
  const handleChoice = (card: Card) => {
    if (card.id === choiceOne?.id) return; // prevent double clicking on the same card
    return choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setChecking(false); // enable all cards after the system has checked
  };
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setChecking(true); // disable all cards when the system is checking

      if (choiceOne.src === choiceTwo.src) {
        setTimeout(() => {
          playMatchSound();
        }, 100);

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
          playFailSound();
        }, 100);

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

  // Check if the game is over
  useEffect(() => {
    if (cards.length === 30 && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setIsGameOver(true);
        playClearSound();
      }, 500);
      setTimeout(() => {
        setIsGameOver(false);
      }, 3000);
    }
  }, [cards]);

  return (
    <div className="flex gap-8">
      <div className="border-solid border-2 border-gray-400 py-4 px-6">
        <div className="grid grid-cols-6 gap-x-3 gap-y-2">
          {cards.length > 0
            ? cards.map((card) => (
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
                  cardSource={mobs.length ? "api" : "local"}
                />
              ))
            : Array.from({ length: 30 }, () => (
                <div className="p-0.5 border-2 border-gray-500 rounded-md shadow-md">
                  <Skeleton className="w-16 h-24 rounded-sm" />
                </div>
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
          <MapleButton onClick={handleClickNewGame}>New Game</MapleButton>
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
          src={SuccessImage}
          alt="Success Image"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
        />
      )}
    </div>
  );
};

const queryClient = new QueryClient();

const GameApp: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Game />
    </QueryClientProvider>
  );
};

export default GameApp;
