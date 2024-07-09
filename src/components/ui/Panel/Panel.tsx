import { useThemeContext } from "../../../context";
import CleanCodeUno from "../CleanCodeUno";
import "./Panel.css";

export default function Panel() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <div className={`panel-${darkMode ? "dark" : "light"}`}>
        <CleanCodeUno />
      </div>
      ;
    </>
  );
}
