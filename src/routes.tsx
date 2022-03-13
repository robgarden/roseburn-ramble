import { steps } from "./constants/steps";
import { StepPage } from "./pages/StepPage";

interface StepRoute {
  path: string;
  element: JSX.Element;
}

export const StepRoutes: StepRoute[] = steps.map((step) => {
  return {
    path: step.id,
    element: <StepPage step={step} />,
  };
});
