## 프로젝트 개요

- 이름: rock-paper-scissors-game
- 목적: 가위, 바위, 보 게임 서비스 개발
- 작업 기간:
- 목표:
  - [ ] 반응형 사이트 제작 (mobile, tablet, desktop)
  - [ ] 컴퓨터와 가위, 바위, 보, 도마뱀, 스팍 게임
  - [ ] 점수 상태 유지
  - [ ] 사용자 대전
- 사용자: 본인
- 핵심 기능 및 주요 특징
  - 가위, 바위, 보 게임
    - 리자드, Spock 케이스 추가
  - 컴퓨터, 사용자 대전 점수 유지
  - 대전할 사용자가 없으면 컴퓨터 대전 유도

## 기술 스택

- 주요 기술: Svelte, TypeScript
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
  pnpm --filter=rock-paper-scissors-game dev
  ```

## UI/UX 디자인

- FrontendMentor 에서 제공한 [스타일 가이드](./guide/style-guide.md) 사용
- 반응형 디자인 적용 (Mobile, Tablet, Desktop)
