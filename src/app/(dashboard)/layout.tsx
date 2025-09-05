'use client'

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  DashboardOutlined,
  TeamOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const { Header, Content, Sider } = Layout

const menuItems = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: '仪表盘',
    path: '/dashboard',
  },
  {
    key: 'users',
    icon: <TeamOutlined />,
    label: '用户管理',
    path: '/users',
  },
  {
    key: 'merchants',
    icon: <ShopOutlined />,
    label: '商家管理',
    path: '/merchants',
  },
  {
    key: 'campsites',
    icon: <EnvironmentOutlined />,
    label: '营地管理',
    path: '/campsites',
  },
  {
    key: 'content',
    icon: <FileTextOutlined />,
    label: 'UGC管理',
    path: '/content',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: '系统设置',
    path: '/settings',
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="p-4">
          <h1 className="text-white text-lg">NZ Camping</h1>
        </div>
        <Menu
          theme="dark"
          selectedKeys={[pathname.split('/')[1] || 'dashboard']}
          mode="inline"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0" />
        <Content className="m-4">
          <div className="p-6 bg-white rounded">{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}
