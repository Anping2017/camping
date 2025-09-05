'use client'

import { useState } from 'react'
import { Table, Card, Button, Input, Space, Tag } from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'

const { Search } = Input

interface UserData {
  id: string
  name: string
  email: string
  role: string
  status: string
  createdAt: string
}

// 模拟数据
const mockData: UserData[] = [
  {
    id: '1',
    name: '管理员',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-01',
  },
  // 添加更多模拟数据...
]

export default function UsersPage() {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)

  const columns = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => (
        <Tag color={role === 'admin' ? 'red' : 'blue'}>
          {role === 'admin' ? '管理员' : '普通用户'}
        </Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'gray'}>
          {status === 'active' ? '活跃' : '禁用'}
        </Tag>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: UserData) => (
        <Space size="middle">
          <Button type="link">编辑</Button>
          <Button type="link" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  const handleSearch = (value: string) => {
    setSearchText(value)
    // TODO: 实现搜索功能
  }

  return (
    <div>
      <Card>
        <div className="mb-4 flex justify-between">
          <Search
            placeholder="搜索用户..."
            onSearch={handleSearch}
            style={{ width: 300 }}
          />
          <Button type="primary" icon={<PlusOutlined />}>
            添加用户
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="id"
          loading={loading}
        />
      </Card>
    </div>
  )
}
