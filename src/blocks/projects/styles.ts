import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  projectsContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 90,
  },
  projectsWrapper: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    maxWidth: 975,
    [theme.breakpoints.down(1135)]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

export default "styles";
