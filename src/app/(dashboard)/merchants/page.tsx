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
  Descriptions,
  Badge,
  Tooltip,
  Typography
} from 'antd'
import { 
  SearchOutlined, 
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import type { Merchant } from '@/types/merchant'
import MerchantForm from './components/MerchantForm'

const { Search } = Input
const { Text } = Typography

// 模拟数据
const mockMerchants: Merchant[] = [
  {
    id: '1',
    businessName: 'Lake Tekapo Holiday Park Ltd',
    tradingName: 'Tekapo Camping',
    businessNumber: '9429033828347',
    type: 'company',
    description: '位于特卡波湖畔的度假营地运营商，提供优质的露营体验。',
    email: 'info@tekapocamping.co.nz',
    phone: '+64 3 123 4567',
    address: {
      street: '2 Lakeside Drive',
      city: 'Lake Tekapo',
      region: 'Canterbury',
      postcode: '7945'
    },
    businessHours: {
      monday: { open: '08:00', close: '18:00' },
      tuesday: { open: '08:00', close: '18:00' },
      wednesday: { open: '08:00', close: '18:00' },
      thursday: { open: '08:00', close: '18:00' },
      friday: { open: '08:00', close: '18:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '09:00', close: '17:00' }
    },
    contactPerson: {
      name: 'John Smith',
      position: '营地经理',
      phone: '+64 21 123 4567',
      email: 'john@tekapocamping.co.nz'
    },
    bankAccount: {
      accountName: 'Lake Tekapo Holiday Park Ltd',
      accountNumber: '12-3456-7890123-00',
      bankName: 'ANZ Bank'
    },
    documents: {
      businessCertificate: 'certificate.pdf',
      insurancePolicy: 'insurance.pdf'
    },
    campsites: ['camp1', 'camp2'],
    status: 'active',
    verificationStatus: 'verified',
    commissionRate: 0.15,
    createdAt: '2024-01-01',
    updatedAt: '2024-02-01'
  }
]

const typeOptions = [
  { label: '个人', value: 'individual' },
  { label: '公司', value: 'company' },
  { label: '合伙企业', value: 'partnership' }
]

const statusOptions = [
  { label: '待审核', value: 'pending' },
  { label: '运营中', value: 'active' },
  { label: '已暂停', value: 'suspended' },
  { label: '已终止', value: 'terminated' }
]

const verificationStatusOptions = [
  { label: '未验证', value: 'unverified' },
  { label: '审核中', value: 'in_review' },
  { label: '已验证', value: 'verified' },
  { label: '已拒绝', value: 'rejected' }
]

export default function MerchantsPage() {
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>()
  const [selectedStatus, setSelectedStatus] = useState<string>()
  const [selectedVerification, setSelectedVerification] = useState<string>()
  const [detailVisible, setDetailVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null)

  const showDetail = (record: Merchant) => {
    setSelectedMerchant(record)
    setDetailVisible(true)
  }

  const showForm = (record?: Merchant) => {
    setSelectedMerchant(record || null)
    setFormVisible(true)
  }

  const handleFormSubmit = async (values: any) => {
    console.log('Form values:', values)
    // TODO: 实现表单提交逻辑
    setFormVisible(false)
  }

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { status: 'warning', text: '待审核' },
      active: { status: 'success', text: '运营中' },
      suspended: { status: 'error', text: '已暂停' },
      terminated: { status: 'default', text: '已终止' }
    }
    const { status: badgeStatus, text } = statusMap[status as keyof typeof statusMap]
    return <Badge status={badgeStatus as any} text={text} />
  }

  const getVerificationBadge = (status: string) => {
    const statusMap = {
      unverified: { icon: <ExclamationCircleOutlined className="text-warning" />, text: '未验证' },
      in_review: { icon: <ExclamationCircleOutlined className="text-warning" />, text: '审核中' },
      verified: { icon: <CheckCircleOutlined className="text-success" />, text: '已验证' },
      rejected: { icon: <CloseCircleOutlined className="text-error" />, text: '已拒绝' }
    }
    const { icon, text } = statusMap[status as keyof typeof statusMap]
    return (
      <Space>
        {icon}
        <span>{text}</span>
      </Space>
    )
  }

  const columns = [
    {
      title: '商家名称',
      dataIndex: 'businessName',
      key: 'businessName',
      render: (text: string, record: Merchant) => (
        <Space>
          <a onClick={() => showDetail(record)}>{text}</a>
          {record.verificationStatus === 'verified' && (
            <Tooltip title="已验证商家">
              <CheckCircleOutlined className="text-success" />
            </Tooltip>
          )}
        </Space>
      )
    },
    {
      title: '商家类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => {
        const option = typeOptions.find(o => o.value === type)
        return <Tag>{option?.label || type}</Tag>
      }
    },
    {
      title: '联系人',
      dataIndex: ['contactPerson', 'name'],
      key: 'contactPerson',
      render: (_: string, record: Merchant) => (
        <Space direction="vertical" size="small">
          <Text>{record.contactPerson.name}</Text>
          <Text type="secondary" className="text-sm">{record.contactPerson.position}</Text>
        </Space>
      )
    },
    {
      title: '营地数量',
      dataIndex: 'campsites',
      key: 'campsites',
      render: (campsites: string[]) => campsites.length
    },
    {
      title: '佣金率',
      dataIndex: 'commissionRate',
      key: 'commissionRate',
      render: (rate: number) => `${(rate * 100).toFixed(1)}%`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => getStatusBadge(status)
    },
    {
      title: '验证状态',
      dataIndex: 'verificationStatus',
      key: 'verificationStatus',
      render: (status: string) => getVerificationBadge(status)
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: Merchant) => (
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
            onClick={() => showForm(record)}
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
                placeholder="搜索商家..."
                onSearch={value => setSearchText(value)}
                style={{ width: 250 }}
              />
              <Select
                placeholder="商家类型"
                style={{ width: 120 }}
                options={typeOptions}
                value={selectedType}
                onChange={setSelectedType}
                allowClear
              />
              <Select
                placeholder="运营状态"
                style={{ width: 120 }}
                options={statusOptions}
                value={selectedStatus}
                onChange={setSelectedStatus}
                allowClear
              />
              <Select
                placeholder="验证状态"
                style={{ width: 120 }}
                options={verificationStatusOptions}
                value={selectedVerification}
                onChange={setSelectedVerification}
                allowClear
              />
            </Space>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={() => showForm()}
            >
              添加商家
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={mockMerchants}
          rowKey="id"
          loading={loading}
        />
      </Card>

      <Modal
        title="商家详情"
        open={detailVisible}
        onCancel={() => setDetailVisible(false)}
        width={800}
        footer={null}
      >
        {selectedMerchant && (
          <div>
            <Descriptions
              title="基本信息"
              bordered
              column={2}
              className="mb-6"
            >
              <Descriptions.Item label="商家名称">{selectedMerchant.businessName}</Descriptions.Item>
              <Descriptions.Item label="营业名称">{selectedMerchant.tradingName}</Descriptions.Item>
              <Descriptions.Item label="商业编号">{selectedMerchant.businessNumber}</Descriptions.Item>
              <Descriptions.Item label="商家类型">
                {typeOptions.find(o => o.value === selectedMerchant.type)?.label}
              </Descriptions.Item>
              <Descriptions.Item label="状态" span={2}>
                {getStatusBadge(selectedMerchant.status)}
              </Descriptions.Item>
              <Descriptions.Item label="验证状态" span={2}>
                {getVerificationBadge(selectedMerchant.verificationStatus)}
              </Descriptions.Item>
              <Descriptions.Item label="佣金率">
                {(selectedMerchant.commissionRate * 100).toFixed(1)}%
              </Descriptions.Item>
              <Descriptions.Item label="营地数量">
                {selectedMerchant.campsites.length}
              </Descriptions.Item>
            </Descriptions>

            <Descriptions
              title="联系信息"
              bordered
              column={2}
              className="mb-6"
            >
              <Descriptions.Item label="联系人">{selectedMerchant.contactPerson.name}</Descriptions.Item>
              <Descriptions.Item label="职位">{selectedMerchant.contactPerson.position}</Descriptions.Item>
              <Descriptions.Item label="电话">{selectedMerchant.contactPerson.phone}</Descriptions.Item>
              <Descriptions.Item label="邮箱">{selectedMerchant.contactPerson.email}</Descriptions.Item>
              <Descriptions.Item label="地址" span={2}>
                {`${selectedMerchant.address.street}, ${selectedMerchant.address.city}, ${selectedMerchant.address.region} ${selectedMerchant.address.postcode}`}
              </Descriptions.Item>
            </Descriptions>

            <Descriptions
              title="银行账户"
              bordered
              column={1}
              className="mb-6"
            >
              <Descriptions.Item label="账户名称">{selectedMerchant.bankAccount.accountName}</Descriptions.Item>
              <Descriptions.Item label="账号">{selectedMerchant.bankAccount.accountNumber}</Descriptions.Item>
              <Descriptions.Item label="开户行">{selectedMerchant.bankAccount.bankName}</Descriptions.Item>
            </Descriptions>

            <Descriptions
              title="营业时间"
              bordered
              column={1}
            >
              {Object.entries(selectedMerchant.businessHours).map(([day, hours]) => (
                <Descriptions.Item key={day} label={day.charAt(0).toUpperCase() + day.slice(1)}>
                  {hours ? `${hours.open} - ${hours.close}` : '休息'}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </div>
        )}
      </Modal>

      <Modal
        title={selectedMerchant ? "编辑商家" : "添加商家"}
        open={formVisible}
        onCancel={() => setFormVisible(false)}
        width={800}
        footer={null}
      >
        <MerchantForm
          initialValues={selectedMerchant}
          onSubmit={handleFormSubmit}
          onCancel={() => setFormVisible(false)}
        />
      </Modal>
    </div>
  )
}
