export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <aside style={{ 
        width: '250px', 
        backgroundColor: '#1f2937', 
        color: 'white',
        padding: '1rem'
      }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/dashboard" style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '0.5rem',
                borderRadius: '4px',
                backgroundColor: '#374151'
              }}>
                📊 仪表板
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/campsites" style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '0.5rem',
                borderRadius: '4px'
              }}>
                🏕️ 露营地
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/users" style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '0.5rem',
                borderRadius: '4px'
              }}>
                👥 用户管理
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="/merchants" style={{ 
                color: 'white', 
                textDecoration: 'none',
                display: 'block',
                padding: '0.5rem',
                borderRadius: '4px'
              }}>
                🏪 商户管理
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      {/* 主内容区 */}
      <main style={{ flex: 1, backgroundColor: '#f9fafb' }}>
        {children}
      </main>
    </div>
  )
}