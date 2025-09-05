'use client'

import { useEffect } from 'react'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">出错了</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          抱歉，发生了一些错误
        </h2>
        <p className="text-gray-500 mb-8">
          请稍后再试或联系系统管理员
        </p>
        <Button 
          type="primary" 
          icon={<ReloadOutlined />} 
          size="large"
          onClick={reset}
        >
          重试
        </Button>
      </div>
    </div>
  )
}
