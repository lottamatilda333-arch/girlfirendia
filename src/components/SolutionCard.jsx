import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Heart } from 'lucide-react';

const SolutionCard = ({ solution }) => {
    return (
        <div className="glass-panel" style={{
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ position: 'relative', height: '200px' }}>
                <img
                    src={solution.image}
                    alt={solution.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'rgba(0,0,0,0.6)',
                    padding: '4px 8px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    {solution.rating}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: solution.price === 'Gratuit' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                    color: solution.price === 'Gratuit' ? '#4ade80' : '#c4b5fd',
                    border: `1px solid ${solution.price === 'Gratuit' ? '#22c55e' : '#8b5cf6'}`,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                }}>
                    {solution.price}
                </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{solution.name}</h3>
                    <button style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>
                        <Heart size={20} />
                    </button>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
                    {solution.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {solution.tags.map((tag, i) => (
                        <span key={i} style={{
                            fontSize: '0.75rem',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            color: 'var(--text-muted)'
                        }}>
                            #{tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                    <a
                        href={solution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            padding: '12px 20px',
                            fontSize: '0.95rem'
                        }}
                    >
                        Découvrir cette expérience
                    </a>

                    <Link
                        to={`/review/${solution.id === 1 ? 'candy-ai' : 'gptgirlfriend'}`}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            borderRadius: '99px',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'var(--text-muted)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        📖 Lire l'article de témoignage
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default SolutionCard;
