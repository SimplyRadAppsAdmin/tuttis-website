"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Create a cache with 'mui' key for consistent SSR hydration
const muiCache = createCache({ key: "mui", prepend: true });

export default function EmotionCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CacheProvider value={muiCache}>{children}</CacheProvider>;
}

