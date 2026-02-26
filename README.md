# invoice-web

Notion 데이터베이스에 입력된 견적서를 클라이언트가 고유 URL로 웹에서 바로 확인하고 PDF로 다운로드할 수 있는 서비스입니다.

## 프로젝트 개요

**목적**: Notion을 단일 데이터 소스로 활용하여 별도 DB 없이 견적서를 클라이언트에게 공유

**사용자**:

- 발급자(관리자): Notion에 견적서 입력, 관리자 페이지에서 목록 관리
- 수신자(클라이언트): 고유 URL로 견적서 조회 및 PDF 다운로드

## 주요 페이지

| 경로             | 설명                       | 인증   |
| ---------------- | -------------------------- | ------ |
| `/login`         | 발급자 로그인              | 불필요 |
| `/invoices`      | 견적서 목록 (발급자 전용)  | 필수   |
| `/invoices/[id]` | 견적서 상세 + PDF 다운로드 | 불필요 |
| `/*` (404)       | 잘못된 URL 안내            | 불필요 |

## 핵심 기능

- **Notion API 연동**: Server Actions를 통해 서버 사이드에서 Notion API 호출 (API 키 보호)
- **고유 URL 접근**: `/invoices/[id]`로 클라이언트가 로그인 없이 자신의 견적서만 조회
- **견적서 상태 표시**: 초안 / 발송 / 승인 / 거절 4가지 상태를 배지로 표시
- **PDF 다운로드**: 브라우저 Print API + CSS `@media print` 활용
- **발급자 인증**: Notion API 키 기반 이메일/비밀번호 로그인

## 기술 스택

| 분류          | 기술                                      |
| ------------- | ----------------------------------------- |
| Framework     | Next.js 15.5.3 (App Router + Turbopack)   |
| Runtime       | React 19.1.0 + TypeScript 5               |
| Styling       | TailwindCSS v4                            |
| UI Components | shadcn/ui (new-york style) + Lucide React |
| Forms         | React Hook Form 7.x + Zod                 |
| Data Source   | Notion API (@notionhq/client)             |
| PDF           | 브라우저 Print API + CSS @media print     |
| Deployment    | Vercel                                    |

## 시작하기

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .env.example .env.local
# .env.local 파일을 열어 NOTION_API_KEY, NOTION_DATABASE_ID 입력

# 3. 개발 서버 실행
npm run dev
```

개발 서버 실행 후 http://localhost:3000 접속

## 환경변수

```bash
# 필수
NOTION_API_KEY=           # Notion 통합 키 (https://notion.so/my-integrations)
NOTION_DATABASE_ID=       # 견적서 데이터베이스 ID

# 선택
NEXT_PUBLIC_APP_URL=      # 앱 URL (기본값: http://localhost:3000)
```

## 주요 명령어

```bash
npm run dev          # 개발 서버 실행 (Turbopack)
npm run build        # 프로덕션 빌드
npm run check-all    # 타입 체크 + 린트 + 포맷 검사 통합 실행
```

## 개발 현황

- [x] 기본 프로젝트 구조 설정
- [x] 로그인 페이지 (React Hook Form + Zod)
- [x] 견적서 목록 페이지 (플레이스홀더)
- [x] 견적서 상세 페이지 (플레이스홀더)
- [x] 404 페이지
- [ ] Notion API Server Action 연결
- [ ] 발급자 인증 로직 구현
- [ ] 견적서 목록 테이블 컴포넌트
- [ ] 견적서 상세 컴포넌트
- [ ] PDF 다운로드 구현

## 문서

- [PRD 문서](./docs/PRD.md) - 상세 요구사항
- [개발 가이드](./CLAUDE.md) - 개발 지침
- [프로젝트 구조](./docs/guides/project-structure.md)
- [스타일링 가이드](./docs/guides/styling-guide.md)
- [컴포넌트 패턴](./docs/guides/component-patterns.md)
- [Next.js 15 가이드](./docs/guides/nextjs-15.md)
- [폼 처리 가이드](./docs/guides/forms-react-hook-form.md)
