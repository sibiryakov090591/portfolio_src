import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

export const useStyles = makeStyles((theme: AppTheme & Theme) => ({
  projects: {
    paddingBottom: 90,
  },
  projectsWrapper: {
    [theme.breakpoints.down(1100)]: {
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "1fr 1fr",
        width: "100%",
        padding: "0 24px",
        [theme.breakpoints.down(800)]: {
            gridTemplateColumns: "1fr",
        },
    },
  },
}));

export default "styles";
