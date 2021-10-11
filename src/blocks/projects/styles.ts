import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  projects: {
    backgroundColor: theme.palette.background.dark,
    paddingBottom: 50,
  },
  projectsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%",
    "@media screen and (max-width: 1042px)": {
      justifyContent: "center",
      padding: "0 30px",
    },
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 50,
  },
}));

export default "styles";
