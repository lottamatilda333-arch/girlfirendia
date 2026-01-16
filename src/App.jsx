import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import ComparePage from './pages/ComparePage'
import CandyAIReviewPage from './pages/CandyAIReviewPage'
import GPTGirlfriendReviewPage from './pages/GPTGirlfriendReviewPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import LegalPage from './pages/LegalPage'
import PrivacyPage from './pages/PrivacyPage'
import Footer from './components/Footer'
import { Sparkles } from 'lucide-react'

function App() {
  return (
    <div className="app-container">
      {/* En-tête */}
      <header className="glass-panel" style={{
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1200px',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100
      }}>
        <Link to="/" style={{
          fontWeight: 700,
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: 'inherit'
        }}>
          <Sparkles size={24} className="text-gradient" />
          <span>GFE<span className="text-gradient">Comparateur</span></span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.95rem' }}>Espace Blog</Link>
          <Link to="/" className="btn-primary" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>Découvrir</Link>
        </nav>
      </header>

      {/* Contenu Principal */}
      <main className="container" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/compare/candy-ai-vs-gptgirlfriend" element={<ComparePage />} />
          <Route path="/review/candy-ai" element={<CandyAIReviewPage />} />
          <Route path="/review/gptgirlfriend" element={<GPTGirlfriendReviewPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/confidentialite" element={<PrivacyPage />} />
        </Routes>

        <Footer />
      </main>
    </div>
  )
}

export default App
