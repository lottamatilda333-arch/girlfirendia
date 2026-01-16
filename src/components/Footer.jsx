import { Link } from 'react-router-dom'
import { Sparkles, Github, Twitter } from 'lucide-react'

function Footer() {
    return (
        <footer style={{
            marginTop: 'auto',
            padding: '4rem 2rem 2rem',
            borderTop: '1px solid var(--glass-border)',
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05))'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                marginBottom: '3rem'
            }}>
                {/* Brand Section */}
                <div>
                    <Link to="/" style={{
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        marginBottom: '1rem'
                    }}>
                        <Sparkles size={20} className="text-gradient" />
                        <span>GFE<span className="text-gradient">Comparateur</span></span>
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        Un espace de conversation calme et sécurisé pour votre équilibre numérique.
                        Découvrez la présence IA qui vous correspond.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Navigation</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                        <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Accueil</Link></li>
                        <li><Link to="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Espace Blog</Link></li>
                        <li><Link to="/compare/candy-ai-vs-gptgirlfriend" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Comparaison</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Information</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
                        <li><Link to="/mentions-legales" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Mentions Légales</Link></li>
                        <li><Link to="/confidentialite" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Confidentialité</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Contact</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="Github"><Github size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '2rem',
                borderTop: '1px solid var(--glass-border)',
                textAlign: 'center'
            }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    &copy; 2026 GFE Comparateur. Tous droits réservés.
                </p>
            </div>
        </footer>
    )
}

export default Footer
