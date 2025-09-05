'use client'

import { useState } from 'react'
import { Card, Tabs, Form, Input, Button, Switch, Select, InputNumber, Space, message } from 'antd'
import type { TabsProps } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const { TextArea } = Input

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = async (values: any) => {
    setLoading(true)
    try {
      // TODO: 实现保存逻辑
      console.log('保存设置:', values)
      message.success('设置已保存')
    } catch (error) {
      message.error('保存失败')
    } finally {
      setLoading(false)
    }
  }

  const items: TabsProps['items'] = [
    {
      key: 'general',
      label: '基本设置',
      children: (
        <Form
          layout="vertical"
          onFinish={handleSave}
          initialValues={{
            siteName: 'NZ Camping',
            siteDescription: '新西兰露营管理系统',
            contactEmail: 'support@nzcamping.com',
            contactPhone: '+64 123 456 789',
          }}
        >
          <Form.Item
            label="网站名称"
            name="siteName"
            rules={[{ required: true, message: '请输入网站名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="网站描述"
            name="siteDescription"
            rules={[{ required: true, message: '请输入网站描述' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="联系邮箱"
            name="contactEmail"
            rules={[
              { required: true, message: '请输入联系邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="联系电话"
            name="contactPhone"
            rules={[{ required: true, message: '请输入联系电话' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      )
    },
    {
      key: 'payment',
      label: '支付设置',
      children: (
        <Form
          layout="vertical"
          onFinish={handleSave}
          initialValues={{
            currency: 'NZD',
            defaultCommission: 0.15,
            enableStripe: true,
            enablePaypal: true,
          }}
        >
          <Form.Item
            label="默认货币"
            name="currency"
            rules={[{ required: true, message: '请选择默认货币' }]}
          >
            <Select
              options={[
                { label: '新西兰元 (NZD)', value: 'NZD' },
                { label: '美元 (USD)', value: 'USD' },
                { label: '人民币 (CNY)', value: 'CNY' },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="默认佣金率"
            name="defaultCommission"
            rules={[{ required: true, message: '请输入默认佣金率' }]}
          >
            <InputNumber
              min={0}
              max={1}
              step={0.01}
              style={{ width: '100%' }}
              formatter={value => `${(Number(value) * 100).toFixed(1)}%`}
              parser={value => parseFloat(value?.replace('%', '') || '0') / 100}
            />
          </Form.Item>

          <Form.Item
            label="启用 Stripe"
            name="enableStripe"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="启用 PayPal"
            name="enablePaypal"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
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
          onFinish={handleSave}
          initialValues={{
            enableEmailNotification: true,
            enableSmsNotification: false,
            notificationEmail: 'notifications@nzcamping.com',
          }}
        >
          <Form.Item
            label="启用邮件通知"
            name="enableEmailNotification"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="启用短信通知"
            name="enableSmsNotification"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="通知邮箱"
            name="notificationEmail"
            rules={[
              { required: true, message: '请输入通知邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      )
    },
  ]

  return (
    <div className="p-6">
      <Card>
        <Tabs defaultActiveKey="general" items={items} />
      </Card>
    </div>
  )
}
