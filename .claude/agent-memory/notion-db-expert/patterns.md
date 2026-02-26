# Notion API 패턴 노트

## 싱글톤 클라이언트 패턴

```typescript
// 개발 모드 HMR에서 중복 인스턴스 방지
const globalForNotion = globalThis as unknown as {
  notionClient: Client | undefined
}
export const notionClient =
  globalForNotion.notionClient ?? new Client({ auth: env.NOTION_API_KEY })
if (env.NODE_ENV !== 'production') globalForNotion.notionClient = notionClient
```

## 지수 백오프 재시도 패턴

- 최대 3회 재시도
- APIErrorCode.RateLimited(429)에만 재시도 적용
- APIErrorCode.Unauthorized, RestrictedResource는 즉시 throw
- 일반 에러도 마지막 시도 전까지 재시도

## 필터 복합 조건 구성

```typescript
// 복수 조건은 반드시 { and: [...] } 또는 { or: [...] } 래핑 필요
const filter =
  filterConditions.length === 1
    ? filterConditions[0]
    : { and: filterConditions }
```

## Mapper 타입 안전 패턴

- `page.properties[key]?.type === 'title'` 방식으로 타입 가드 후 접근
- 잘못된 타입 시 기본값 반환 (null 또는 빈 문자열)
- Rich Text JSON 파싱은 try/catch 필수 (2,000자 제한 주의)

## 환경 변수 검증 (Zod)

- NOTION*API_KEY: startsWith('secret*') 검증
- NOTION_INVOICES_DATABASE_ID: length(32) + 소문자 16진수 regex 검증
- 빌드 타임에 오류 조기 발견 가능

## ISR 캐싱 전략

- 목록 API: revalidate=60초 (s-maxage=60, stale-while-revalidate=120)
- 단건 API: revalidate=300초 (s-maxage=300, stale-while-revalidate=600)
- 데이터 변경 시: revalidatePath('/invoices') + revalidateTag('invoices')

## 견적 항목 저장 방식

- Relation DB 대신 Rich Text에 JSON.stringify로 직렬화 저장
- 이유: Relation은 추가 API 호출 필요, 단순화 목적
- 주의: 항목 수가 많아 2,000자 초과 시 분할 필요

## API Route params (Next.js 15)

```typescript
// Next.js 15에서 params는 Promise 타입
interface RouteParams {
  params: Promise<{ id: string }>
}
const { id } = await params // await 필수
```
