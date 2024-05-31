import React from "react";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

type PropsType = {
  index?: string;
  title: string;
};

const Title: React.FC<PropsType> = ({ title, index }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      <h2 className={classes.title}>
        {/* <span className={classes.index}>{`${index}. `}</span> */}
        <span className={classes.index}></span>
        {title}
      </h2>
    </Box>
  );
};

export default Title;
