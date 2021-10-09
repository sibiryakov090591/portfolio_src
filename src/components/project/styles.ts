import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    padding: 15,
    margin: 20,
    maxWidth: 400,
    borderRadius: 10,
    boxShadow: "5px 5px 20px #000000",
  },
  sliderWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  sliderLink: {
    overflow: "hidden",
  },
  sliderIcon: {
    position: "absolute",
    bottom: 7,
    right: 7,
    color: "#5c5c5c",
    transition: "all 200ms ease",
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    lineHeight: 1.4,
    padding: 20,
    color: theme.palette.text.primary,
  },
  img: {
    transition: "all 800ms ease",
    transform: "scale(1.3) rotate(3deg)",
    filter: "grayscale(1)",
    "& + svg": {
      "&:hover": {
        color: theme.palette.background.green,
      },
    },
    "&:hover": {
      transform: "scale(1) rotate(0)",
      filter: "grayscale(0)",
      "& + svg": {
        color: theme.palette.background.green,
      },
    },
  },
  text: {
    margin: 0,
    wordBreak: "break-word",
  },
}));

export default "styles";
