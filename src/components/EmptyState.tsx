'use client'

import { Empty, Button } from 'antd'
import { EmptyProps } from 'antd/es/empty'

interface CustomEmptyProps extends EmptyProps {
  title?: string
  description?: string
  actionText?: string
  onAction?: () => void
}

export default function EmptyState({
  title,
  description,
  actionText,
  onAction,
  ...props
}: CustomEmptyProps) {
  return (
    <Empty
      {...props}
      description={
        <div>
          {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
          <p className="text-gray-500">{description}</p>
          {actionText && onAction && (
            <Button type="primary" onClick={onAction} className="mt-4">
              {actionText}
            </Button>
          )}
        </div>
      }
    />
  )
}
