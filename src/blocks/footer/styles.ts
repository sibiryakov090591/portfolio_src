import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createTheme";
import { AppTheme } from "../../themes/paletteTypes";

export const useStyles = makeStyles((theme: Theme & AppTheme) => ({
  footer: {
    paddingTop: 50,
    paddingBottom: 50,
    borderTop: "2px solid #234133",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
  socialsWrapper: {
    display: "flex",
    marginTop: 20,
    marginBottom: 32,
  },
  imgWrapper: {
    width: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  img: {
    width: "100%",
    filter: "grayscale(1)",
    transition: "all 250ms ease",
    "&:hover": {
      filter: "grayscale(0)",
    },
  },
  list: {
    display: "flex",
    gap: "24px",
    padding: 0,
    [theme.breakpoints.down(400)]: {
      flexDirection: "column",
      gap: "0px",
    },
  },
  item: {
    color: theme.palette.text.secondary,
    cursor: "pointer",
    padding: "12px 0",
    transition: "all 300ms ease",
    "&:hover": {
      color: theme.palette.text.green,
    },
  },
}));

export default "styles";
