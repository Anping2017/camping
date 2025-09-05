'use client'

import { Form, Input, Select, InputNumber, Upload, Button, Space } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import type { Campsite } from '@/types/campsite'

const { TextArea } = Input

interface CampsiteFormProps {
  initialValues?: Partial<Campsite>
  onSubmit: (values: any) => void
  onCancel: () => void
  loading?: boolean
}

const typeOptions = [
  { label: 'DOC营地', value: 'doc' },
  { label: '假日公园', value: 'holiday_park' },
  { label: '自由露营', value: 'freedom' }
]

const regionOptions = [
  { label: '坎特伯雷', value: 'Canterbury' },
  { label: '奥塔哥', value: 'Otago' },
  { label: '南地', value: 'Southland' }
]

const amenityOptions = [
  { label: '淋浴', value: 'shower' },
  { label: '厨房', value: 'kitchen' },
  { label: 'WiFi', value: 'wifi' },
  { label: '停车场', value: 'parking' },
  { label: '烧烤设施', value: 'bbq' },
  { label: '洗衣设施', value: 'laundry' }
]

export default function CampsiteForm({ 
  initialValues, 
  onSubmit, 
  onCancel,
  loading 
}: CampsiteFormProps) {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={onSubmit}
    >
      <Form.Item
        name="name"
        label="营地名称"
        rules={[{ required: true, message: '请输入营地名称' }]}
      >
        <Input placeholder="请输入营地名称" />
      </Form.Item>

      <Form.Item
        name="type"
        label="营地类型"
        rules={[{ required: true, message: '请选择营地类型' }]}
      >
        <Select options={typeOptions} placeholder="请选择营地类型" />
      </Form.Item>

      <Form.Item
        name="description"
        label="营地描述"
        rules={[{ required: true, message: '请输入营地描述' }]}
      >
        <TextArea rows={4} placeholder="请输入营地描述" />
      </Form.Item>

      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name={['location', 'region']}
          label="所在地区"
          rules={[{ required: true, message: '请选择所在地区' }]}
        >
          <Select options={regionOptions} placeholder="请选择所在地区" />
        </Form.Item>

        <Form.Item
          name={['location', 'address']}
          label="详细地址"
          rules={[{ required: true, message: '请输入详细地址' }]}
        >
          <Input placeholder="请输入详细地址" />
        </Form.Item>

        <Form.Item
          name={['location', 'latitude']}
          label="纬度"
          rules={[{ required: true, message: '请输入纬度' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="请输入纬度" />
        </Form.Item>

        <Form.Item
          name={['location', 'longitude']}
          label="经度"
          rules={[{ required: true, message: '请输入经度' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="请输入经度" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Form.Item
          name={['price', 'amount']}
          label="价格"
          rules={[{ required: true, message: '请输入价格' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="请输入价格" />
        </Form.Item>

        <Form.Item
          name={['price', 'unit']}
          label="计价单位"
          rules={[{ required: true, message: '请选择计价单位' }]}
        >
          <Select
            options={[
              { label: '每晚', value: 'per_night' },
              { label: '每人', value: 'per_person' }
            ]}
            placeholder="请选择计价单位"
          />
        </Form.Item>

        <Form.Item
          name={['capacity', 'total']}
          label="总容量"
          rules={[{ required: true, message: '请输入总容量' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="请输入总容量" />
        </Form.Item>

        <Form.Item
          name={['capacity', 'available']}
          label="可用容量"
          rules={[{ required: true, message: '请输入可用容量' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="请输入可用容量" />
        </Form.Item>
      </div>

      <Form.Item
        name="amenities"
        label="设施"
        rules={[{ required: true, message: '请选择设施' }]}
      >
        <Select
          mode="multiple"
          options={amenityOptions}
          placeholder="请选择设施"
        />
      </Form.Item>

      <Form.Item
        name="images"
        label="营地图片"
      >
        <Upload
          listType="picture-card"
          multiple
          beforeUpload={() => false}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传图片</div>
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
