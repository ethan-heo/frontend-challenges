import type { DefaultMediaQuery, MediaQuery } from "../media-query.types";

const mediaQueryMap = new Map<DefaultMediaQuery["platform"], MediaQuery>();

/**
 *
 * @param platform
 * @param mediaQuery
 *
 * @example
 * registerMediaQuery('mobile', '(max-width: 480px)')
 */
export const registerMediaQuery = (
  platform: DefaultMediaQuery["platform"],
  mediaQuery: MediaQuery,
) => {
  mediaQueryMap.set(platform, mediaQuery);
};

/**
 *
 * @param platform
 * @returns
 *
 * @example
 * getMediaQuery('mobile')
 */
export const getMediaQuery = (platform: DefaultMediaQuery["platform"]) => {
  return mediaQueryMap.get(platform);
};
