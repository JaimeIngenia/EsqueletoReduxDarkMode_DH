import { useThemeContext } from "../../../context";
import "./Navbar.css";
import { Switch } from "antd";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useThemeContext();

  const className = darkMode ? "dark" : "light";
  return (
    <>
      <div className={`navbar-${className}`}>
        <span className={`logo-${className}`}>Modo Dark</span>
        <label className="switch">
          <Switch defaultChecked onChange={toggleDarkMode} value={darkMode} />
        </label>
      </div>
      <div className="content"></div>
    </>
  );
}
