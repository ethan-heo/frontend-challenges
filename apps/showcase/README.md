## 프로젝트 개요

- 이름: Showcase
- 목적: 챌린지 프로젝트 소개
- 목표: 캘린지 프로젝트의 내용을 어느 플랫폼에서도 볼 수 있도록 제작
- 사용자: 본인
- 핵심 기능 및 주요 특징
  - 프로젝트들의 메타 정보를 수집하여 챌린지 정보를 제공(설명, 기술 스택, 원본 소스)
  - 반응형 제작으로 여러 플랫폼에서 확인 가능

## 기술 스택

- 라이브러리: React, TypeScript
- UI 라이브러리: @ethan-heo/styles (기본적인 스타일링을 위한 테마별 토큰을 제공)
- 번들러: Vite
- 보조 도구: ESLint, Prettier, vite-plugin-svgr, vite-plugin-move-dist-files(workspace)

## 프로젝트 구조

```bash
/dist      # 빌드된 파일
/public    # 정적 리소스 (favicon, robots.txt 등)
/src       # 개발 코드
  ├── assets/     # 이미지, 아이콘, 폰트 등 정적 파일
  ├── mocks/      # API 호출 없이 사용할 테스트 데이터
  ├── models/     # 기능에 사용되는 데이터 타입을 정의
```

## 개발 환경

- Turborepo를 활용한 모노레포 환경
- 명령어:
  ```bash
    pnpm --filter=showcase dev
  ```

## UI/UX 디자인

- 반응형 디자인 고려
  - flex-wrap을 활용하여 컬럼이 자동으로 탈락되도록 구성
  - 672px ~ 1024px 까지 대응
- 접근성
  - 시맨틱 태그 활용(Sectioning, Heading 등)

## 배포 및 운영

- 배포 전략: apps/ 내 챌린지 프로젝트의 메타정보를 수집하여 컨텐츠를 동적으로 추가
- 배포 단계
  1. scrips/generateChallengeInfo.mjs 파일 실행
  2. build 실행
  3. 루트 디렉토리에 생성된 docs/ 파일을 github-pages로 배포
