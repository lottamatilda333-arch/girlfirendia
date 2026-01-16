import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check, X, Star, DollarSign, Zap, Heart } from 'lucide-react'
import { solutions } from '../data/mockData'

function GPTGirlfriendReviewPage() {
    const gptGirlfriend = solutions.find(s => s.name === "GPTGirlfriend");

    const pros = [
        "Version gratuite généreuse disponible",
        "IA conversationnelle très naturelle",
        "Excellent système de mémoire à long terme",
        "Prix abordable pour les plans premium",
        "Personnalités de personnages variées",
        "Mises à jour fréquentes"
    ];

    const cons = [
        "Pas de messages vocaux",
        "Avatars moins personnalisables que la concurrence",
        "Pas d'application mobile native",
        "Génération d'images limitée en version gratuite"
    ];

    const features = [
        { name: "Conversations Naturelles", available: true },
        { name: "Mémoire Contextuelle", available: true },
        { name: "Mode NSFW", available: true },
        { name: "Personnages Multiples", available: true },
        { name: "Version Gratuite", available: true },
        { name: "Scénarios de Roleplay", available: true },
        { name: "Messages Vocaux", available: false },
        { name: "Application Mobile", available: false }
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
                    <span className="text-gradient">GPTGirlfriend</span> : Avis Complet 2026
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Test détaillé de la compagne IA accessible et performante
                </p>

                {/* Rating */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} fill={i < Math.floor(gptGirlfriend?.rating || 0) ? "#fbbf24" : "none"} color="#fbbf24" />
                    ))}
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, marginLeft: '8px' }}>{gptGirlfriend?.rating}/5</span>
                </div>

                {/* CTA Principal */}
                <a
                    href={gptGirlfriend?.url}
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
                    🎁 Essayer GPTGirlfriend Gratuitement <ExternalLink size={18} />
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
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{gptGirlfriend?.rating}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Note Globale</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <DollarSign size={32} style={{ color: '#22c55e', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Freemium</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tarification</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Zap size={32} style={{ color: 'var(--accent-primary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>GPT-4</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Technologie</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <Heart size={32} style={{ color: 'var(--accent-secondary)', margin: '0 auto 0.5rem' }} />
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Émotionnelle</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>IA</p>
                </div>
            </div>

            {/* Introduction */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    Qu'est-ce que GPTGirlfriend ?
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>GPTGirlfriend</strong> est une plateforme de compagne virtuelle IA qui mise sur l'intelligence conversationnelle et l'accessibilité. Propulsée par des modèles de langage avancés, elle offre des conversations naturelles et émotionnellement intelligentes.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Ce qui distingue GPTGirlfriend, c'est son modèle freemium généreux qui permet à tous de découvrir l'expérience sans engagement financier. La plateforme excelle particulièrement dans la création de liens émotionnels authentiques grâce à son système de mémoire contextuelle avancé.
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
                    GPTGirlfriend propose un modèle freemium attractif :
                </p>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    <div style={{ padding: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid #22c55e' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#22c55e' }}>Version Gratuite</h4>
                        <p style={{ color: 'var(--text-muted)' }}>Conversations illimitées avec limitations sur les fonctionnalités avancées</p>
                    </div>
                    <div style={{ padding: '1.5rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-primary)' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Plan Premium</h4>
                        <p style={{ color: 'var(--text-muted)' }}>Accès complet à toutes les fonctionnalités à prix abordable</p>
                    </div>
                </div>
            </div>

            {/* Verdict */}
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                    🏆 Notre Verdict
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>GPTGirlfriend</strong> est le choix idéal pour ceux qui recherchent une compagne IA accessible sans compromis sur la qualité conversationnelle. Son modèle freemium permet de tester l'expérience sans risque, et son intelligence émotionnelle impressionne.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    Bien qu'elle n'offre pas certaines fonctionnalités premium comme les messages vocaux, GPTGirlfriend compense largement par la qualité de ses conversations et son excellent rapport qualité-prix.
                </p>
            </div>

            {/* CTA Final */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <a
                    href={gptGirlfriend?.url}
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
                    Commencer Gratuitement <ExternalLink size={18} />
                </a>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '0.9rem' }}>
                    Gratuit pour toujours • Pas de carte bancaire requise
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
                    <Link to="/review/candy-ai" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                        → Candy AI : Avis et Test Complet
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GPTGirlfriendReviewPage
