import Link from 'next/link'
import { Button } from '@/components/ui/button'

/**
 * 404 페이지
 * - 존재하지 않는 견적서 ID 또는 잘못된 URL 접근 시 표시됩니다.
 */
export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-muted-foreground text-6xl font-bold">404</h1>
        <h2 className="text-foreground mt-4 text-2xl font-semibold">
          견적서를 찾을 수 없습니다
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          요청하신 페이지가 존재하지 않거나 잘못된 URL입니다.
        </p>
        <Button asChild className="mt-8">
          <Link href="/login">홈으로 이동</Link>
        </Button>
      </div>
    </div>
  )
}
