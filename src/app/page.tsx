export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>新西兰露营管理平台</h1>
      <p>欢迎使用新西兰露营管理平台！</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>功能模块</h2>
        <ul>
          <li>🏕️ 露营地管理</li>
          <li>👥 用户管理</li>
          <li>🏪 商户管理</li>
          <li>📊 数据统计</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>快速开始</h3>
        <p>这是一个极简版本的露营管理平台，专注于核心功能。</p>
        <p>✅ 已移除复杂依赖</p>
        <p>✅ 简化了项目结构</p>
        <p>✅ 可以快速部署上线</p>
      </div>
    </div>
  )
}