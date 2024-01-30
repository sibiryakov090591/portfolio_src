import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import sound from "../../../assets/audio/mixkit-game-user-interface-tone-2570_Gy5p0NA0.wav";

const NavLink: React.FC<any> = ({ children, onClick, ...rest }) => {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
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
    <Link {...rest} onClick={playAudio}>
      {children}
      <audio ref={audioRef} src={sound}></audio>
    </Link>
  );
};

export default NavLink;
