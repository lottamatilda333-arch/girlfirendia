import { Link } from 'react-router-dom'
import { ArrowLeft, Lock } from 'lucide-react'

function PrivacyPage() {
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
                    <Lock size={32} className="text-gradient" />
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Confidentialité</h1>
                </div>

                <div style={{ display: 'grid', gap: '2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Collecte des données</h2>
                        <p>
                            Nous ne collectons aucune donnée personnelle nominative (nom, adresse, téléphone) lors de votre simple navigation sur
                            <strong> GFE Comparateur</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Cookies et Statistiques</h2>
                        <p>
                            Le site utilise des services d'analyse (Vercel Analytics) pour comprendre le trafic de manière anonyme.
                            Ces données nous aident à améliorer votre expérience sans jamais vous identifier personnellement.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Liens vers des tiers</h2>
                        <p>
                            Notre site contient des liens vers des sites tiers (services d'IA). Une fois que vous quittez notre site,
                            nous n'avons plus de contrôle sur la confidentialité et la protection des données que vous fournissez sur ces sites.
                            Nous vous invitons à consulter leurs propres politiques de confidentialité.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Contact</h2>
                        <p>
                            Pour toute question concernant cette politique, vous pouvez nous contacter via notre dépôt GitHub ou nos réseaux sociaux officiels.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage
