import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Landing } from "./pages/Landing";
import { StepRoutes } from "./routes";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {StepRoutes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
        <Route path="/" element={<Landing />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
