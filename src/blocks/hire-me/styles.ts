import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import background from "../../images/background/blackgrit-6a2d636a530802d3ce97afb7af53a84b.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  hire: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${background})`,
    backgroundSize: "30%",
  },
  hireContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  wrapper: {
    display: "flex",
    "@media screen and (max-width: 654px)": {
      flexDirection: "column",
    },
  },
  imgWrapper: {
    height: 350,
  },
  popoverWrapper: {
    padding: "12px 20px",
    display: "flex",
    gap: 15,
    backgroundColor: theme.palette.background.dark,
    boxShadow: "0 0 5px #000000",
    borderRadius: 0,
  },
  button: {
    transition: "250ms all ease",
    "&:hover": {
      color: theme.palette.text.secondary,
    },
  },
  buttonText: {
    borderBottom: `2px solid ${theme.palette.background.green}`,
  },
  resumeItemWrapper: {
    width: 200,
    height: 280,
    margin: "0 20px",
    position: "relative",
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      transform: "rotate(4deg)",
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff",
    },
    "@media screen and (max-width: 654px)": {
      margin: "20px 0",
    },
  },
  resumeImgWrapper: {
    position: "relative",
    width: 200,
    height: 280,
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 500ms ease-out",
    boxShadow: "2px 0 10px rgb(0 0 0 / 40%)",
    "&:hover": {
      boxShadow: "0px 0px 5px 2px #3ba29c",
      "& > img:first-child": {
        filter: "grayscale(0)",
        width: "145%",
      },
      "@media screen and (max-width: 654px)": {
        "&:hover": {
          "& > img:first-child": {
            filter: "grayscale(0)",
          },
        },
      },
    },
  },
  resumeImg: {
    width: "150%",
    transform: "translateX(-2px)",
    filter: "grayscale(1)",
    transition: "all 500ms ease-out",
    "@media screen and (max-width: 654px)": {},
  },
  langIcon: {
    position: "absolute",
    bottom: 0,
    right: 5,
    height: 75,
    "@media screen and (max-width: 654px)": {
      height: 60,
    },
  },
}));

export default "styles";
