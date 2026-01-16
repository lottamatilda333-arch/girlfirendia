import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

function LegalPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem 4rem' }}>
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
                transition: 'color 0.2s',
                textDecoration: 'none'
            }}>
                <ArrowLeft size={20} /> Retour à l'accueil
            </Link>

            <div className="glass-panel" style={{ padding: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                    <ShieldCheck size={32} className="text-gradient" />
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Mentions Légales</h1>
                </div>

                <div style={{ display: 'grid', gap: '2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Édition du site</h2>
                        <p>
                            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique,
                            il est précisé aux utilisateurs du site <strong>GFE Comparateur</strong> l'identité des différents intervenants
                            dans le cadre de sa réalisation et de son suivi :
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                            <li><strong>Propriétaire :</strong> GFE Comparateur Project</li>
                            <li><strong>Responsable publication :</strong> Équipe GFE Comparateur</li>
                            <li><strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #1150, Walnut, CA 91789, États-Unis</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Propriété intellectuelle</h2>
                        <p>
                            Le contenu du présent site, incluant les textes, graphismes, logos et icônes, est la propriété exclusive de
                            GFE Comparateur, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires
                            (notamment les solutions IA référencées).
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Limitation de responsabilité</h2>
                        <p>
                            GFE Comparateur ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur,
                            lors de l'accès au site. Les solutions IA présentées sont des services tiers ; GFE Comparateur n'est pas responsable
                            de leur contenu ou de leur usage.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Affiliation</h2>
                        <p>
                            Le site GFE Comparateur participe à des programmes d'affiliation. Certains liens vers des services tiers peuvent
                            donner lieu à une commission si vous souscrivez à une offre, sans coût supplémentaire pour vous.
                            Cela nous permet de maintenir le site gratuit et indépendant.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LegalPage
