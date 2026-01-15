import { useState, useMemo } from 'react'
import './index.css'
import FilterBar from './components/FilterBar'
import ResultGrid from './components/ResultGrid'
import { solutions } from './data/mockData'
import { Sparkles } from 'lucide-react'

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSolutions = useMemo(() => {
    return solutions.filter(solution => {
      // Category Filter
      if (activeCategory !== "All") {
        if (!solution.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())) {
          return false;
        }
      }

      // Search Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          solution.name.toLowerCase().includes(query) ||
          solution.description.toLowerCase().includes(query) ||
          solution.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="app-container">
      {/* Header */}
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
        <div style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={24} className="text-gradient" />
          <span>GFE<span className="text-gradient">Comparator</span></span>
        </div>
        <nav>
          <button className="btn-primary">Explore</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container" style={{ paddingTop: '140px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', margin: '0 0 4rem 0' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.1,
            letterSpacing: '-2px'
          }}>
            Find Your Perfect <br />
            <span className="text-gradient">AI Companion</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Compare the best Girlfriend Experience solutions. <br />Powered by advanced AI models.
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Results */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
            Showing {filteredSolutions.length} results
          </div>

          {filteredSolutions.length > 0 ? (
            <ResultGrid solutions={filteredSolutions} />
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem',
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '20px'
            }}>
              No companions found matching your criteria.
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: 'auto',
          borderTop: '1px solid var(--glass-border)',
          padding: '2rem 0',
          color: 'var(--text-muted)',
          textAlign: 'center',
          fontSize: '0.9rem'
        }}>
          &copy; 2026 GFE Comparator. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
