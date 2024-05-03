import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  contacts: {
    paddingBottom: 50,
    backgroundImage:
      "linear-gradient(0deg,rgba(38,98,71,.62) 0%,rgba(38,98,71,0) 100%)",
    position: "relative",
    "&:after": {
      content: "''",
      position: "absolute",
      zIndex: 0,
      inset: 0,
      background:
        "radial-gradient(ellipse at center bottom,rgba(12,12,12,0) 40%,rgba(3,3,3,1) 100%)",
      pointerEvents: "none",
    },
  },
  contactsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
    width: 400,
    "@media screen and (max-width: 520px)": {
      width: "100%",
    },
  },
  input: {
    zIndex: 1,
    padding: "0 5px",
    width: "100%",
    height: 25,
    marginBottom: 10,
    outline: "none",
  },
  textarea: {
    width: "100%",
    minHeight: 100,
    resize: "none",
    padding: 5,
    outline: "none",
  },
  button: {
    margin: "35px auto 0 !important",
    width: 235,
  },
}));

export default "styles";
