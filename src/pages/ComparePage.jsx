import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check, X } from 'lucide-react'
import { solutions } from '../data/mockData'

function ComparePage() {
    // Récupérer Candy AI et GPTGirlfriend
    const candyAI = solutions.find(s => s.name === "Candy AI");
    const gptGirlfriend = solutions.find(s => s.name === "GPTGirlfriend");

    const comparisonFeatures = [
        { feature: "Avatars Personnalisables", candyAI: true, gptGirlfriend: false },
        { feature: "Messages Vocaux", candyAI: true, gptGirlfriend: false },
        { feature: "Contenu NSFW", candyAI: true, gptGirlfriend: true },
        { feature: "Mémoire & Contexte", candyAI: true, gptGirlfriend: true },
        { feature: "Intelligence Émotionnelle", candyAI: true, gptGirlfriend: true },
        { feature: "Version Gratuite", candyAI: false, gptGirlfriend: true },
        { feature: "Application Mobile", candyAI: true, gptGirlfriend: false },
        { feature: "Personnages Multiples", candyAI: true, gptGirlfriend: true },
    ];

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Bouton Retour */}
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                transition: 'color 0.2s'
            }}>
                <ArrowLeft size={20} /> Retour à toutes les solutions
            </Link>

            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}>
                    <span className="text-gradient">Candy AI vs GPTGirlfriend</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Comparaison approfondie de deux plateformes de compagnes IA leaders
                </p>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/review/candy-ai" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                        → Lire la review complète de Candy AI
                    </Link>
                    <Link to="/review/gptgirlfriend" style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>
                        → Lire la review complète de GPTGirlfriend
                    </Link>
                </div>
            </div>

            {/* Statistiques Rapides */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem'
            }}>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{candyAI?.rating} ⭐</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Note Candy AI</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{gptGirlfriend?.rating} ⭐</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Note GPTGirlfriend</p>
                </div>
            </div>

            {/* Tableau de Comparaison */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', overflow: 'auto' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    Comparaison des Fonctionnalités
                </h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 600 }}>Fonctionnalité</th>
                            <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>Candy AI</th>
                            <th style={{ padding: '1rem', textAlign: 'center', fontWeight: 600 }}>GPTGirlfriend</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonFeatures.map((item, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{item.feature}</td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    {item.candyAI ? (
                                        <Check size={20} color="#22c55e" />
                                    ) : (
                                        <X size={20} color="#ef4444" />
                                    )}
                                </td>
                                <td style={{ padding: '1rem', textAlign: 'center' }}>
                                    {item.gptGirlfriend ? (
                                        <Check size={20} color="#22c55e" />
                                    ) : (
                                        <X size={20} color="#ef4444" />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Avantages & Inconvénients */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* Candy AI */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Candy AI</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#22c55e', marginBottom: '0.75rem', fontWeight: 600 }}>✅ Avantages</h4>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                            <li>Avatars hautement personnalisables</li>
                            <li>Support des messages vocaux</li>
                            <li>Interactions de qualité premium</li>
                            <li>Application mobile disponible</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#ef4444', marginBottom: '0.75rem', fontWeight: 600 }}>❌ Inconvénients</h4>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                            <li>Pas de version gratuite</li>
                            <li>Prix plus élevé</li>
                        </ul>
                    </div>

                    <a
                        href={candyAI?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none'
                        }}
                    >
                        Essayer Candy AI <ExternalLink size={16} />
                    </a>
                </div>

                {/* GPTGirlfriend */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>GPTGirlfriend</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: '#22c55e', marginBottom: '0.75rem', fontWeight: 600 }}>✅ Avantages</h4>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                            <li>Version gratuite disponible</li>
                            <li>IA émotionnelle puissante</li>
                            <li>Excellent système de mémoire</li>
                            <li>Plus abordable</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#ef4444', marginBottom: '0.75rem', fontWeight: 600 }}>❌ Inconvénients</h4>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                            <li>Pas de messages vocaux</li>
                            <li>Personnalisation d'avatar limitée</li>
                            <li>Pas d'application mobile</li>
                        </ul>
                    </div>

                    <a
                        href={gptGirlfriend?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            marginTop: '1.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none'
                        }}
                    >
                        Essayer GPTGirlfriend <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Verdict Final */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700 }}>
                    🏆 Verdict Final
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    Les deux plateformes offrent d'excellentes expériences de compagnes IA, mais elles répondent à des besoins différents :
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--accent-primary)' }}>Choisissez Candy AI</strong> si vous voulez l'expérience la plus premium avec messages vocaux, avatars hautement personnalisables, et que le prix n'est pas un problème.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    <strong style={{ color: 'var(--accent-secondary)' }}>Choisissez GPTGirlfriend</strong> si vous recherchez une option plus économique avec une version gratuite et une IA conversationnelle puissante.
                </p>
            </div>
        </div>
    )
}

export default ComparePage
