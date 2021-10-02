import React from "react";
import { useStyles } from "./styles";

type PropsType = {
  iconUrl: string;
};

const Skill: React.FC<PropsType> = ({ iconUrl, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img className={classes.icon} src={iconUrl} alt="Project icon" />
      <p className={classes.description}>{children}</p>
    </div>
  );
};

export default Skill;
