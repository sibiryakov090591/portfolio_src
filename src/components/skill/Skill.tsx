import React from "react";
import { useStyles } from "./styles";

type PropsType = {
  iconUrl: string;
};

const Skill: React.FC<PropsType> = ({ iconUrl, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.iconWrapper}>
        <img className={classes.icon} src={iconUrl} alt="Project icon" />
      </div>
      <p className={classes.description}>{children}</p>
    </div>
  );
};

export default Skill;
