## 프로젝트 개요

- 이름: product-list-with-cart
- 목적: 상품 목록과 장바구니 기능을 제공하는 서비스 개발
- 작업 기간: 2일
- 목표:
  - [x] 시맨틱 태그 사용
  - [x] 반응형 사이트 제작 (mobile, tablet, desktop)
  - [x] 장바구니 아이템 추가 / 제거
  - [x] 상품 개수 증가 / 감소
  - [x] Confirm Order 버튼 클릭시 Order Confirmation 모달 활성화
  - [x] Start New Order 버튼을 클릭시 선택 목록 / 장바구니 초기화
- 사용자: 본인
- 핵심 기능 및 주요 특징
  - BEM 방법론 사용
  - 시맨틱 태그 활용
  - 동일하고 반복된 UI, 일관성있는 상태관리를 위해 React 라이브러리 사용
  - 모듈 시스템에서 media query 사용을 감소할 수 있도록 스타일 구성방식 설계
    - useMediaQuery 구현
  - useSyncExternalStore 훅을 사용하여 Product, Cart 상태 제어

## 기술 스택

- 주요 기술: React, TypeScript, Emotion
- 번들러: Vite

## 프로젝트 구조

```bash
/dist      # 빌드된 파일
/guide      # 디자인 가이드
/public    # 정적 리소스 (favicon, robots.txt 등)
/src       # 개발 코드
  ├── assets/        # 이미지, 아이콘, 폰트 등 정적 파일
  ├── components/    # 기능, 레이아웃 별 컴포넌트 디렉토리 구성
  ├── hooks/         # 비즈니스 로직
  ├── styles/        # 공용 스타일
index.html
```

## 개발 환경

- 실행
  ```bash
  pnpm --filter=conference-ticket-generator dev
  ```

## UI/UX 디자인

- FrontendMentor 에서 제공한 [스타일 가이드](./guide/style-guide.md) 사용
- 반응형 디자인 적용 (Mobile, Tablet, Desktop)
