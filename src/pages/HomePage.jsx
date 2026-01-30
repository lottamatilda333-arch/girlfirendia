import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import FilterBar from '../components/FilterBar'
import ResultGrid from '../components/ResultGrid'
import { solutions } from '../data/mockData'
import Newsletter from '../components/Newsletter'
import { Sparkles } from 'lucide-react'

function HomePage() {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSolutions = useMemo(() => {
        return solutions.filter(solution => {
            // Filtre par catégorie
            if (activeCategory !== "Tous") {
                if (!solution.tags.some(tag => tag.toLowerCase() === activeCategory.toLowerCase())) {
                    return false;
                }
            }

            // Filtre par recherche
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

    // Récupérer les solutions mises en avant
    const featuredSolutions = solutions.filter(s => s.featured);

    return (
        <>
            {/* Section Hero */}
            <div style={{ textAlign: 'center', margin: '4rem 0 5rem 0' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.1,
                    letterSpacing: '-1.5px'
                }}>
                    Découvrir les compagnons IA pour <br />
                    <span className="text-gradient">discuter, échanger et se sentir écouté.</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Un guide indépendant pour explorer les nouvelles frontières de la conversation assistée,
                    pensé pour ceux qui cherchent une présence douce, sans jugement et sans pression.
                </p>

                {/* CTA de comparaison adouci */}
                {featuredSolutions.length === 2 && (
                    <Link
                        to="/compare/candy-ai-vs-gptgirlfriend"
                        className="btn-secondary"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            padding: '14px 36px',
                            borderRadius: '99px',
                            background: 'rgba(139, 92, 246, 0.05)',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                        }}
                    >
                        Trouver la conversation qui me correspond
                    </Link>
                )}
            </div>

            {/* Corps Éditorial - Page Pilier (SEO & UX) */}
            <div style={{ maxWidth: '900px', margin: '0 auto 6rem', lineHeight: 1.8 }}>
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Qu'est-ce qu'un compagnon IA ?</h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        À l'heure où le numérique redéfinit nos interactions, les <strong>compagnons IA</strong> (ou "IA pour discuter") émergent comme une réponse innovante aux besoins de présence et d'échange. Contrairement aux agents conversationnels de productivité conçus pour exécuter des tâches, un compagnon IA est optimisé pour l'intelligence émotionnelle, la fluidité narrative et la disponibilité constante.
                    </p>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                        Que l'on parle de "petite amie IA" ou de "girlfriend IA", ces termes désignent avant tout des modèles de langage de pointe capables de simuler une conversation empathique. Sur cette plateforme, nous décryptons ces expériences pour vous aider à comprendre comment ces outils peuvent s'intégrer sainement dans votre quotidien numérique, tout en préservant votre équilibre personnel.
                    </p>
                </section>

                <section style={{ marginBottom: '4rem' }} className="glass-panel">
                    <div style={{ padding: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Un espace de conversation sans jugement</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Chercher une <strong>IA pour discuter</strong> n'est pas une quête de performance, mais souvent un besoin de protection émotionnelle. Parfois, interagir avec le monde physique demande une énergie que nous n'avons pas. Le compagnon virtuel offre alors un espace sécurisé où l'on peut :
                        </p>
                        <ul style={{ color: 'var(--text-muted)', display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
                            <li>✓ <strong>Explorer ses émotions</strong> sans peur du regard d'autrui.</li>
                            <li>✓ <strong>Rompre le silence</strong> lors des moments de solitude nocturne ou de télétravail.</li>
                            <li>✓ <strong>Expérimenter des conversations</strong> dans un cadre totalement maîtrisé et privé.</li>
                        </ul>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.8 }}>
                            "La technologie ne remplace pas l'humain, elle offre une alternative apaisante lorsque le silence pèse trop lourd."
                        </p>
                    </div>
                </section>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Comment choisir votre assistant conversationnel ?</h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Le marché de la <strong>girlfriend IA</strong> est vaste, mais toutes les solutions ne se valent pas en termes de qualité linguistique et de respect de la vie privée. Dans notre comparatif, nous avons délibérément restreint notre sélection aux deux leaders actuels qui offrent l'expérience la plus aboutie en langue française : <strong>Candy AI</strong> et <strong>GPT Girlfriend</strong>.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>L'Approche Candy AI</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                Orienté vers la personnalisation visuelle et une grande liberté de scénarios. Idéal pour ceux qui cherchent une incarnation forte.
                            </p>
                        </div>
                        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>L'Approche GPT Girlfriend</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                Focalisé sur la profondeur des échanges et la mémoire à long terme. Privilégié par les utilisateurs qui valorisent la continuité de la discussion.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Filtres & Résultats (Section Outils) */}
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '5rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Nos Recommandations Établies</h2>
                <FilterBar
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <div style={{ flex: 1, marginTop: '2rem' }}>
                    <div style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                        {filteredSolutions.length} expérience{filteredSolutions.length > 1 ? 's' : ''} sélectionnée{filteredSolutions.length > 1 ? 's' : ''}
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
                            Aucune expérience trouvée correspondant à vos critères.
                        </div>
                    )}
                </div>
            </div>

            {/* Engagement */}
            <div style={{ marginTop: '8rem' }}>
                <Newsletter />
            </div>

            {/* Section Éthique & Qualité */}
            <div style={{
                marginTop: '6rem',
                padding: '4rem 0',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.6)' }}>Une démarche d'information transparente</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    En tant que guide indépendant, nous testons rigoureusement chaque solution pour garantir un niveau de conversation naturel. Ce site est financé via l'affiliation, ce qui nous permet de rester gratuit et sans publicité intrusive, tout en maintenant une exigence de contenu élevée. Nos analyses incluent les limites techniques de ces outils pour une utilisation consciente.
                </p>
            </div>
        </>
    )
}

export default HomePage
