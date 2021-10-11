import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  hire: {
    backgroundColor: theme.palette.background.dark,
  },
  hireContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  wrapper: {
    display: "flex",
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
  resumeImgWrapper: {
    position: "relative",
    width: 200,
    height: 300,
    overflow: "hidden",
    transform: "skew(10deg)",
    borderRadius: 5,
    cursor: "pointer",
    transition: "all 600ms ease",
    marginRight: 20,
    "&:hover": {
      width: 250,
      "& > img:first-child": {
        filter: "grayscale(0)",
        transform: "translate(-158px, -91px) skew(-15deg) scale(0.8)",
      },
      "@media screen and (max-width: 654px)": {
        "&:hover": {
          width: 130,
          "& > img:first-child": {
            filter: "grayscale(0)",
            transform: "translate(-100px, -48px) skew(-15deg) scale(0.8)",
          },
        },
      },
    },
    "@media screen and (max-width: 654px)": {
      width: 100,
      height: 200,
    },
  },
  resumeImg: {
    width: "250%",
    transform: "translate(-127px, -72px) skew(-15deg) scale(0.8)",
    filter: "grayscale(1)",
    transition: "all 600ms ease",
    "@media screen and (max-width: 654px)": {
      transform: "translate(-63px, -36px) skew(-15deg) scale(0.8)",
    },
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
