import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import useSound from "use-sound";
import sound from "../../../assets/audio/button.wav";

const Button: React.FC<any> = ({ children, onClick, ...rest }) => {
  const [play] = useSound(sound, { volume: 0.07 });

  const playAudio = () => {
    // Play the audio
    play();

    // Action
    if (onClick) onClick();
  };

  return (
    <MaterialButton onClick={playAudio} {...rest}>
      {children}
    </MaterialButton>
  );
};

export default Button;
