import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  contacts: {
    paddingBottom: 90,
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
    maxWidth: 550,
    width: "100%",
  },
  input: {
    zIndex: 1,
    padding: "6px 12px",
    width: "100%",
    height: 40,
    fontSize: 18,
    marginBottom: 10,
    outline: "none",
    border: `3px solid ${theme.palette.skill.border}`,
    borderRadius: 8,
    backgroundColor: theme.palette.skill.background,
    color: "#ffffff",
  },
  textarea: {
    width: "100%",
    height: 150,
    resize: "none",
    padding: "6px 12px",
    outline: "none",
    fontSize: 16,
    zIndex: 1,
    border: `3px solid ${theme.palette.skill.border}`,
    borderRadius: 8,
    backgroundColor: theme.palette.skill.background,
    color: "#ffffff",
  },
  button: {
    margin: "35px auto 0 !important",
    width: 235,
  },
}));

export default "styles";
