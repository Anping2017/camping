'use client'

import { useState } from 'react'
import { Card, Form, Input, Button, Upload, message, Tabs, Space, Avatar } from 'antd'
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons'
import type { TabsProps } from 'antd'

const { TextArea } = Input

export default function ProfilePage() {
  const [loading, setLoading] = useState(false)

  const handleBasicInfoSubmit = async (values: any) => {
    setLoading(true)
    try {
      // TODO: 实现保存逻辑
      console.log('保存基本信息:', values)
      message.success('基本信息已更新')
    } catch (error) {
      message.error('保存失败')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordSubmit = async (values: any) => {
    setLoading(true)
    try {
      // TODO: 实现密码修改逻辑
      console.log('修改密码:', values)
      message.success('密码已更新')
    } catch (error) {
      message.error('修改失败')
    } finally {
      setLoading(false)
    }
  }

  const items: TabsProps['items'] = [
    {
      key: 'basic',
      label: '基本信息',
      children: (
        <Form
          layout="vertical"
          onFinish={handleBasicInfoSubmit}
          initialValues={{
            name: '管理员',
            email: 'admin@example.com',
            phone: '+64 123 456 789',
            bio: '系统管理员',
          }}
        >
          <div className="mb-6 text-center">
            <Space direction="vertical" size="middle">
              <Avatar size={100} icon={<UserOutlined />} />
              <Upload
                maxCount={1}
                beforeUpload={() => false}
              >
                <Button icon={<UploadOutlined />}>更换头像</Button>
              </Upload>
            </Space>
          </div>

          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="电话"
            name="phone"
            rules={[{ required: true, message: '请输入电话' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="个人简介"
            name="bio"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存信息
            </Button>
          </Form.Item>
        </Form>
      )
    },
    {
      key: 'security',
      label: '安全设置',
      children: (
        <Form
          layout="vertical"
          onFinish={handlePasswordSubmit}
        >
          <Form.Item
            label="当前密码"
            name="currentPassword"
            rules={[{ required: true, message: '请输入当前密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="新密码"
            name="newPassword"
            rules={[
              { required: true, message: '请输入新密码' },
              { min: 8, message: '密码长度不能小于8位' }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="确认新密码"
            name="confirmPassword"
            rules={[
              { required: true, message: '请确认新密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              修改密码
            </Button>
          </Form.Item>
        </Form>
      )
    },
    {
      key: 'notification',
      label: '通知设置',
      children: (
        <Form
          layout="vertical"
          initialValues={{
            emailNotification: 'admin@example.com',
            notifyOnBooking: true,
            notifyOnMessage: true,
            notifyOnSystem: true
          }}
        >
          <Form.Item
            label="通知邮箱"
            name="emailNotification"
            rules={[
              { required: true, message: '请输入通知邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="接收通知类型"
            name="notificationTypes"
          >
            <Space direction="vertical">
              <Form.Item name="notifyOnBooking" valuePropName="checked" noStyle>
                <Button.Group>
                  <Button>预订通知</Button>
                  <Button>消息通知</Button>
                  <Button>系统通知</Button>
                </Button.Group>
              </Form.Item>
            </Space>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      )
    }
  ]

  return (
    <div className="p-6">
      <Card>
        <Tabs defaultActiveKey="basic" items={items} />
      </Card>
    </div>
  )
}
