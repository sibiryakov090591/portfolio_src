import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  contacts: {
    paddingBottom: 50,
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
    animation: `$bright 10s forwards infinite`,
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
  "@keyframes bright": {
    "0%": { boxShadow: "0px 80px 250px 5px #0F4F33" },
    "33%": { boxShadow: "0px 80px 650px 18px #024830" },
    "66%": { boxShadow: "0px 80px 650px 18px #0e474f" },
    "100%": { boxShadow: "0px 80px 250px 5px #0F4F33" },
  },
}));

export default "styles";
