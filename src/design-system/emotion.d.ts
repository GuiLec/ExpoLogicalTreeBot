import "@emotion/react";

import { theme } from "./theme/theme";

type ThemeInterface = typeof theme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface  -- we do want an empty interface, it's indicated in the emotion docs
  export interface Theme extends ThemeInterface {}
}
