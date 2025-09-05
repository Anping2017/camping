export default function Loading() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '1rem'
        }}>
          ⏳
        </div>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>加载中...</p>
      </div>
    </div>
  )
}