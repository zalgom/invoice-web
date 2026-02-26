import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '견적서 목록 | invoice-web',
  description: 'Notion 데이터베이스에서 불러온 견적서 목록을 관리합니다.',
}

/**
 * 견적서 목록 페이지
 * - 발급자 로그인 필수 (F010, F011)
 * - Notion API를 통해 견적서 목록을 불러옵니다 (F001)
 * TODO: Notion API Server Action 연결, 인증 미들웨어 추가
 */
export default function InvoicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-foreground text-3xl font-bold">견적서 목록</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Notion 데이터베이스에서 불러온 견적서를 관리합니다.
          </p>
        </div>

        {/* TODO: 견적서 목록 테이블 컴포넌트 */}
        <div className="border-border rounded-lg border border-dashed p-12 text-center">
          <p className="text-muted-foreground text-sm">
            견적서 목록이 여기에 표시됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
