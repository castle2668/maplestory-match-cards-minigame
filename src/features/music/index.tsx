import React, { useEffect, useRef } from "react";

import useMusicStore from "@/features/music/store/musicStore";

const Music: React.FC = () => {
  const audio = useRef<HTMLAudioElement>(null);
  const { autoPlay } = useMusicStore();

  useEffect(() => {
    if (audio.current && autoPlay) {
      audio.current.play();
    }
  }, [autoPlay]);

  return (
    <audio ref={audio} autoPlay loop>
      <source src="/music/when-the-morning-comes.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default Music;
