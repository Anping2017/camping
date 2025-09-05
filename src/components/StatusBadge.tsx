'use client'

import { Badge, Tag } from 'antd'
import { getStatusColor, getStatusText } from '@/lib/utils'

interface StatusBadgeProps {
  status: string
  type?: 'badge' | 'tag'
}

export default function StatusBadge({ status, type = 'badge' }: StatusBadgeProps) {
  const color = getStatusColor(status)
  const text = getStatusText(status)

  if (type === 'tag') {
    return <Tag color={color}>{text}</Tag>
  }

  return <Badge status={color as any} text={text} />
}
