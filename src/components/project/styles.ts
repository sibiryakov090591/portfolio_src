import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    backgroundColor: theme.palette.app.grey700,
    margin: "20px auto",
    maxWidth: 400,
    borderRadius: 10,
    overflow: "hidden",
    "@media screen and (max-width: 615px)": {
      width: "100%",
    },
  },
  sliderWrapper: {
    overflow: "hidden",
    height: 188,
    "&:hover": {
      "& + div > svg": {
        color: theme.palette.background.yellow,
      },
    },
  },
  sliderLink: {
    display: "block",
    position: "relative",
  },
  sliderIcon: {
    position: "absolute",
    top: 7,
    right: 7,
    color: theme.palette.background.darkYellow,
    transition: "all 200ms ease",
    pointerEvents: "none",
    zIndex: 10,
  },
  githubWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: 13,
    fontStyle: "italic",
    color: theme.palette.background.yellow,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  githubIcon: {
    width: 20,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    color: theme.palette.text.green,
  },
  description: {
    lineHeight: 1.4,
    padding: "10px 35px 35px",
    color: theme.palette.text.primary,
    position: "relative",
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
