import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import my_photo from "../../images/my_photo.jpg";

export const useStyles = makeStyles((theme: AppTheme) => ({
  heroContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media screen and (max-width: 900px)": {
      flexDirection: "column-reverse",
      justifyContent: "center",
    },
  },
  heroInner: {
    display: "flex",
    position: "relative",
  },
  hero: {
    height: "100vh",
    background: theme.palette.background.dark,
  },
  presentation: {
    position: "absolute",
    bottom: "-55px",
    right: "-80%",
    color: theme.palette.text.green,
    fontSize: 24,
    width: 360,
    minHeight: 100,
    lineHeight: 1.2,
    "@media screen and (max-width: 450px)": {
      fontSize: 20,
      width: 300,
    },
  },
  photo: {
    background: `center / contain url(${my_photo}) no-repeat`,
    borderRadius: "50%",
    overflow: "hidden",
    width: 300,
    height: 300,
    "@media screen and (max-width: 900px)": {
      marginBottom: 40,
    },
  },
}));

export default "styles";
