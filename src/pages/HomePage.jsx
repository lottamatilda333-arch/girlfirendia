import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import FilterBar from '../components/FilterBar'
import ResultGrid from '../components/ResultGrid'
import { solutions } from '../data/mockData'
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
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 800,
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                    letterSpacing: '-1.5px'
                }}>
                    Quand parler devient difficile, <br />
                    <span className="text-gradient">il existe un espace plus calme.</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Des compagnons conversationnels conçus pour offrir présence et écoute, <br />sans pression, ni jugement.
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
                            padding: '14px 32px',
                            borderRadius: '99px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        Trouver l'expérience qui me correspond
                    </Link>
                )}
            </div>

            {/* Section de Contexte Émotionnel */}
            <div className="glass-panel" style={{
                margin: '0 auto 5rem',
                maxWidth: '800px',
                padding: '3rem',
                textAlign: 'center',
                borderRadius: '32px',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Un choix pour votre équilibre</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0' }}>
                    Parfois, interagir avec le monde extérieur demande plus d'énergie que nous n'en avons.
                    Ce choix n’est pas un manque, mais une forme de protection émotionnelle.
                    Ici, vous pouvez explorer une connexion authentique et sécurisée, sans les contraintes du quotidien.
                </p>
            </div>

            {/* Filtres */}
            <FilterBar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Résultats */}
            <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    {filteredSolutions.length} résultat{filteredSolutions.length > 1 ? 's' : ''}
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
                        Aucune compagne trouvée correspondant à vos critères.
                    </div>
                )}
            </div>

            {/* Section Technique discrète en bas */}
            <div style={{
                marginTop: '6rem',
                padding: '4rem 0',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'rgba(255,255,255,0.6)' }}>Une technologie au service de l'humain</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
                    Nos compagnons utilisent des modèles de langage de pointe pour assurer une fluidité de conversation naturelle, tout en garantissant la confidentialité absolue de vos échanges.
                </p>
            </div>
        </>
    )
}

export default HomePage
