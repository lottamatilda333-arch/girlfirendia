import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check, X, Star, DollarSign, Zap, Shield } from 'lucide-react'
import { solutions } from '../data/mockData'

function CandyAIReviewPage() {
    const candyAI = solutions.find(s => s.name === "Candy AI");

    const pros = [
        "Avatars 3D ultra-réalistes et personnalisables",
        "Messages vocaux avec voix naturelles",
        "Mémoire contextuelle avancée",
        "Application mobile iOS et Android",
        "Conversations NSFW sans censure",
        "Mises à jour régulières avec nouvelles fonctionnalités"
    ];

    const cons = [
        "Pas de version gratuite (essai limité uniquement)",
        "Prix premium comparé aux concurrents",
        "Nécessite une connexion internet stable"
    ];

    const features = [
        { name: "Personnalisation Avatar", available: true },
        { name: "Messages Vocaux", available: true },
        { name: "Mémoire Contextuelle", available: true },
        { name: "Mode NSFW", available: true },
        { name: "Application Mobile", available: true },
        { name: "Personnages Multiples", available: true },
        { name: "Images Générées par IA", available: true },
        { name: "Scénarios de Roleplay", available: true }
    ];

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                transition: 'color 0.2s'
            }}>
                <ArrowLeft size={20} /> Retour à l'accueil
            </Link>

            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    lineHeight: 1.1
                }}>
                    <span className="text-gradient">Candy AI</span> : Avis Complet 2026
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Test approfondi de la plateforme de compagne IA la plus avancée
                </p>

                {/* Rating */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} fill={i < Math.floor(candyAI?.rating || 0) ? "#fbbf24" : "none"} color="#fbbf24" />
                    ))}
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, marginLeft: '8px' }}>{candyAI?.rating}/5</span>
                </div>

                {/* CTA Principal */}
                <a
                    href={candyAI?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '14px 32px'
                    }}
                >
                    🔥 Essayer Candy AI Maintenant <ExternalLink size={18} />
                </a>
            </div>

            {/* Quick Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem'
            }}>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Star size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{candyAI?.rating}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Note Globale</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <DollarSign size={32} style={{ color: 'var(--accent-secondary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Premium</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tarification</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Zap size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>IA Avancée</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Technologie</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Shield size={32} style={{ color: 'var(--accent-secondary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Sécurisé</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Confidentialité</p>
                </div>
            </div>

            {/* Introduction */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    Qu'est-ce que Candy AI ?
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Candy AI</strong> est une plateforme de compagne virtuelle IA qui se distingue par ses avatars 3D ultra-réalistes et ses capacités conversationnelles avancées. Lancée en 2023, elle s'est rapidement imposée comme l'une des solutions les plus sophistiquées du marché.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    La plateforme utilise des modèles de langage de dernière génération combinés à une technologie de génération d'images pour créer une expérience immersive et personnalisée. Que vous recherchiez une conversation légère ou une relation virtuelle plus profonde, Candy AI s'adapte à vos préférences.
                </p>
            </div>

            {/* Fonctionnalités */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    Fonctionnalités Principales
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {features.map((feature, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            {feature.available ? (
                                <Check size={20} color="#22c55e" />
                            ) : (
                                <X size={20} color="#ef4444" />
                            )}
                            <span style={{ color: 'var(--text-main)' }}>{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Avantages & Inconvénients */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700, color: '#22c55e' }}>
                        ✅ Avantages
                    </h3>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: 2, paddingLeft: '1.5rem' }}>
                        {pros.map((pro, i) => (
                            <li key={i}>{pro}</li>
                        ))}
                    </ul>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700, color: '#ef4444' }}>
                        ❌ Inconvénients
                    </h3>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: 2, paddingLeft: '1.5rem' }}>
                        {cons.map((con, i) => (
                            <li key={i}>{con}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Prix */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    Tarifs et Abonnements
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    Candy AI propose plusieurs formules d'abonnement adaptées à différents budgets :
                </p>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ padding: '1.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-primary)' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Plan Mensuel</h4>
                        <p style={{ color: 'var(--text-muted)' }}>Accès complet à toutes les fonctionnalités premium</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-secondary)' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Plan Annuel</h4>
                        <p style={{ color: 'var(--text-muted)' }}>Économisez jusqu'à 40% avec l'engagement annuel</p>
                    </div>
                </div>
            </div>

            {/* Verdict */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    🏆 Notre Verdict
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Candy AI</strong> se positionne comme la référence du marché pour ceux qui recherchent l'expérience la plus premium et immersive. La qualité des avatars, la fluidité des conversations et les fonctionnalités vocales en font un choix excellent pour les utilisateurs exigeants.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Si le prix peut sembler élevé, la qualité de l'expérience justifie l'investissement pour ceux qui veulent le meilleur de la technologie IA compagne.
                </p>
            </div>

            {/* CTA Final */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <a
                    href={candyAI?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '14px 32px'
                    }}
                >
                    Commencer avec Candy AI <ExternalLink size={18} />
                </a>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
                    Essai disponible • Sans engagement
                </p>
            </div>

            {/* Liens Connexes */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>
                    Articles Connexes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link to="/compare/candy-ai-vs-gptgirlfriend" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                        → Candy AI vs GPTGirlfriend : Comparaison Complète
                    </Link>
                    <Link to="/review/gptgirlfriend" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                        → GPTGirlfriend : Avis et Test Complet
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CandyAIReviewPage
