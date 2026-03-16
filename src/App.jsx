import { useState } from 'react'
import articles from './data/articles'
import './App.css'

// 分类配置
const categories = [
  { key: 'thoughts', name: '随想杂谈', icon: '💭', color: '#7c3aed' },
  { key: 'literature', name: '文学常识', icon: '📚', color: '#059669' },
  { key: 'present', name: '活在当下', icon: '🌱', color: '#ea580c' }
]

// 文章卡片组件
function ArticleCard({ article, color }) {
  return (
    <a 
      href={article.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="article-card"
      style={{ '--accent-color': color }}
    >
      <div className="article-date">{article.date}</div>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-summary">{article.summary}</p>
      <span className="article-link">阅读全文 →</span>
    </a>
  )
}

// 分类标签组件
function CategoryTab({ category, isActive, onClick }) {
  return (
    <button
      className={`category-tab ${isActive ? 'active' : ''}`}
      style={{ '--tab-color': category.color }}
      onClick={onClick}
    >
      <span className="tab-icon">{category.icon}</span>
      <span className="tab-name">{category.name}</span>
      <span className="tab-count">{articles[category.key].length}</span>
    </button>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('thoughts')
  
  const currentCategory = categories.find(c => c.key === activeCategory)
  const currentArticles = articles[activeCategory]
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="app">
      {/* 头部 */}
      <header className="header">
        <h1 className="site-title">📖 公众号文章合集</h1>
        <p className="site-desc">随想杂谈 · 文学常识 · 活在当下</p>
      </header>

      {/* 分类标签 */}
      <nav className="category-nav">
        {categories.map(category => (
          <CategoryTab
            key={category.key}
            category={category}
            isActive={activeCategory === category.key}
            onClick={() => setActiveCategory(category.key)}
          />
        ))}
      </nav>

      {/* 文章列表 */}
      <main className="article-list">
        <div className="list-header">
          <h2>
            <span>{currentCategory.icon}</span>
            {currentCategory.name}
          </h2>
          <span className="article-total">共 {currentArticles.length} 篇</span>
        </div>

        <div className="articles-grid">
          {currentArticles.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              color={currentCategory.color}
            />
          ))}
        </div>

        {currentArticles.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">📝</span>
            <p>暂无文章，敬请期待</p>
          </div>
        )}
      </main>

      {/* 底部 */}
      <footer className="footer">
        <p>扫码关注公众号，获取更多精彩内容</p>
        <p className="copyright">© 2026 公众号文章合集</p>
      </footer>
    </div>
  )
}

export default App
