import { makeStyles } from "@material-ui/styles";
import { AppTheme } from "../../../themes/paletteTypes";
import img from "../../../assets/images/bg/curves-1.png";

export const useStyles = makeStyles((theme: AppTheme) => ({
  project: {
    color: theme.palette.text.primary,
    lineHeight: 1.5,
    fontSize: 18,
    position: "relative",
    "&:not(:last-child)": {
      marginBottom: 160,
    },
    "&:before": {
      content: "''",
      display: "block",
      width: "30%",
      position: "absolute",
      top: "-40px",
      bottom: "-40px",
      right: 0,
      backgroundColor: "rgba(0,10,6,1)",
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center -50px",
      clipPath:
        "polygon(0% 100px, 100px 0%, 100% 0%, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%)",
    },
    "&.reverse:before": {
      left: 0,
      right: "auto",
      clipPath:
        "polygon(0% 0, 0 0%, calc(100% - 100px) 0%, 100% 100px, 100% 100%, 100% 100%, 0 100%, 0 100%)",
    },
  },
  projectTitle: {
    fontSize: 26,
    color: theme.palette.text.green,
  },
  projectText: {
    margin: "0 20% 0 0",
    "&.reverse": {
      margin: "0 0 0 20%",
    },
  },
  actions: {
    marginTop: 22,
    display: "flex",
    gap: 18,
    alignItems: "center",
    "& img": { height: 28 },
  },
  slider: {
    background: "rgba(2,19,11,1)",
    borderRadius: "10px",
    maxHeight: "305px",
    maxWidth: "500px",
    margin: "0 auto 0 0",
    "&.reverse": {
      margin: "0 0 0 auto",
    },
    "& img": {
      borderRadius: "10px",
    },
    "& .slick-dots": {
      bottom: "-30px",
      "& li button:before": {
        content: "''",
        border: "2px solid #64ff99",
        borderRadius: 3,
        width: 20,
        height: 0,
      },
    },
  },
}));

export default "styles";
