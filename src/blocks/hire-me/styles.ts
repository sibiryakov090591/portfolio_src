import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  hireContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  wrapper: {
    display: "flex",
    cursor: "pointer",
    transition: "all 500ms ease-out",
    overflow: "hidden",
    "&:hover": {
      "& img": {
        filter: "grayscale(0)",
      },
    },
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "stretch",
    maxWidth: 630,
    position: "relative",
    overflow: "hidden",
    borderRadius: "30px",
    backgroundColor: theme.palette.background.dark,
    border: `5px dashed ${theme.palette.app.grey700}`,
  },
  resumeImg: {
    width: "100%",
    filter: "grayscale(1)",
    transition: "all 500ms ease-out",
  },
  content: {
    color: theme.palette.text.green,
    padding: 16,
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    lineHeight: "1.4",
  },
}));

export default "styles";
