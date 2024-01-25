import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    backgroundColor: theme.palette.app.grey700,
    margin: 20,
    maxWidth: 400,
    borderRadius: 10,
    boxShadow: "5px 5px 20px #000000",
    overflow: "hidden",
    "@media screen and (max-width: 615px)": {
      width: "100%",
    },
  },
  sliderWrapper: {
    overflow: "hidden",
    height: 188,
  },
  sliderLink: {
    display: "block",
    position: "relative",
    "&:hover": {
      "& svg": {
        color: theme.palette.background.green,
      },
    },
  },
  sliderIcon: {
    position: "absolute",
    bottom: 7,
    right: 7,
    color: "#5c5c5c",
    transition: "all 200ms ease",
    pointerEvents: "none",
    zIndex: 10,
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    lineHeight: 1.4,
    padding: "10px 35px 35px",
    color: theme.palette.text.primary,
  },
  slider: {
    transition: "all 800ms ease",
    transform: "scale(1.3) rotate(3deg)",
    filter: "grayscale(1)",
    "&:hover": {
      transform: "scale(1) rotate(0)",
      filter: "grayscale(0)",
    },
  },
  text: {
    margin: 0,
    wordBreak: "break-word",
  },
}));

export default "styles";
