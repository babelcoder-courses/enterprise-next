import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export default function createTheme(darkMode) {
  return createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
  });
}
