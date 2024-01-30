import React, { useEffect, useRef } from "react";
import { Button as MaterialButton } from "@material-ui/core";
import sound from "../../../assets/audio/button.wav";

const Button: React.FC<any> = ({ children, onClick, ...rest }) => {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.07;
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
    <MaterialButton onClick={playAudio} {...rest}>
      {children}
      <audio ref={audioRef} src={sound}></audio>
    </MaterialButton>
  );
};

export default Button;
