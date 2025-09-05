'use client'

import { Form, Input, Select, InputNumber, Upload, Button, Space, TimePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { Merchant } from '@/types/merchant'
import dayjs from 'dayjs'

const { TextArea } = Input

interface MerchantFormProps {
  initialValues?: Partial<Merchant>
  onSubmit: (values: any) => void
  onCancel: () => void
  loading?: boolean
}

const typeOptions = [
  { label: '个人', value: 'individual' },
  { label: '公司', value: 'company' },
  { label: '合伙企业', value: 'partnership' }
]

const regionOptions = [
  { label: '坎特伯雷', value: 'Canterbury' },
  { label: '奥塔哥', value: 'Otago' },
  { label: '南地', value: 'Southland' }
]

const weekDays = [
  { label: '周一', value: 'monday' },
  { label: '周二', value: 'tuesday' },
  { label: '周三', value: 'wednesday' },
  { label: '周四', value: 'thursday' },
  { label: '周五', value: 'friday' },
  { label: '周六', value: 'saturday' },
  { label: '周日', value: 'sunday' }
]

export default function MerchantForm({ 
  initialValues, 
  onSubmit, 
  onCancel,
  loading 
}: MerchantFormProps) {
  const [form] = Form.useForm()

  const handleSubmit = (values: any) => {
    // 处理营业时间格式
    const businessHours = {} as any
    weekDays.forEach(day => {
      const times = values.businessHours?.[day.value]
      businessHours[day.value] = times ? {
        open: times[0].format('HH:mm'),
        close: times[1].format('HH:mm')
      } : null
    })

    onSubmit({
      ...values,
      businessHours
    })
  }

  // 转换初始营业时间格式
  const initialBusinessHours = {} as any
  if (initialValues?.businessHours) {
    Object.entries(initialValues.businessHours).forEach(([day, hours]) => {
      initialBusinessHours[day] = hours ? [
        dayjs(hours.open, 'HH:mm'),
        dayjs(hours.close, 'HH:mm')
      ] : null
    })
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        ...initialValues,
        businessHours: initialBusinessHours
      }}
      onFinish={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name="businessName"
          label="商家名称"
          rules={[{ required: true, message: '请输入商家名称' }]}
        >
          <Input placeholder="请输入商家名称" />
        </Form.Item>

        <Form.Item
          name="tradingName"
          label="营业名称"
        >
          <Input placeholder="请输入营业名称" />
        </Form.Item>

        <Form.Item
          name="businessNumber"
          label="商业编号"
          rules={[{ required: true, message: '请输入商业编号' }]}
        >
          <Input placeholder="请输入商业编号" />
        </Form.Item>

        <Form.Item
          name="type"
          label="商家类型"
          rules={[{ required: true, message: '请选择商家类型' }]}
        >
          <Select options={typeOptions} placeholder="请选择商家类型" />
        </Form.Item>
      </div>

      <Form.Item
        name="description"
        label="商家描述"
        rules={[{ required: true, message: '请输入商家描述' }]}
      >
        <TextArea rows={4} placeholder="请输入商家描述" />
      </Form.Item>

      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name="email"
          label="电子邮箱"
          rules={[
            { required: true, message: '请输入电子邮箱' },
            { type: 'email', message: '请输入有效的电子邮箱' }
          ]}
        >
          <Input placeholder="请输入电子邮箱" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="联系电话"
          rules={[{ required: true, message: '请输入联系电话' }]}
        >
          <Input placeholder="请输入联系电话" />
        </Form.Item>
      </div>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold mb-4">地址信息</h3>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name={['address', 'street']}
            label="街道地址"
            rules={[{ required: true, message: '请输入街道地址' }]}
          >
            <Input placeholder="请输入街道地址" />
          </Form.Item>

          <Form.Item
            name={['address', 'city']}
            label="城市"
            rules={[{ required: true, message: '请输入城市' }]}
          >
            <Input placeholder="请输入城市" />
          </Form.Item>

          <Form.Item
            name={['address', 'region']}
            label="地区"
            rules={[{ required: true, message: '请选择地区' }]}
          >
            <Select options={regionOptions} placeholder="请选择地区" />
          </Form.Item>

          <Form.Item
            name={['address', 'postcode']}
            label="邮编"
            rules={[{ required: true, message: '请输入邮编' }]}
          >
            <Input placeholder="请输入邮编" />
          </Form.Item>
        </div>
      </div>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold mb-4">联系人信息</h3>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name={['contactPerson', 'name']}
            label="姓名"
            rules={[{ required: true, message: '请输入联系人姓名' }]}
          >
            <Input placeholder="请输入联系人姓名" />
          </Form.Item>

          <Form.Item
            name={['contactPerson', 'position']}
            label="职位"
            rules={[{ required: true, message: '请输入联系人职位' }]}
          >
            <Input placeholder="请输入联系人职位" />
          </Form.Item>

          <Form.Item
            name={['contactPerson', 'phone']}
            label="电话"
            rules={[{ required: true, message: '请输入联系人电话' }]}
          >
            <Input placeholder="请输入联系人电话" />
          </Form.Item>

          <Form.Item
            name={['contactPerson', 'email']}
            label="邮箱"
            rules={[
              { required: true, message: '请输入联系人邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input placeholder="请输入联系人邮箱" />
          </Form.Item>
        </div>
      </div>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold mb-4">银行账户信息</h3>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name={['bankAccount', 'accountName']}
            label="账户名称"
            rules={[{ required: true, message: '请输入账户名称' }]}
          >
            <Input placeholder="请输入账户名称" />
          </Form.Item>

          <Form.Item
            name={['bankAccount', 'bankName']}
            label="开户行"
            rules={[{ required: true, message: '请输入开户行' }]}
          >
            <Input placeholder="请输入开户行" />
          </Form.Item>

          <Form.Item
            name={['bankAccount', 'accountNumber']}
            label="账号"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input placeholder="请输入账号" />
          </Form.Item>
        </div>
      </div>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-bold mb-4">营业时间</h3>
        <div className="grid grid-cols-1 gap-4">
          {weekDays.map(day => (
            <Form.Item
              key={day.value}
              name={['businessHours', day.value]}
              label={day.label}
            >
              <TimePicker.RangePicker
                format="HH:mm"
                placeholder={['开始时间', '结束时间']}
              />
            </Form.Item>
          ))}
        </div>
      </div>

      <Form.Item
        name="commissionRate"
        label="佣金率"
        rules={[{ required: true, message: '请输入佣金率' }]}
      >
        <InputNumber
          min={0}
          max={1}
          step={0.01}
          style={{ width: '100%' }}
          formatter={value => `${(Number(value) * 100).toFixed(1)}%`}
          parser={value => (parseFloat(value?.replace('%', '') || '0') / 100)}
        />
      </Form.Item>

      <Form.Item
        name="documents"
        label="证件文件"
      >
        <Upload
          listType="picture-card"
          multiple
          beforeUpload={() => false}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传文件</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            保存
          </Button>
          <Button onClick={onCancel}>取消</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
