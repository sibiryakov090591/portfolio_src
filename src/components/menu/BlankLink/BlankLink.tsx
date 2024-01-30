import React, { useEffect, useRef } from "react";
import sound from "../../../assets/audio/open.wav";

const BlankLink: React.FC<any> = ({ children, onClick, ...rest }) => {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.load();
    }
  }, [audioRef.current]);

  const playAudio = () => {
    const audio: any = audioRef.current;

    // If audio is playing, pause and reset to the beginning
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Play the audio
    audio.play();
    if (onClick) onClick();
  };

  return (
    <a target="_blank" onClick={playAudio} {...rest}>
      {children}
      <audio ref={audioRef} src={sound}></audio>
    </a>
  );
};

export default BlankLink;
