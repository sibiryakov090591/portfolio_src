import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import my_photo from "../../images/my_photo.jpg";

export const useStyles = makeStyles((theme: AppTheme) => ({
  hero: {
    height: "100vh",
    background: theme.palette.background.dark,
  },
  heroContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroInner: {
    display: "flex",
    position: "relative",
    "@media screen and (max-width: 450px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  presentation: {
    position: "absolute",
    bottom: "-55px",
    right: "-85%",
    color: theme.palette.text.green,
    fontFamily: "Play",
    fontSize: 24,
    width: 255,
    height: 100,
    lineHeight: 1.2,
    "@media screen and (max-width: 900px)": {
      bottom: "-105px",
      right: "-35px",
    },
    "@media screen and (max-width: 450px)": {
      position: "initial",
      fontSize: 24,
      width: 160,
      alignSelf: "end",
    },
  },
  photo: {
    background: `center / cover url(${my_photo}) no-repeat`,
    borderRadius: "50%",
    overflow: "hidden",
    width: 300,
    height: 300,
    "@media screen and (max-width: 900px)": {
      marginBottom: 40,
    },
    "@media screen and (max-width: 450px)": {
      width: 250,
      height: 250,
      marginBottom: 0,
    },
  },
}));

export default "styles";
