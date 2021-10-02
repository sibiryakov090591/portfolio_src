import React from "react";
import { useStyles } from "./styles";

type PropsType = {
  index?: string;
  title: string;
};

const Title: React.FC<PropsType> = ({ title, index }) => {
  const classes = useStyles();
  return (
    <h2 className={classes.title}>
      <span className={classes.index}>{`${index}. `}</span>
      {title}
    </h2>
  );
};

export default Title;
