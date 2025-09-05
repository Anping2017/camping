'use client'

import { useState } from 'react'
import { 
  Card, 
  Table, 
  Button, 
  Space, 
  Tag, 
  Input, 
  Select,
  Modal,
  Form,
  Rate,
  message,
  Image
} from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  StopOutlined
} from '@ant-design/icons'

const { Search } = Input
const { TextArea } = Input

interface UGContent {
  id: string
  type: 'review' | 'photo' | 'article'
  title: string
  content: string
  author: string
  campsite: string
  rating?: number
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
}

const mockData: UGContent[] = [
  {
    id: '1',
    type: 'review',
    title: '绝佳的露营体验',
    content: '风景优美，设施完善，服务态度很好。',
    author: '张三',
    campsite: 'Lake Tekapo Holiday Park',
    rating: 4.5,
    status: 'approved',
    createdAt: '2024-02-15'
  },
  // 添加更多模拟数据...
]

export default function ContentPage() {
  const [searchText, setSearchText] = useState('')
  const [selectedType, setSelectedType] = useState<string>()
  const [selectedStatus, setSelectedStatus] = useState<string>()
  const [detailVisible, setDetailVisible] = useState(false)
  const [selectedContent, setSelectedContent] = useState<UGContent | null>(null)
  const [loading, setLoading] = useState(false)

  const handleStatusChange = async (record: UGContent, status: 'approved' | 'rejected') => {
    try {
      // TODO: 实现状态更新逻辑
      message.success('状态已更新')
    } catch (error) {
      message.error('操作失败')
    }
  }

  const handleDelete = async (record: UGContent) => {
    Modal.confirm({
      title: '确认删除',
      content: '确定要删除这条内容吗？此操作不可撤销。',
      onOk: async () => {
        try {
          // TODO: 实现删除逻辑
          message.success('内容已删除')
        } catch (error) {
          message.error('删除失败')
        }
      }
    })
  }

  const columns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const types = {
          review: { color: 'blue', text: '评论' },
          photo: { color: 'green', text: '照片' },
          article: { color: 'purple', text: '游记' }
        }
        const { color, text } = types[type as keyof typeof types]
        return <Tag color={color}>{text}</Tag>
      }
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: UGContent) => (
        <a onClick={() => {
          setSelectedContent(record)
          setDetailVisible(true)
        }}>{text}</a>
      )
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author'
    },
    {
      title: '营地',
      dataIndex: 'campsite',
      key: 'campsite'
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating?: number) => rating ? <Rate disabled defaultValue={rating} allowHalf /> : '-'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusMap = {
          pending: { color: 'warning', text: '待审核' },
          approved: { color: 'success', text: '已通过' },
          rejected: { color: 'error', text: '已拒绝' }
        }
        const { color, text } = statusMap[status as keyof typeof statusMap]
        return <Tag color={color}>{text}</Tag>
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: UGContent) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedContent(record)
              setDetailVisible(true)
            }}
          >
            查看
          </Button>
          {record.status === 'pending' && (
            <>
              <Button
                type="text"
                icon={<CheckCircleOutlined />}
                className="text-success"
                onClick={() => handleStatusChange(record, 'approved')}
              >
                通过
              </Button>
              <Button
                type="text"
                icon={<StopOutlined />}
                danger
                onClick={() => handleStatusChange(record, 'rejected')}
              >
                拒绝
              </Button>
            </>
          )}
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          >
            删除
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div className="p-6">
      <Card>
        <div className="mb-4">
          <div className="flex justify-between mb-4">
            <Space size="large">
              <Search
                placeholder="搜索内容..."
                onSearch={value => setSearchText(value)}
                style={{ width: 250 }}
              />
              <Select
                placeholder="内容类型"
                style={{ width: 120 }}
                options={[
                  { label: '评论', value: 'review' },
                  { label: '照片', value: 'photo' },
                  { label: '游记', value: 'article' }
                ]}
                value={selectedType}
                onChange={setSelectedType}
                allowClear
              />
              <Select
                placeholder="审核状态"
                style={{ width: 120 }}
                options={[
                  { label: '待审核', value: 'pending' },
                  { label: '已通过', value: 'approved' },
                  { label: '已拒绝', value: 'rejected' }
                ]}
                value={selectedStatus}
                onChange={setSelectedStatus}
                allowClear
              />
            </Space>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={mockData}
          rowKey="id"
          loading={loading}
        />

        <Modal
          title="内容详情"
          open={detailVisible}
          onCancel={() => setDetailVisible(false)}
          width={800}
          footer={null}
        >
          {selectedContent && (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">{selectedContent.title}</h2>
                <Space className="text-gray-500">
                  <span>作者: {selectedContent.author}</span>
                  <span>营地: {selectedContent.campsite}</span>
                  <span>时间: {selectedContent.createdAt}</span>
                </Space>
              </div>

              {selectedContent.rating && (
                <div className="mb-4">
                  <Rate disabled defaultValue={selectedContent.rating} allowHalf />
                </div>
              )}

              <div className="mb-4">
                <p className="whitespace-pre-wrap">{selectedContent.content}</p>
              </div>

              {selectedContent.type === 'photo' && (
                <div className="mb-4">
                  <Image.PreviewGroup>
                    <div className="grid grid-cols-3 gap-2">
                      {/* 这里可以展示照片列表 */}
                      <Image
                        src="https://example.com/photo1.jpg"
                        alt="营地照片"
                      />
                    </div>
                  </Image.PreviewGroup>
                </div>
              )}

              {selectedContent.status === 'pending' && (
                <div className="flex justify-end space-x-2">
                  <Button
                    type="primary"
                    onClick={() => handleStatusChange(selectedContent, 'approved')}
                  >
                    通过审核
                  </Button>
                  <Button
                    danger
                    onClick={() => handleStatusChange(selectedContent, 'rejected')}
                  >
                    拒绝
                  </Button>
                </div>
              )}
            </div>
          )}
        </Modal>
      </Card>
    </div>
  )
}
