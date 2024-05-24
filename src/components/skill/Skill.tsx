import React from "react";
import { useStyles } from "./styles";

type PropsType = {
  icon: string;
};

const Skill: React.FC<PropsType> = ({ icon, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img className={classes.icon} src={icon} alt="Skill icon" />
      <span className={classes.description}>{children}</span>
    </div>
  );
};

export default Skill;
