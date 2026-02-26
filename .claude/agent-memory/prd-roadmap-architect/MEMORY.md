# PRD Roadmap Architect Memory

## 프로젝트: invoice-web

### 핵심 구조
- **PRD 위치**: `docs/PRD.md`
- **로드맵 위치**: `docs/ROADMAP.md`
- **타입 정의**: `src/types/invoice.ts` (Invoice, InvoiceItem, InvoiceListItem, CompanyProfile)
- **환경변수 검증**: `src/lib/env.ts` (Zod 스키마)

### 현재 구현 상태 (2026-02-26 기준)
- 프로젝트 초기 설정 완료 (라우팅, 타입, shadcn/ui 컴포넌트, 로그인 폼 UI)
- 미구현: Notion API 연동, 인증 로직, 견적서 목록/상세 실 UI, PDF 다운로드
- `@notionhq/client` 패키지 아직 미설치

### 기능-페이지 매핑
- F001 (Notion 조회): 목록 + 상세 페이지
- F002-F005: 상세 페이지 (공개 URL, 상세 표시, 상태 배지, PDF)
- F010 (인증): 로그인 + 목록 페이지
- F011 (목록 관리): 목록 페이지

### 의존성 핵심 체인
1. Notion API 클라이언트 > 매퍼 > Server Actions > 페이지 연결
2. 세션 관리 > 미들웨어 > 로그인 폼 연결
3. 상세 페이지 UI > 인쇄 CSS > PDF 다운로드

### 기술 스택 참고
- Next.js 15.5.3, React 19.1.0, TailwindCSS v4, shadcn/ui (new-york)
- Zod v4 (z.object 등), React Hook Form 7.x
- PDF: 브라우저 Print API + CSS @media print (라이브러리 없음)
- 인증: 단일 관리자, 환경변수 기반, 쿠키 세션
