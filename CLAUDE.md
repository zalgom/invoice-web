# Claude Code 개발 지침

**invoice-web**은 Notion 데이터베이스의 견적서를 클라이언트가 고유 URL로 확인하고 PDF로 다운로드하는 Next.js 15.5.3 기반 웹 서비스입니다.

상세 프로젝트 요구사항은 @/docs/PRD.md 참조

## Project Context

- **PRD 문서**: @/docs/PRD.md
- **개발 로드맵**: @/docs/ROADMAP.md

## 핵심 기술 스택

- **Framework**: Next.js 15.5.3 (App Router + Turbopack)
- **Runtime**: React 19.1.0 + TypeScript 5
- **Styling**: TailwindCSS v4 + shadcn/ui (new-york style)
- **Forms**: React Hook Form + Zod + Server Actions
- **UI Components**: Radix UI + Lucide Icons
- **Data Source**: Notion API (@notionhq/client)
- **Development**: ESLint + Prettier + Husky + lint-staged

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 루트 (→ /login 리디렉션)
│   ├── not-found.tsx           # 404 페이지
│   ├── login/
│   │   └── page.tsx            # 발급자 로그인 페이지
│   └── invoices/
│       ├── page.tsx            # 견적서 목록 (발급자 전용)
│       └── [id]/
│           └── page.tsx        # 견적서 상세 (공개 URL)
├── components/
│   ├── ui/                     # shadcn/ui 컴포넌트
│   ├── layout/
│   │   └── container.tsx       # 레이아웃 컨테이너
│   ├── providers/
│   │   └── theme-provider.tsx  # 테마 프로바이더
│   └── login-form.tsx          # 로그인 폼 (RHF + Zod)
├── lib/
│   ├── utils.ts                # 유틸리티 함수 (cn 등)
│   └── env.ts                  # 환경변수 유효성 검사
└── types/
    └── invoice.ts              # 견적서 타입 정의
```

## 개발 가이드 문서

- **프로젝트 요구사항**: `@/docs/PRD.md`
- **프로젝트 구조**: `@/docs/guides/project-structure.md`
- **스타일링 가이드**: `@/docs/guides/styling-guide.md`
- **컴포넌트 패턴**: `@/docs/guides/component-patterns.md`
- **Next.js 15.5.3 전문 가이드**: `@/docs/guides/nextjs-15.md`
- **폼 처리 완전 가이드**: `@/docs/guides/forms-react-hook-form.md`

## 자주 사용하는 명령어

```bash
# 개발
npm run dev         # 개발 서버 실행 (Turbopack)
npm run build       # 프로덕션 빌드
npm run check-all   # 모든 검사 통합 실행 (권장)

# UI 컴포넌트
npx shadcn@latest add button    # 새 컴포넌트 추가
```

## 작업 완료 체크리스트

```bash
npm run check-all   # 모든 검사 통과 확인
npm run build       # 빌드 성공 확인
```

## 핵심 개발 규칙

- `any` 타입 사용 금지, 엄격한 TypeScript 타입 적용
- 서버 컴포넌트 우선, 클라이언트 컴포넌트는 최소화
- Notion API 호출은 반드시 Server Actions 사용 (API 키 보호)
- 환경변수는 `src/lib/env.ts`를 통해서만 접근
- 코드 주석은 한국어로 작성
