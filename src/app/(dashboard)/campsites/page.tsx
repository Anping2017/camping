'use client'

import { useState } from 'react'
import { 
  Table, 
  Card, 
  Button, 
  Input, 
  Space, 
  Tag, 
  Select, 
  Modal, 
  Rate,
  Image,
  Tooltip,
  Badge 
} from 'antd'
import { 
  SearchOutlined, 
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  EnvironmentOutlined 
} from '@ant-design/icons'
import type { Campsite } from '@/types/campsite'

const { Search } = Input

// 模拟数据
const mockCampsites: Campsite[] = [
  {
    id: '1',
    name: 'Lake Tekapo Holiday Park',
    description: '位于特卡波湖畔的度假营地，提供完善的设施和绝美的湖景。',
    type: 'holiday_park',
    location: {
      latitude: -44.0019,
      longitude: 170.4775,
      address: '2 Lakeside Drive, Lake Tekapo',
      region: 'Canterbury'
    },
    price: {
      amount: 45,
      currency: 'NZD',
      unit: 'per_night'
    },
    capacity: {
      total: 100,
      available: 65
    },
    amenities: [
      { id: '1', name: '淋浴', icon: 'shower' },
      { id: '2', name: '厨房', icon: 'kitchen' },
      { id: '3', name: 'WiFi', icon: 'wifi' }
    ],
    images: [
      'https://example.com/image1.jpg'
    ],
    rating: 4.5,
    reviewCount: 128,
    status: 'active',
    merchantId: 'merchant1',
    createdAt: '2024-01-01',
    updatedAt: '2024-02-01'
  },
  // 可以添加更多模拟数据...
]

const typeOptions = [
  { label: 'DOC营地', value: 'doc' },
  { label: '假日公园', value: 'holiday_park' },
  { label: '自由露营', value: 'freedom' }
]

const statusOptions = [
  { label: '运营中', value: 'active' },
  { label: '已关闭', value: 'inactive' },
  { label: '维护中', value: 'maintenance' }
]

const regionOptions = [
  { label: '坎特伯雷', value: 'Canterbury' },
  { label: '奥塔哥', value: 'Otago' },
  { label: '南地', value: 'Southland' }
]

export default function CampsitesPage() {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>()
  const [selectedRegion, setSelectedRegion] = useState<string>()
  const [selectedStatus, setSelectedStatus] = useState<string>()
  const [detailVisible, setDetailVisible] = useState(false)
  const [selectedCampsite, setSelectedCampsite] = useState<Campsite | null>(null)

  const showDetail = (record: Campsite) => {
    setSelectedCampsite(record)
    setDetailVisible(true)
  }

  const columns = [
    {
      title: '营地名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Campsite) => (
        <Space>
          <a onClick={() => showDetail(record)}>{text}</a>
          {record.rating >= 4.5 && (
            <Tooltip title="高评分营地">
              <Badge status="success" />
            </Tooltip>
          )}
        </Space>
      )
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const option = typeOptions.find(o => o.value === type)
        return <Tag>{option?.label || type}</Tag>
      }
    },
    {
      title: '地区',
      dataIndex: ['location', 'region'],
      key: 'region',
    },
    {
      title: '价格',
      dataIndex: ['price', 'amount'],
      key: 'price',
      render: (amount: number, record: Campsite) => (
        `${amount} ${record.price.currency}/${record.price.unit === 'per_night' ? '晚' : '人'}`
      )
    },
    {
      title: '容量',
      key: 'capacity',
      render: (_, record: Campsite) => (
        <Tooltip title={`总容量: ${record.capacity.total}`}>
          <span>{record.capacity.available}/{record.capacity.total}</span>
        </Tooltip>
      )
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating: number, record: Campsite) => (
        <Space>
          <Rate disabled defaultValue={rating} allowHalf />
          <span>({record.reviewCount})</span>
        </Space>
      )
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const colors = {
          active: 'green',
          inactive: 'red',
          maintenance: 'orange'
        }
        const labels = {
          active: '运营中',
          inactive: '已关闭',
          maintenance: '维护中'
        }
        return (
          <Tag color={colors[status as keyof typeof colors]}>
            {labels[status as keyof typeof labels]}
          </Tag>
        )
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Campsite) => (
        <Space size="middle">
          <Button 
            type="text" 
            icon={<EyeOutlined />}
            onClick={() => showDetail(record)}
          >
            查看
          </Button>
          <Button 
            type="text" 
            icon={<EditOutlined />}
          >
            编辑
          </Button>
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />}
          >
            删除
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div>
      <Card>
        <div className="mb-4">
          <div className="flex justify-between mb-4">
            <Space size="large">
              <Search
                placeholder="搜索营地..."
                onSearch={value => setSearchText(value)}
                style={{ width: 250 }}
              />
              <Select
                placeholder="营地类型"
                style={{ width: 120 }}
                options={typeOptions}
                value={selectedType}
                onChange={setSelectedType}
                allowClear
              />
              <Select
                placeholder="地区"
                style={{ width: 120 }}
                options={regionOptions}
                value={selectedRegion}
                onChange={setSelectedRegion}
                allowClear
              />
              <Select
                placeholder="状态"
                style={{ width: 120 }}
                options={statusOptions}
                value={selectedStatus}
                onChange={setSelectedStatus}
                allowClear
              />
            </Space>
            <Button type="primary" icon={<PlusOutlined />}>
              添加营地
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={mockCampsites}
          rowKey="id"
          loading={loading}
        />
      </Card>

      <Modal
        title="营地详情"
        open={detailVisible}
        onCancel={() => setDetailVisible(false)}
        width={800}
        footer={null}
      >
        {selectedCampsite && (
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">{selectedCampsite.name}</h2>
              <Space>
                <Tag color="blue">{typeOptions.find(o => o.value === selectedCampsite.type)?.label}</Tag>
                <span className="text-gray-500">
                  <EnvironmentOutlined /> {selectedCampsite.location.address}
                </span>
              </Space>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">{selectedCampsite.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="font-bold mb-2">基本信息</h3>
                <p>价格: {selectedCampsite.price.amount} {selectedCampsite.price.currency}/晚</p>
                <p>容量: {selectedCampsite.capacity.available}/{selectedCampsite.capacity.total}</p>
                <p>评分: <Rate disabled defaultValue={selectedCampsite.rating} allowHalf /> ({selectedCampsite.reviewCount}条评价)</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">设施</h3>
                <Space wrap>
                  {selectedCampsite.amenities.map(amenity => (
                    <Tag key={amenity.id}>{amenity.name}</Tag>
                  ))}
                </Space>
              </div>
            </div>

            {selectedCampsite.images.length > 0 && (
              <div>
                <h3 className="font-bold mb-2">营地图片</h3>
                <Image.PreviewGroup>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedCampsite.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt={`营地图片 ${index + 1}`}
                        style={{ objectFit: 'cover', height: 150 }}
                      />
                    ))}
                  </div>
                </Image.PreviewGroup>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}
