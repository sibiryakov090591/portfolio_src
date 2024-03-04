import React from "react";
import { Link } from "react-scroll";
import sound from "../../../assets/audio/navigation.wav";
import useSound from "use-sound";

const NavLink: React.FC<any> = ({ children, onClick, ...rest }) => {
  const [play] = useSound(sound, { volume: 0.1 });

  const playAudio = () => {
    // Play the audio
    play();

    // Action
    if (onClick) onClick();
  };

  return (
    <Link {...rest} onClick={playAudio}>
      {children}
    </Link>
  );
};

export default NavLink;
