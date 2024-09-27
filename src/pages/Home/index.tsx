import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const cardImages = [
  { src: "/horny-mushroom.jpeg" },
  { src: "/orange-mushroom.jpeg" },
  { src: "/pepe.jpeg" },
  { src: "/ribbon-pig.jpeg" },
  { src: "/slime.jpeg" },
  { src: "/yeti.jpeg" },
];

interface Card {
  src: string;
  id: number;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
      }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="flex flex-col items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        MapleStroy Match Cards Mini Game
      </h1>
      <Button variant="outline" className="mt-10" onClick={shuffleCards}>
        Start Game
      </Button>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {cards.map((card) => (
          <div key={card.id} className="flex">
            <img
              src={card.src}
              alt="card front"
              className="w-32 h-32 object-cover"
            />
            <img
              src="/cover.jpeg"
              alt="card back"
              className="w-32 h-32 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
