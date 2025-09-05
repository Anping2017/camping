export default function Campsites() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>露营地管理</h1>
      
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
          + 添加新露营地
        </button>
        
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '1rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3>露营地列表</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>皇后镇露营地</h4>
              <p>📍 皇后镇，南岛</p>
              <p>🏕️ 50个营位 | 💰 $45/晚</p>
              <p style={{ color: '#059669' }}>✅ 开放中</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>罗托鲁瓦温泉露营地</h4>
              <p>📍 罗托鲁瓦，北岛</p>
              <p>🏕️ 30个营位 | 💰 $35/晚</p>
              <p style={{ color: '#059669' }}>✅ 开放中</p>
            </div>
            
            <div style={{ 
              padding: '1rem', 
              border: '1px solid #e2e8f0', 
              borderRadius: '6px',
              marginBottom: '0.5rem'
            }}>
              <h4>基督城海滨露营地</h4>
              <p>📍 基督城，南岛</p>
              <p>🏕️ 75个营位 | 💰 $40/晚</p>
              <p style={{ color: '#dc2626' }}>❌ 维护中</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}