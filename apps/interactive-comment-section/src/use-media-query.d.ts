import { SerializedStyles } from "@emotion/react";
import "use-media-query";

declare module "use-media-query" {
  export interface DefaultMediaQuery {
    args: {
      mobile?: SerializedStyles;
      tablet?: SerializedStyles;
      desktop?: SerializedStyles;
    };
    platform: "mobile" | "tablet" | "desktop";
    returnType: SerializedStyles;
  }
}
