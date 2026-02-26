/**
 * 견적서 처리 상태
 * Notion 데이터베이스의 Status 속성과 매핑됩니다.
 */
export type InvoiceStatus = '초안' | '발송' | '승인' | '거절'

/**
 * 견적 항목 (InvoiceItem)
 * Notion 데이터베이스의 관계형 또는 하위 아이템으로 관리됩니다.
 */
export interface InvoiceItem {
  id: string
  invoiceId: string
  itemName: string
  quantity: number
  unitPrice: number
  subtotal: number
}

/**
 * 견적서 (Invoice)
 * Notion 데이터베이스의 페이지를 단일 데이터 소스로 사용합니다.
 */
export interface Invoice {
  id: string
  invoiceNumber: string
  clientName: string
  issueDate: string
  expiryDate: string
  status: InvoiceStatus
  totalAmount: number
  memo?: string
  items: InvoiceItem[]
}

/**
 * 견적서 목록 아이템 (목록 페이지용 요약 데이터)
 */
export interface InvoiceListItem {
  id: string
  invoiceNumber: string
  clientName: string
  issueDate: string
  status: InvoiceStatus
  totalAmount: number
}

/**
 * 발급자 회사 정보 (환경변수로 관리)
 */
export interface CompanyProfile {
  companyName: string
  logoUrl?: string
  address: string
  contact: string
  businessNumber: string
}
