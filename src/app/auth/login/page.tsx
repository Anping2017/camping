'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button, Card, Form, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import { LockOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true)
    try {
      const result = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })

      if (result?.error) {
        message.error('登录失败，请检查邮箱和密码')
      } else {
        message.success('登录成功')
        router.push('/dashboard')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-96">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">NZ Camping 管理系统</h1>
          <p className="text-gray-500">请登录您的账号</p>
        </div>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="邮箱"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              size="large"
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>

          <div className="text-center">
            <Button
              icon={<GoogleOutlined />}
              onClick={handleGoogleLogin}
              size="large"
              className="w-full"
            >
              使用 Google 账号登录
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}
