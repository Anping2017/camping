export default function DashboardPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem',
        fontFamily: 'Arial, sans-serif'
      }}>
        仪表盘
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem'
      }}>
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>总用户数</h3>
          <p style={{ fontSize: '2rem', margin: 0, color: '#2563eb', fontWeight: 'bold' }}>1,128</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏪</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>商家数量</h3>
          <p style={{ fontSize: '2rem', margin: 0, color: '#059669', fontWeight: 'bold' }}>28</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏕️</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>营地数量</h3>
          <p style={{ fontSize: '2rem', margin: 0, color: '#dc2626', fontWeight: 'bold' }}>156</p>
        </div>
        
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#374151' }}>UGC内容量</h3>
          <p style={{ fontSize: '2rem', margin: 0, color: '#7c3aed', fontWeight: 'bold' }}>2,367</p>
        </div>
      </div>
    </div>
  )
}