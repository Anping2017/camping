export default function Merchants() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>商户管理</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <button style={{ 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#2563eb', 
          color: 'white', 
          border: 'none', 
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}>
          + 添加新商户
        </button>
        
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3>商户列表</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>新西兰户外装备店</h4>
              <p>📍 奥克兰，北岛</p>
              <p>📧 outdoor@nz.com</p>
              <p>📱 +64 9 123 4567</p>
              <p>🏪 户外装备、帐篷、睡袋</p>
              <p style={{ color: '#059669' }}>✅ 合作中</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>南岛露营用品</h4>
              <p>📍 基督城，南岛</p>
              <p>📧 camping@south.co.nz</p>
              <p>📱 +64 3 234 5678</p>
              <p>🏪 露营设备、炊具、照明</p>
              <p style={{ color: '#059669' }}>✅ 合作中</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>皇后镇旅游服务</h4>
              <p>📍 皇后镇，南岛</p>
              <p>📧 tours@queenstown.nz</p>
              <p>📱 +64 3 345 6789</p>
              <p>🏪 旅游服务、交通、导游</p>
              <p style={{ color: '#dc2626' }}>❌ 暂停合作</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}