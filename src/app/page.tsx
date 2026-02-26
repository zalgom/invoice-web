import { redirect } from 'next/navigation'

/**
 * 루트 경로는 로그인 페이지로 리디렉션합니다.
 * 인증 후에는 견적서 목록 페이지(/invoices)로 이동합니다.
 */
export default function Home() {
  redirect('/login')
}
