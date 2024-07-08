import Navbar from "./components/ui/Navbar/Navbar";
import Panel from "./components/ui/Panel/Panel";
import { ThemeProvider } from "./context/ThemeContext";
export const App = () => {
  return (
    <ThemeProvider value={[]}>
      <Navbar />
      <Panel />
    </ThemeProvider>
  );
};
