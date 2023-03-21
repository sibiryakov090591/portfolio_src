import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    maxWidth: 800,
    padding: 30,
    "@media screen and (max-width: 615px)": {
      flexDirection: "column",
      maxWidth: 430,
    },
  },
  description: {
    marginLeft: 30,
    fontSize: "1.1rem",
    lineHeight: 1.4,
    margin: 0,
    wordBreak: "break-word",
    color: theme.palette.text.primary,
    width: 600,
    fontWeight: "bold",
    "@media screen and (max-width: 900px)": {
      width: "auto",
    },
  },
  iconWrapper: {
    border: `8px solid ${theme.palette.skill.border}`,
    backgroundColor: theme.palette.skill.background,
    borderRadius: 12,
    height: 150,
    width: 150,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 615px)": {
      marginBottom: 20,
    },
  },
  icon: {
    height: "100%",
    borderRadius: 3,
  },
}));

export default "styles";
