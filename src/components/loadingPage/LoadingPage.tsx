import React from "react";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loading from "../../images/2.gif";

const LoadingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.preloader}>
            <img src={loading} alt="loading"/>
        </div>
    </div>
  );
};

export default LoadingPage;
