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
    overflow: "hidden",
    "&:hover": {
      "& .img_wrapper:after": {
        background: "rgb(80 124 136 / 25%)",
      },
      "& svg": {
        color: theme.palette.background.yellow,
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
    maxWidth: 630,
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
    backgroundColor: theme.palette.app.grey700,
    border: `5px solid ${theme.palette.app.grey700}`,
  },
  resumeImgWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
    position: "relative",
    "&:after": {
      content: "''",
      transition: "all 500ms ease-out",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgb(64 158 118 / 21%)",
    },
  },
  resumeImg: {
    width: "100%",
  },
  content: {
    color: theme.palette.text.primary,
    padding: "12px 12px 8px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    lineHeight: "1.4",
  },
  icon: {
    transition: "all 200ms ease-out",
    color: theme.palette.background.darkYellow,
    position: "absolute",
    bottom: 4,
    right: 6,
  },
}));

export default "styles";
