import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";
import { Routes, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global.Styles";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainContainer>
        <Nav theme={theme} themeToggler={themeToggler} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movies/:id" element={<MovieScreen />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
