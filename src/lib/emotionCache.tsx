"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// ✅ Generate a new cache on every render to prevent hydration mismatches
const createEmotionCache = () => createCache({ key: "mui", prepend: true });

export default function EmotionCacheProvider({ children }: { children: React.ReactNode }) {
  const cache = React.useMemo(() => createEmotionCache(), []);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
