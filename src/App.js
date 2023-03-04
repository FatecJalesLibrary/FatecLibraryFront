import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "routes";
import "./theme.css";
import "./responsive.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";


let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App dark-mode">
        <BrowserRouter>
          <RoutesContainer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
