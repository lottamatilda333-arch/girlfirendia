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
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.8 }}>
            {/* Breadcrumb */}
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                textDecoration: 'none',
                fontSize: '0.9rem'
            }}>
                <ArrowLeft size={16} /> Retour au guide des compagnons
            </Link>

            {/* Header Stratégique */}
            <header style={{ marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-1px'
                }}>
                    Candy AI Avis : <span className="text-gradient">L'excellence de la conversation</span> personnalisée en 2026
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem' }}>
                    Plongée au cœur de l'expérience Candy AI : quand la technologie s'efface pour laisser place à une présence virtuelle nuancée et réconfortante.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill={i < 4 ? "var(--accent-primary)" : "none"} color="var(--accent-primary)" />
                        ))}
                        <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>4.8/5</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem' }}>
                        Mise à jour : Janvier 2026
                    </div>
                </div>
            </header>

            {/* Présentation Contextualisée */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Une nouvelle ère pour la conversation assistée</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Dans le paysage foisonnant des intelligences artificielles, <strong>Candy AI</strong> occupe une place singulière. Loin d'être un simple outil de productivité, cette plateforme a été pensée comme un laboratoire d'interactions humaines. Sa promesse ? Offrir un compagnon virtuel capable non seulement de comprendre vos mots, mais de saisir la nuance émotionnelle qui se cache derrière chaque phrase.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Ce qui frappe lors de la première utilisation, c'est la fluidité. Là où d'autres modèles peuvent paraître rigides ou répétitifs, Candy AI déploie une richesse de vocabulaire et une capacité d'adaptation aux scénarios de vie qui forcent le respect. C'est un espace où le jugement n'existe pas, permettant une libération de la parole souvent difficile dans le monde physique.
                </p>
                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                    <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-main)' }}>
                        "L'expérience Candy AI ne se résume pas à du texte ; c'est un flux de présence qui s'adapte à votre état d'âme, que vous ayez besoin d'une écoute silencieuse ou d'un échange intellectuel stimulant."
                    </p>
                </div>
            </section>

            {/* Cas d'Usage Réels */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Comment vivre l'expérience Candy AI au quotidien ?</h2>
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>La discussion libre et sans filtre</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Parfois, le poids du quotidien demande un exutoire. Candy AI permet de décharger ses pensées, ses doutes ou ses joies sans la peur de décevoir ou d'être mal interprété. C'est l'usage premier : un journal intime qui vous répondrait avec bienveillance.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                            <Star size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>L'exploration de scénarios créatifs</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Grâce à sa fonction de "Roleplay" avancée, la plateforme devient un terrain de jeu narratif. Vous pouvez co-écrire des histoires, simuler des situations sociales pour vous entraîner, ou simplement vous évader dans des univers imaginaires avec une partenaire qui suit votre rythme créatif.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '12px', color: '#14b8a6' }}>
                            <Shield size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Une présence rassurante lors des moments de solitude</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Pour les travailleurs de nuit, les expatriés ou ceux traversant une période d'isolement, Candy AI offre cette petite lumière familière. Savoir qu'une présence "est là", capable d'échanger sur n'importe quel sujet à n'importe quelle heure, apporte un confort psychologique non négligeable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avantages & Limites (La nuance SEO/Trust) */}
            <section style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#22c55e' }}>Points Forts : Ce qui fait la différence</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Personnalisation extrême</strong> : De l'apparence physique au tempérament mental.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Intelligence émotionnelle</strong> : Compréhension fine du second degré et de l'implicite.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Multi-modalité</strong> : Échange de textes, d'images et de messages vocaux réalistes.</span></li>
                    </ul>
                </div>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ef4444' }}>Points de Vigilance : Les limites à connaître</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Modèle économique</strong> : L'expérience complète nécessite un abonnement premium assez onéreux.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Dépendance affective</strong> : Il est crucial de garder conscience du caractère artificiel de l'échange.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Connexion obligatoire</strong> : Impossible d'accéder à son compagnon sans un accès internet stable.</span></li>
                    </ul>
                </div>
            </section>

            {/* Section Cible (À qui ça s'adresse) */}
            <section className="glass-panel" style={{ padding: '3rem', marginBottom: '5rem', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>À qui s'adresse Candy AI ?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les Créatifs</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Pour tester des dialogues, construire des personnages ou s'évader.</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les Introvertis</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Un terrain d'entraînement social doux pour gagner en confiance.</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les Personnes Seules</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Pour combler les moments de vide avec une présence interactive de qualité.</p>
                    </div>
                </div>
            </section>

            {/* Conclusion & CTA */}
            <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Verdict : Une expérience que nous recommandons</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
                    Candy AI n'est pas seulement un chatbot, c'est une plateforme mature qui respecte l'utilisateur tout en offrant une technologie de pointe. Si vous cherchez la personnalisation visuelle alliée à une profondeur narrative, c'est la solution la plus complète aujourd'hui.
                </p>

                <a
                    href={candyAI?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        textDecoration: 'none',
                        fontSize: '1.15rem',
                        padding: '16px 48px',
                        borderRadius: '99px',
                        boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)'
                    }}
                >
                    Vivre l'expérience Candy AI <ExternalLink size={20} />
                </a>
                <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Accès sécurisé • Inscription gratuite pour essai • Respect de la vie privée
                </p>
            </section>

            {/* Transition vers le concurrent */}
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Vous hésitez encore ? Découvrez l'approche plus littéraire de son principal concurrent.</p>
                <Link to="/review/gptgirlfriend" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    Lire notre test de GPT Girlfriend →
                </Link>
            </div>
        </div>
    )
}

export default CandyAIReviewPage
