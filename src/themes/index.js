import { createTheme } from "@material-ui/core";
import palette from "./palette";
import MuiPopover from "./MuiPopover";

const theme = createTheme({
  palette,
  overrides: {
    MuiPopover,
  },
});

export default theme;
