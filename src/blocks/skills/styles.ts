import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 90,
    [theme.breakpoints.down("sm")]: {
        paddingLeft: "0",
        paddingRight: "0",
    },
  },
  marqueeWrapper: {
    position: "relative",
    width: "100%",
    margin: "30px 0 80px",
    [theme.breakpoints.down("sm")]: {
        marginBottom: 0,
    },
  },
  border: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 12,
    height: 350,
    background: "radial-gradient(circle, rgba(100,255,153, 0.1) -10%, transparent 100%)",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
  }
}));

export default "styles";
