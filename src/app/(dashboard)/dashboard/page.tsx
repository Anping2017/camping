'use client'

import { useState } from 'react'
import { Card, Row, Col, Statistic, Table, DatePicker, Space } from 'antd'
import {
  UserOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  RiseOutlined,
  TeamOutlined,
  DollarOutlined
} from '@ant-design/icons'
import { Area, Column } from '@ant-design/plots'

const { RangePicker } = DatePicker

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState<[string, string] | null>(null)

  // 模拟数据
  const bookingData = [
    { date: '2024-01', bookings: 35 },
    { date: '2024-02', bookings: 42 },
    { date: '2024-03', bookings: 58 },
    { date: '2024-04', bookings: 64 },
    { date: '2024-05', bookings: 89 },
    { date: '2024-06', bookings: 76 }
  ]

  const revenueData = [
    { type: 'DOC营地', value: 3500 },
    { type: '假日公园', value: 5200 },
    { type: '自由露营', value: 2800 }
  ]

  const latestBookings = [
    {
      id: '1',
      user: '张三',
      campsite: 'Lake Tekapo Holiday Park',
      date: '2024-02-15',
      amount: 245,
      status: 'confirmed'
    },
    // 添加更多订单数据...
  ]

  const columns = [
    {
      title: '用户',
      dataIndex: 'user',
      key: 'user'
    },
    {
      title: '营地',
      dataIndex: 'campsite',
      key: 'campsite'
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount}`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span className={status === 'confirmed' ? 'text-success' : 'text-warning'}>
          {status === 'confirmed' ? '已确认' : '待确认'}
        </span>
      )
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">仪表盘</h1>
        <Space className="mb-4">
          <RangePicker onChange={(dates) => {
            if (dates) {
              setDateRange([dates[0]?.format('YYYY-MM-DD') || '', dates[1]?.format('YYYY-MM-DD') || ''])
            } else {
              setDateRange(null)
            }
          }} />
        </Space>
      </div>

      <Row gutter={[16, 16]} className="mb-6">
        <Col span={6}>
          <Card>
            <Statistic
              title="总用户数"
              value={1234}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="商家数量"
              value={56}
              prefix={<ShopOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="营地数量"
              value={189}
              prefix={<EnvironmentOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="月度增长"
              value={15.6}
              prefix={<RiseOutlined />}
              suffix="%"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-6">
        <Col span={12}>
          <Card title="预订趋势">
            <Area
              data={bookingData}
              xField="date"
              yField="bookings"
              smooth
              color="#1890ff"
              areaStyle={{ fill: 'l(270) 0:#ffffff 0.5:#1890ff 1:#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="收入分布">
            <Column
              data={revenueData}
              xField="type"
              yField="value"
              color="#1890ff"
              label={{
                position: 'top',
                style: {
                  fill: '#1890ff',
                }
              }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="最新预订">
            <Table
              columns={columns}
              dataSource={latestBookings}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="快速统计">
            <Statistic
              title="本月新增用户"
              value={156}
              prefix={<TeamOutlined />}
              className="mb-4"
            />
            <Statistic
              title="本月营收"
              value={28563}
              prefix={<DollarOutlined />}
              suffix="NZD"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}
