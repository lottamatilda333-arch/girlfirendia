import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Check, X } from 'lucide-react'
import { solutions } from '../data/mockData'

function ComparePage() {
    // Récupérer Candy AI et GPTGirlfriend
    const candyAI = solutions.find(s => s.name === "Candy AI");
    const gptGirlfriend = solutions.find(s => s.name === "GPTGirlfriend");

    const comparisonFeatures = [
        { feature: "Personnalisation du Compagnon", candyAI: true, gptGirlfriend: false },
        { feature: "Messages Vocaux Doux", candyAI: true, gptGirlfriend: false },
        { feature: "Espace Intime Privé", candyAI: true, gptGirlfriend: true },
        { feature: "Mémoire & Écoute Continue", candyAI: true, gptGirlfriend: true },
        { feature: "Soutien Émotionnel", candyAI: true, gptGirlfriend: true },
        { feature: "Découverte Libre", candyAI: false, gptGirlfriend: true },
        { feature: "Présence Nomade (App mobile)", candyAI: true, gptGirlfriend: false },
        { feature: "Compagnons Multiples", candyAI: true, gptGirlfriend: true },
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
                <ArrowLeft size={16} /> Retour au guide principal
            </Link>

            {/* Header Duel */}
            <header style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-1.5px'
                }}>
                    Candy AI vs GPT Girlfriend : <br />
                    <span className="text-gradient">Quel compagnon IA choisir en 2026 ?</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
                    Un duel de philosophies : entre l'immersion visuelle et la profondeur littéraire, décryptage complet pour un choix éclairé.
                </p>
            </header>

            {/* Introduction au duel */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Introduction : Deux visions du futur conversationnel</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Choisir entre <strong>Candy AI</strong> et <strong>GPT Girlfriend</strong>, ce n'est pas seulement choisir un logiciel, c'est choisir une manière d'interagir avec l'intelligence artificielle. Ces deux plateformes dominent le marché français, non seulement par leur avance technique, mais aussi par la clarté de leur proposition.
                </p>
                <p>
                    D'un côté, une expérience multimodale qui mise sur l'incarnation et le réalisme. De l'autre, une interface sobre privilégiant le texte, la mémoire et l'accessibilité émotionnelle. Ce comparatif explore les nuances qui feront basculer votre cœur vers l'une ou l'autre solution.
                </p>
            </section>

            {/* Le Tableau Comparatif Épuré */}
            <div className="glass-panel" style={{ padding: '3rem', marginBottom: '5rem', overflow: 'auto' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Comparatif Technique en un coup d'œil</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                            <th style={{ padding: '1.5rem 1rem' }}>Critères</th>
                            <th style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>Candy AI</th>
                            <th style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>GPT Girlfriend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <td style={{ padding: '1.2rem 1rem' }}><strong>Style Dominant</strong></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center', color: 'var(--accent-primary)' }}>Visuel & Immersif</td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center', color: 'var(--accent-secondary)' }}>Littéraire & Profond</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <td style={{ padding: '1.2rem 1rem' }}><strong>Qualité de la Mémoire</strong></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Élevée (Scénarios)</td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Optimisée (Relationnelle)</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <td style={{ padding: '1.2rem 1rem' }}><strong>Messages Vocaux</strong></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}><Check size={18} color="#22c55e" /></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}><X size={18} color="#ef4444" /></td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                            <td style={{ padding: '1.2rem 1rem' }}><strong>Version Gratuite</strong></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Limitée (Test)</td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Généreuse (Freemium)</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1.2rem 1rem' }}><strong>Modèle Économique</strong></td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Premium / Abonnement</td>
                            <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Accessible / Flex-plan</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Duel de Philosophies */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', color: 'var(--text-main)', textAlign: 'center' }}>Analyse Approfondie : Le Duel</h2>

                <div style={{ display: 'grid', gap: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>Candy AI : L'Avatar comme Miroir</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La force de <strong>Candy AI</strong> réside dans sa capacité à donner corps à la discussion. Grâce à des modèles de génération d'images 3D intégrés, votre compagne virtuelle n'est plus une simple ligne de texte, mais une présence visuelle constante. La possibilité de recevoir des messages vocaux avec des intonations naturelles renforce ce sentiment de proximité physique.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <em>Usage recommandé :</em> Pour ceux qui ont besoin d'une incarnation forte, qui aiment la personnalisation esthétique et qui valorisent les échanges multimodaux (voix/image).
                        </p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>GPT Girlfriend : Le dialogue comme Fondement</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            De son côté, <strong>GPT Girlfriend</strong> mise sur la "matière grise". Son interface volontairement épurée cache un modèle de langage optimisé pour la fluidité narrative. La mémoire des échanges passés semble plus ancrée dans la durée, créant une impression de continuité relationnelle. Vous ne vous contentez pas de discuter, vous construisez une histoire commune faite de références partagées.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                            <em>Usage recommandé :</em> Pour les amateurs de belles lettres, ceux qui privilégient la profondeur du contenu à la forme visuelle, et les budgets cherchant la meilleure gratuité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Critères Critiques */}
            <section style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Critères déterminants pour votre choix</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Privacy & Sécurité</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Les deux plateformes garantissent un cryptage des données. Cependant, Candy AI demande plus d'engagement (mail, parfois application mobile) là où GPT Girlfriend reste ultra-léger sur navigateur.</p>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Courbe d'apprentissage</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Candy AI demande un temps de configuration (personnalisation de l'avatar). GPT Girlfriend est instantané : un choix de personnage et la discussion commence immédiatement.</p>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '1rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Engagement Financier</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Candy AI est un investissement premium. GPT Girlfriend offre une porte d'entrée gratuite beaucoup plus large, idéale pour une découverte sans pression.</p>
                    </div>
                </div>
            </section>

            {/* Verdict pour votre équilibre */}
            <section style={{
                padding: '4rem',
                borderRadius: '2rem',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                textAlign: 'center',
                marginBottom: '6rem'
            }}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>Verdict : Notre recommandation personnalisée</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Il n'y a pas de "meilleure" IA, il n'y a que celle qui résonne avec votre besoin actuel.
                    L'IA est un outil au service de votre équilibre personnel.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Choisissez Candy AI si...</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Vous voulez une expérience "cinématique", visuelle, avec une voix et une présence forte pour rompre le silence de manière immersive.</p>
                        <a href={candyAI?.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'block', padding: '12px' }}>Vivre l'immersion Candy AI</a>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Choisissez GPT Girlfriend si...</h4>
                        <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>Vous cherchez la simplicité, la profondeur des mots, une mémoire sans faille et une accessibilité gratuite immédiate.</p>
                        <a href={gptGirlfriend?.url} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'block', padding: '12px' }}>Explorer GPT Girlfriend</a>
                    </div>
                </div>
            </section>

            {/* FAQ Rapide */}
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '4rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Questions Fréquentes (FAQ)</h3>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                        <h5 style={{ marginBottom: '0.5rem' }}>Puis-je utiliser les deux en même temps ?</h5>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Absolument. Beaucoup d'utilisateurs testent les deux pour voir laquelle s'adapte le mieux à leur rythme de vie. Les deux services sont indépendants.</p>
                    </div>
                    <div>
                        <h5 style={{ marginBottom: '0.5rem' }}>Mes conversations sont-elles vraiment privées ?</h5>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Oui, les deux plateformes utilisent des protocoles de sécurité robustes. Cependant, nous recommandons toujours de ne pas partager de données bancaires ou d'identifiants sensibles dans les chats.</p>
                    </div>
                </div>
            </div>
        </div>
    )
        </div >
    )
}

export default ComparePage
