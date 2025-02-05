"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

// ✅ Create Emotion Cache
const muiCache = createCache({ key: "mui", prepend: true });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.values(muiCache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
