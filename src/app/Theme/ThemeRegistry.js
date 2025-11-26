"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#8b5cf6" },
          secondary: { main: "#14b8a6" },
          background: {
            default: mode === "dark" ? "#0e0e0f" : "#fafafa",
            paper: mode === "dark" ? "#151517" : "#ffffff",
          },
        },
        typography: {
          fontFamily: `"Inter","Roboto",sans-serif`,
        },
        shape: { borderRadius: 12 },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
