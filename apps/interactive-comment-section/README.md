## 프로젝트 개요

- 이름: interactive-comment-section
- 목적: 댓글 작성을 위한 서비스 개발
- 작업 기간: 3일
- 목표:
  - [x] 시맨틱 태그 사용
  - [x] 반응형 사이트 제작 (mobile, tablet, desktop)
  - [x] Comment, Reply CRUD 구현
  - [x] Comment, Reply 투표 기능 구현
  - [x] 본인이 작성한 Comment, Reply 삭제시 확인 모달 출력
  - [x] LocalStorage 를 사용하여 현재 상태를 유지하도록 구현
  - [x] 댓글 작성 기간을 보여주도록 구현
- 사용자: 본인
- 핵심 기능 및 주요 특징
  - BEM 방법론 사용
  - 시맨틱 태그 활용
  - 모듈 시스템에서 반응형 사이트 제작을 위해 useMediaQuery(workspace) 훅을 사용
  - useSyncExternalStore 훅을 사용하여 Comment, User, App 상태 제어

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
