import React from "react";
import useSound from "use-sound";
import sound from "../../../assets/audio/open.wav";
import { useStyles } from "./styles";

const BlankLink: React.FC<any> = ({ children, onClick, ...rest }) => {
  const classes = useStyles();

  const [play] = useSound(sound, { volume: 0.4 });

  const playAudio = () => {
    // Play the audio
    play();

    // Action
    if (onClick) onClick();
  };

  return (
    <a
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={playAudio}
      {...rest}
    >
      {children}
    </a>
  );
};

export default BlankLink;
