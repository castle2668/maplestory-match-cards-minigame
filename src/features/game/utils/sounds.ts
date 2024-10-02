import ClearSound from "../assets/sounds/clear.mp3";
import ClickSound from "../assets/sounds/click.mp3";
import FailSound from "../assets/sounds/fail.mp3";
import MatchSound from "../assets/sounds/match.mp3";

export const playClearSound = () => {
  const audio = new Audio(ClearSound);
  audio.play();
};

export const playClickSound = () => {
  const audio = new Audio(ClickSound);
  audio.play();
};

export const playFailSound = () => {
  const audio = new Audio(FailSound);
  audio.play();
};

export const playMatchSound = () => {
  const audio = new Audio(MatchSound);
  audio.play();
};
