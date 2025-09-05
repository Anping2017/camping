export default function Users() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>用户管理</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3>用户列表</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>张三</h4>
              <p>📧 zhang@example.com</p>
              <p>📱 +64 21 123 4567</p>
              <p>📅 注册时间: 2024-01-15</p>
              <p style={{ color: '#059669' }}>✅ 活跃用户</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>李四</h4>
              <p>📧 li@example.com</p>
              <p>📱 +64 21 234 5678</p>
              <p>📅 注册时间: 2024-02-20</p>
              <p style={{ color: '#059669' }}>✅ 活跃用户</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>王五</h4>
              <p>📧 wang@example.com</p>
              <p>📱 +64 21 345 6789</p>
              <p>📅 注册时间: 2024-03-10</p>
              <p style={{ color: '#6b7280' }}>⏸️ 非活跃</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}