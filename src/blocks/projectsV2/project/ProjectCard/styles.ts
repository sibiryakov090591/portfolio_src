import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    backgroundColor: theme.palette.app.grey700,
    margin: "20px auto",
    maxWidth: 400,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  sliderWrapper: {
    overflow: "hidden",
    height: 188,
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 22,
    color: theme.palette.background.yellow,
    marginTop: 36,
    "& img": { height: 20, marginLeft: 12 },
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
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    fontSize: 18,
    wordBreak: "break-word",
  },
  button: {
    border: "none !important",
    fontSize: 13,
    background: "#303636 !important",
  }
}));

export default "styles";
