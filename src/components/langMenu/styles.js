import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  langBlock: {
    cursor: "pointer",
    padding: 10,
    color: theme.palette.text.secondary,
  },
  langFlag: {
    width: 30,
    [theme.breakpoints.down("sm")]: {
      width: 45,
    },
  },
}));

export default "styles";
