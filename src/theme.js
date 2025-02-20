import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0", // Roxo principal
    },
    secondary: {
      main: "#673ab7", // Roxo mais escuro
    },
    background: {
      default: "#121212", // Fundo escuro
      paper: "#1e1e1e", // Cartões mais claros
    },
    text: {
      primary: "#ffffff", // Texto branco
      secondary: "#b39ddb", // Roxo mais suave para textos secundários
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

export default darkTheme;
