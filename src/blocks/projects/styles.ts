import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: AppTheme) => ({
  projectsContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 50,
  },
  projectsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: 975,
    "@media screen and (max-width: 1042px)": {
      justifyContent: "center",
      maxWidth: "none",
    },
  },
}));

export default "styles";
