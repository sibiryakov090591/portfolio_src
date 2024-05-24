import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 50,
  },
  marqueeWrapper: {
    position: "relative",
    width: "100%",
  },
  border: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 12,
    height: 200,
    background: "radial-gradient(circle, rgba(100,255,153, 0.1) -10%, transparent 100%)",
  }
}));

export default "styles";
