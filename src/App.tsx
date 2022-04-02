import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Game, INITIAL_GAME } from "./game/Game";
import { GameContext } from "./game/GameContext";
import { loadExistingGame, saveGameToLocalStorage } from "./game/helpers";
import { Step } from "./interfaces/Step";
import { DonationPage } from "./pages/Donation";
import { FinishPage } from "./pages/FinishPage";
import { Landing } from "./pages/Landing";
import { StepRoutes } from "./routes";
import { theme } from "./theme";

function App() {
  const [game, setGame] = useState<Game>(INITIAL_GAME);
  const [mounted, setMounted] = useState(false);

  function startGame() {
    setGame((game) => ({
      ...game,
      started: true,
    }));
  }

  function loadGame() {
    const game = loadExistingGame();
    if (game) {
      setGame((g) => game);
      return game;
    }
  }

  useEffect(() => {
    if (game.started) {
      console.log("game state change");
      console.log(game);
      saveGameToLocalStorage(game);
    }
  }, [game]);

  function addToCompletedSteps(step: Step) {
    console.log("adding step");
    setGame((game) => ({
      ...game,
      completedSteps: [...game.completedSteps, step],
    }));
  }

  return (
    <ThemeProvider theme={theme}>
      <GameContext.Provider
        value={{ game, startGame, loadGame, addToCompletedSteps }}
      >
        <Routes>
          {StepRoutes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
          <Route path="/finish" element={<FinishPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </GameContext.Provider>
    </ThemeProvider>
  );
}

export default App;
