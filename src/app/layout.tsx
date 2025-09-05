import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '新西兰露营管理平台',
  description: '新西兰露营管理平台 - 极简版本',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <header style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '1rem',
          textAlign: 'center'
        }}>
          <h1>新西兰露营管理平台</h1>
        </header>
        <main>
          {children}
        </main>
        <footer style={{ 
          backgroundColor: '#f3f4f6', 
          padding: '1rem',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <p>© 2024 新西兰露营管理平台 - 极简版本</p>
        </footer>
      </body>
    </html>
  )
}