import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

function Newsletter() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('loading')
        // Simulation d'inscription
        setTimeout(() => {
            setStatus('success')
            setEmail('')
        }, 1500)
    }

    if (status === 'success') {
        return (
            <div className="glass-panel" style={{
                padding: '3rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
                border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
                <CheckCircle2 size={48} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Merci pour votre confiance</h3>
                <p style={{ color: 'var(--text-muted)' }}>Vous recevrez prochainement nos réflexions sur l'équilibre numérique.</p>
            </div>
        )
    }

    return (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
                Gardons le contact <span className="text-gradient">en douceur</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Recevez une fois par mois nos conseils pour préserver votre espace mental et découvrir les dernières avancées de l'IA bienveillante.
            </p>

            <form onSubmit={handleSubmit} style={{
                maxWidth: '450px',
                margin: '0 auto',
                display: 'flex',
                gap: '10px',
                background: 'rgba(255,255,255,0.03)',
                padding: '6px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--glass-border)'
            }}>
                <input
                    type="email"
                    placeholder="Votre adresse email..."
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        padding: '0 1rem',
                        color: 'var(--text-main)',
                        outline: 'none',
                        fontSize: '0.95rem'
                    }}
                />
                <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === 'loading'}
                    style={{
                        padding: '10px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.9rem'
                    }}
                >
                    {status === 'loading' ? 'Inscription...' : 'M\'inscrire'}
                    <Send size={16} />
                </button>
            </form>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem' }}>
                Aucun spam. Désinscription possible à tout moment.
            </p>
        </div>
    )
}

export default Newsletter
