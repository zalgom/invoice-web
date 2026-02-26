# Notion DB Expert - 에이전트 메모리

## 프로젝트 개요

- 프로젝트: invoice-web (견적서 웹 애플리케이션)
- 스택: Next.js 15.5.3 + React 19 + TypeScript 5 + TailwindCSS v4 + shadcn/ui
- Notion API: @notionhq/client SDK 사용 (서버 사이드 전용)

## 핵심 파일 위치

- 환경 변수 검증: `/src/lib/env.ts` (Zod 기반, 기존 파일에 Notion 변수 추가)
- Notion 클라이언트: `/src/lib/notion/client.ts`
- 응답 변환(Mapper): `/src/lib/notion/mappers.ts`
- 서비스 함수: `/src/lib/notion/invoice-service.ts`
- 타입 정의: `/src/lib/types/invoice.ts`
- Zod 스키마: `/src/lib/schemas/invoice.ts`
- Server Actions: `/src/lib/actions/invoice-actions.ts`
- API Routes: `/src/app/api/invoices/route.ts`, `/src/app/api/invoices/[id]/route.ts`

## Notion API 핵심 제약사항

- 페이지 크기 최대 100개 (초과 시 ValidationError)
- Rate Limit: 초당 3요청 → 429 에러 시 지수 백오프(1s, 2s, 4s) 재시도
- Rich Text 최대 2,000자 (긴 JSON은 분할 저장 필요)
- 날짜: ISO 8601 형식 필수
- 복합 필터: 최상위에 and/or operator 단 하나만 허용
- NOTION*API_KEY는 NEXT_PUBLIC* 접두사 절대 사용 금지

## Next.js 15 주의사항

- Dynamic Route params는 반드시 await 필요: `const { id } = await params`
- Server Actions에서 Notion API 호출 권장 (API Routes 대비 타입 안전성 우수)
- revalidateTag/revalidatePath로 캐시 무효화

## Notion 데이터베이스 스키마 (견적서)

- 클라이언트명: Title (첫 번째 프로퍼티 필수)
- 견적서번호: Number
- 상태: Select (초안/발송/승인/거절)
- 발급일: Date
- 유효기간: Date
- 총액: Number
- 견적항목: Rich Text (JSON 직렬화)
- 메모: Rich Text

## 상세 패턴 노트

- 자세한 패턴은 `patterns.md` 참조
