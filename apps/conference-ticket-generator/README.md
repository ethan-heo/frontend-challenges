## 프로젝트 개요

- 이름: conference-ticket-generator
- 목적: 유저 정보를 바탕으로 컨퍼런스 티켓을 생성하는 웹 서비스 개발
- 작업 기간: 2일
- 목표:
  - [x] 시맨틱 태그 사용
  - [x] 반응형 사이트 제작 (mobile, desktop)
  - 폼 유효성 검사
    - [x] 업로드 이미지 사이즈 제한, 이미지 유형 제한
    - [x] 필수 요소 확인
    - [x] 이메일 형식 확인
  - [x] Active 상태 css 스타일 정의
- 사용자: 본인
- 핵심 기능 및 주요 특징
  - 폼 유효성 검사
  - 유저 정보 관리 (local storage)
  - 입력된 유저 정보를 기반으로 티켓 생성
  - link 태그의 media 속성을 활용한 플랫폼별 CSS 파일 분리
  - BEM 방법론 사용

## 기술 스택

- 주요 기술: HTML5, CSS3, TypeScript
- 번들러: Vite

## 프로젝트 구조

```bash
/dist      # 빌드된 파일
/public    # 정적 리소스 (favicon, robots.txt 등)
/src       # 개발 코드
  ├── assets/     # 이미지, 아이콘, 폰트 등 정적 파일
  ├── scripts/    # 기능별 스크립트 파일
  ├── styles/     # 페이지별 스타일 디렉토리
ticket.html
index.html
```

## 개발 환경

- Vanilla 프론트엔드 환경
- 실행
  ```bash
  pnpm --filter=conference-ticket-generator dev
  ```

## UI/UX 디자인

- FrontendMentor 에서 제공한 [스타일 가이드](./guide/style-guide.md) 사용
- 반응형 디자인 적용 (Mobile, Desktop)
