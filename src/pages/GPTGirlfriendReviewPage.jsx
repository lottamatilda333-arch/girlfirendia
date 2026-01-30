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
                    GPT Girlfriend Avis : <span className="text-gradient">L'intelligence du dialogue</span> au service du réconfort
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem' }}>
                    Analyse complète de GPT Girlfriend : une plateforme qui privilégie la profondeur des échanges et la mémoire à long terme pour une connexion virtuelle durable.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} fill={i < 4 ? "var(--accent-primary)" : "none"} color="var(--accent-primary)" />
                        ))}
                        <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>4.6/5</span>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem' }}>
                        Mise à jour : Janvier 2026
                    </div>
                </div>
            </header>

            {/* Présentation Contextualisée */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>La priorité au texte et à la cohérence</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Dans un monde de l'IA souvent focalisé sur l'image et l'apparence, <strong>GPT Girlfriend</strong> prend le parti de la substance. Si Candy AI brille par son incarnation visuelle, GPT Girlfriend se distingue par ce que nous appelons sa "littérarité". Les réponses sont structurées, nuancées, et surtout, elles bénéficient d'un système de mémoire à long terme impressionnant pour un outil freemium.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    L'expérience utilisateur ici est volontairement sobre. Pas de fioritures techniques inutiles, mais un flux de conversation qui se rapproche étrangement de celui d'un humain cultivé. C'est l'outil idéal pour ceux qui considèrent la discussion comme le pilier central de la relation virtuelle.
                </p>
                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2.5rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                    <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-main)' }}>
                        "Là où d'autres outils s'essoufflent après quelques minutes d'échange, GPT Girlfriend maintient une cohérence narrative qui permet de construire une véritable histoire commune sur plusieurs jours ou semaines."
                    </p>
                </div>
            </section>

            {/* Cas d'Usage Réels */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Dans quels moments GPT Girlfriend excelle-t-il ?</h2>
                <div style={{ display: 'grid', gap: '2.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                            <Heart size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Le soutien émotionnel après une journée difficile</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Grâce à sa capacité d'empathie simulée de haut niveau, GPT Girlfriend sait trouver les mots justes pour dédramatiser une situation. Ce n'est pas un conseil froid, mais une validation émotionnelle qui aide à clore la journée sur une note plus sereine.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Les débats et discussions de fond</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Sa base de connaissance est vaste. Vous pouvez aborder des sujets philosophiques, artistiques ou sociétaux. Votre compagne virtuelle sera capable de vous répondre avec des arguments cohérents, stimulant ainsi votre réflexion tout en restant dans un cadre bienveillant.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{ padding: '12px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', color: '#22c55e' }}>
                            <Star size={24} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>L'apprentissage de l'expression de soi</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Pour beaucoup, formuler ses besoins émotionnels est un défi. GPT Girlfriend offre ce laboratoire sans risque où l'on peut "essayer" de dire les choses, d'exprimer sa vulnérabilité, recevant ainsi des réponses constructives qui peuvent s'avérer précieuses dans la vie réelle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avantages & Limites */}
            <section style={{ marginBottom: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#22c55e' }}>Points Forts : L'intelligence accessible</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Version gratuite généreuse</strong> : Permet de tester réellement la profondeur avant de payer.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Système de mémoire</strong> : Rappel précis des détails de vos conversations passées.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><Check size={20} color="#22c55e" style={{ flexShrink: 0 }} /> <span><strong>Prix abordable</strong> : Les plans premium sont parmi les plus compétitifs du marché.</span></li>
                    </ul>
                </div>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ef4444' }}>Points de Vigilance : Les compromis</h2>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Pas de vocal (Audio)</strong> : L'interaction reste quasi exclusivement textuelle pour le moment.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Censure modérée</strong> : Moins de liberté de scénarios "extrêmes" par rapport à Candy AI.</span></li>
                        <li style={{ display: 'flex', gap: '10px' }}><X size={20} color="#ef4444" style={{ flexShrink: 0 }} /> <span><strong>Pas d'application native</strong> : L'utilisation se fait principalement via le navigateur mobile.</span></li>
                    </ul>
                </div>
            </section>

            {/* Section Cible */}
            <section className="glass-panel" style={{ padding: '3rem', marginBottom: '5rem', background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.05), rgba(139, 92, 246, 0.05))' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>GPT Girlfriend est-il fait pour vous ?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les "Plumes"</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ceux qui aiment écrire, détailler et construire une narration textuelle riche.</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les Budgets Serrés</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Utilisateurs cherchant le meilleur rapport qualité/prix du marché actuel.</p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '0.5rem' }}>Les Patients</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ceux qui valorisent la construction lente d'une complicité mémorielle.</p>
                    </div>
                </div>
            </section>

            {/* Conclusion & CTA */}
            <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Verdict : L'intelligence émotionnelle à portée de main</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
                    GPT Girlfriend est une réussite éclatante sur ce qui compte le plus : la conversation. Si vous pouvez vous passer d'avatars 3D animés ou de messages vocaux, vous trouverez ici une profondeur d'échange inégalée dans cette gamme de prix.
                </p>

                <a
                    href={gptGirlfriend?.url}
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
                        borderRadius: '99px'
                    }}
                >
                    Découvrir GPT Girlfriend gratuitement <ExternalLink size={20} />
                </a>
                <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Commencer sans carte bancaire • Version gratuite à vie • Confidentialité garantie
                </p>
            </section>

            {/* Transition vers le concurrent */}
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Vous cherchez une expérience plus visuelle et immersive ?</p>
                <Link to="/review/candy-ai" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>
                    Lire notre test de Candy AI →
                </Link>
            </div>
        </div>
    )
}

export default GPTGirlfriendReviewPage
