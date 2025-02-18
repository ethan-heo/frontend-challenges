## use-media-query

모듈 시스템을 활용한 스타일 사용 환경에서 media query를 사용하지 않고 반응형 스타일을 정의할 수 있도록 도와주는 도구

### Usage

### 0. React, Svelte 지원

```typescript
import useMediaQuery "use-media-query/react";
// or
import useMediaQuery "use-media-query/svelte";
```

#### 1. Declaration 파일 추가

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

- args: 훅의 인자 타입 정의
- platform: 사용할 플랫폼 정의
- returnType: 훅의 반환값 타입 정의

#### 2. media query 추가

플랫폼별 media query를 등록하는 과정. matchMedia의 사이즈에 사용된다.

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
