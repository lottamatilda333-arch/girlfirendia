import React from 'react';
import { Search } from 'lucide-react';

const categories = ["All", "Chat", "Voice", "Avatar", "NSFW", "Free"];

const FilterBar = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center'
            }}>
                {/* Search Input */}
                <div className="glass-panel" style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '500px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem'
                }}>
                    <Search size={20} style={{ color: 'var(--text-muted)', marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="Search for your AI companion..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-main)',
                            fontSize: '1rem',
                            width: '100%',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* Categories */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '99px',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                background: activeCategory === cat
                                    ? 'var(--accent-primary)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                                border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
