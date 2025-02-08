## use-media-query

모듈 시스템에서 media query를 사용할 수 있도록 변경

### Usage

#### 1. Declaration 파일 추가

사용자 정의 플랫폼, 반환값, Hook args

```typescript
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
```

#### 2. media query 추가

플랫폼, 플랫폼별 media query를 등록하는 과정

```typescript
import { registerMediaQuery } from "use-media-query";

registerMediaQuery("mobile", "(max-width: 480px)");
registerMediaQuery("tablet", "(min-width: 481px) and (max-width: 1024px)");
registerMediaQuery("desktop", "(min-width: 1025px)");
```

#### 3. useMediaQuery

```typescript
const style = useMediaQuery({
  mobile,
  tablet,
  desktop,
});
```

### Optional

#### getMediaQuery

등록된 media query를 가져오는 함수

```typescript
getMediaQuery("mobile");
getMediaQuery("tablet");
getMediaQuery("desktop");
```
