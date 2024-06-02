import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import my_photo from "../../assets/images/my_photo2.jpg";

export const useStyles = makeStyles((theme: AppTheme) => ({
  hero: {
    height: "100vh",
    backgroundImage:
      "linear-gradient(180deg,rgba(38,98,71,.62) 0%,rgba(38,98,71,0) 100%)",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      zIndex: 0,
      inset: 0,
      background:
        "radial-gradient(ellipse at center top,rgba(12,12,12,0) 40%,rgba(3,3,3,1) 100%)",
      pointerEvents: "none",
    },
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
    zIndex: 1,
    position: "absolute",
    bottom: "-55px",
    right: "-85%",
    color: theme.palette.text.green,
    fontFamily: "Orbitron",
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
    position: "relative",
    animation: `$flash 3s forwards`,
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(26,209,130, 0.21)",
    },
    "@media screen and (max-width: 900px)": {
      marginBottom: 40,
    },
    "@media screen and (max-width: 450px)": {
      width: 250,
      height: 250,
      marginBottom: 0,
    },
  },
  "@keyframes flash": {
    "0%": {
      opacity: 0,
      transform: "translateY(-15px) scale(0.96)",
      filter: "grayscale(0.8)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      filter: "grayscale(0)",
    },
  },
}));

export default "styles";
