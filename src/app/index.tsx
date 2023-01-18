import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { GlobalStyle, Theme } from "@theme";
import { Generator } from "@views";

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withNormalizeCSS
          withGlobalStyles
          theme={{ ...Theme, colorScheme }}
        >
          <GlobalStyle />
          <Generator />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

createRoot(
  (document.getElementById("root") as HTMLElement) ||
    document.createElement("root")
).render(<App />);
