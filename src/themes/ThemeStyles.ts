import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "./paletteTypes";
import { Theme } from "@material-ui/core/styles/createTheme";

const themeStyles = makeStyles((theme: AppTheme & Theme) => ({
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    border: `2px dashed ${theme.palette.button.green}`,
    color: theme.palette.text.secondary,
    backgroundColor: "rgba(59, 162, 156, 0.3)", // palette.background.green
    "&:hover": {
      backgroundColor: "rgba(59, 162, 156, 0.5)", // palette.background.green
    },
    "&:focus": {
      backgroundColor: "rgba(59, 162, 156, 0.5)", // palette.background.green
    },
    "&.Mui-disabled": {
      color: "#a9acb5",
    },
    "& .MuiCircularProgress-root": {
      color: theme.palette.text.green,
      marginRight: 12,
      width: "21px !important",
      height: "21px !important",
    },
  },
  selectMenu: {
    border: "1px solid",
    background:
      "linear-gradient(146deg, rgba(78,87,101, 1) 25%, rgba(31,39,50,1) 100%) !important",
  },
  selectMenuItem: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.select.text,
    transition: "all 0ms",
    "&:hover": {
      backgroundColor: `${theme.palette.select.hover} !important`,
    },
    "&.Mui-selected": {
      backgroundColor: `${theme.palette.select.focus} !important`,
      "&:hover": {
        backgroundColor: `${theme.palette.select.hover} !important`,
      },
    },
    "&:focus": {
      backgroundColor: `${theme.palette.select.focus} !important`,
      "&:hover": {
        backgroundColor: `${theme.palette.select.hover} !important`,
      },
    },
  },
  link: {
    display: "flex",
    "&:focus-visible": {
      outline: `2px dashed ${theme.palette.outline}`,
    },
    [theme.breakpoints.down("sm")]: {
      outline: "none",
    },
  },
}));

export default themeStyles;
