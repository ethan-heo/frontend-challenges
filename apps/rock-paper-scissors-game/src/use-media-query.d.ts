import "use-media-query";

declare module "use-media-query" {
  export interface DefaultMediaQuery {
    args: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    };
    platform: "mobile" | "tablet" | "desktop";
    returnType: string;
  }
}
