import { createContext, ReactNode, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

// Definir el tipo del contexto
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Inicializar el contexto con un valor por defecto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const ThemeContext = createContext();

// Hook para usar el contexto
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

// export const useThemeContext = () => {
//   return useContext(ThemeContext);
// };

// Props del proveedor del contexto
interface ThemeProviderProps {
  children: ReactNode;
}
// Componente proveedor del contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, toggle] = useToggle();

  const toggleDarkMode = () => {
    toggle();
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, toggle] = useToggle();

//   const toggleDarkMode = () => {
//     toggle();
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
