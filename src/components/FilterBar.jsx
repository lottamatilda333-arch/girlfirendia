import React from 'react';
import { Search } from 'lucide-react';

const categories = ["Tous", "NSFW", "Girlfriend"];

const FilterBar = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center'
            }}>
                {/* Barre de Recherche */}
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
                        placeholder="Recherchez votre compagne IA..."
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

                {/* Catégories supprimées à la demande de l'utilisateur */}
            </div>
        </div>
    );
};

export default FilterBar;
