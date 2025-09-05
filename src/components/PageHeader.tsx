'use client'

import { Space, Button, Breadcrumb } from 'antd'
import { useRouter } from 'next/navigation'

interface PageHeaderProps {
  title: string
  breadcrumb?: { title: string; path?: string }[]
  extra?: React.ReactNode
  onBack?: () => void
}

export default function PageHeader({
  title,
  breadcrumb,
  extra,
  onBack
}: PageHeaderProps) {
  const router = useRouter()

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          {onBack && (
            <Button
              type="link"
              onClick={onBack}
              className="mr-2 -ml-4"
            >
              返回
            </Button>
          )}
          <span className="text-2xl font-bold">{title}</span>
        </div>
        {extra && <Space>{extra}</Space>}
      </div>
      {breadcrumb && (
        <Breadcrumb
          items={breadcrumb.map(item => ({
            title: item.path ? (
              <a onClick={() => router.push(item.path!)}>{item.title}</a>
            ) : (
              item.title
            )
          }))}
        />
      )}
    </div>
  )
}
