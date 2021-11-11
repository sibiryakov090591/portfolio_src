import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  langBlock: {
    color: theme.palette.text.secondary,
  },
  langFlag: {
    width: 30,
    [theme.breakpoints.down("sm")]: {
      width: 45,
    },
  },
  langFlagItem: {
    width: 20,
    marginRight: 5,
  },
}));

export default "styles";
