import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface InvoiceDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({
  params,
}: InvoiceDetailPageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `견적서 ${id} | invoice-web`,
    description: '견적서 상세 내용을 확인하고 PDF로 다운로드할 수 있습니다.',
  }
}

/**
 * 견적서 상세 페이지
 * - 인증 없이 고유 URL로 접근 가능 (F002)
 * - Notion API를 통해 특정 견적서 데이터를 불러옵니다 (F001, F003)
 * - 견적서 상태 표시: 초안 / 발송 / 승인 / 거절 (F004)
 * - PDF 다운로드 기능 (F005)
 * TODO: Notion API Server Action 연결, PDF 다운로드 구현
 */
export default async function InvoiceDetailPage({
  params,
}: InvoiceDetailPageProps) {
  const { id } = await params

  // TODO: Notion API에서 견적서 데이터를 불러옵니다
  // const invoice = await getInvoiceById(id)
  // if (!invoice) notFound()

  // 유효하지 않은 ID 형식 검사 (임시)
  if (!id) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* PDF 출력 시 숨길 액션 버튼 영역 */}
        <div className="mb-8 flex items-center justify-between print:hidden">
          <h1 className="text-foreground text-2xl font-bold">견적서 상세</h1>
          <button
            onClick={() => window.print()}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            PDF 다운로드
          </button>
        </div>

        {/* TODO: 견적서 상세 컴포넌트 */}
        <div className="border-border rounded-lg border border-dashed p-12 text-center">
          <p className="text-muted-foreground text-sm">
            견적서 ID: <strong>{id}</strong> 의 상세 내용이 여기에 표시됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
