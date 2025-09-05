import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f9fafb',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          marginBottom: '1rem' 
        }}>
          404
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#374151', 
          marginBottom: '1rem' 
        }}>
          页面未找到
        </h2>
        <p style={{ 
          color: '#6b7280', 
          marginBottom: '2rem' 
        }}>
          抱歉，您访问的页面不存在。
        </p>
        <Link href="/dashboard">
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            margin: '0 auto'
          }}>
            🏠 返回首页
          </button>
        </Link>
      </div>
    </div>
  )
}