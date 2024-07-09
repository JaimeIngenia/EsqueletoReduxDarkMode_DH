import { useThemeContext } from "../../../context";
import CleanCodeUno from "../Products";
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
