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
  img: {
    height: "100%",
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
    transform: "skew(15deg)",
    border: `4px solid ${theme.palette.app.grey600}`,
    cursor: "pointer",
    transition: "all 400ms ease",
    "&:hover": {
      width: 250,
      border: `4px solid ${theme.palette.background.green}`,
      "& img": {
        filter: "grayscale(0)",
      },
    },
  },
  resumeImg: {
    width: "250%",
    transform: "translate(-115px, 0) skew(-15deg)",
    filter: "grayscale(1)",
    transition: "all 400ms ease",
  },
  langIcon: {
    position: "absolute",
    bottom: 0,
    right: 5,
    height: 75,
  },
}));

export default "styles";
