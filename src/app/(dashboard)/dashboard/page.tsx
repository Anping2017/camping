export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>仪表板</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3>露营地</h3>
          <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#2563eb' }}>12</p>
          <p>活跃露营地数量</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3>用户</h3>
          <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#059669' }}>156</p>
          <p>注册用户数量</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3>商户</h3>
          <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#dc2626' }}>8</p>
          <p>合作商户数量</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <h3>预订</h3>
          <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#7c3aed' }}>89</p>
          <p>本月预订数量</p>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>快速操作</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#2563eb', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            添加露营地
          </button>
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#059669', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            查看用户
          </button>
          <button style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#dc2626', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            管理商户
          </button>
        </div>
      </div>
    </div>
  )
}