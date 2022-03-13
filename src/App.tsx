import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { StepRoutes } from "./routes";

function App() {
  return (
    <Routes>
      {StepRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
