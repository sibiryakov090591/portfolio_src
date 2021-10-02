import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  contacts: {
    backgroundColor: theme.palette.background.dark,
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
    padding: "0 5px",
    width: "100%",
    height: 25,
    marginBottom: 10,
    outline: "none",
  },
  textarea: {
    width: "100%",
    minHeight: 100,
    resize: "vertical",
    padding: 5,
    outline: "none",
  },
}));

export default "styles";
