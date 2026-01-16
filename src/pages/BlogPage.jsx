import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/mockData'

function BlogPage() {
    return (
        <div style={{ paddingBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }} className="text-gradient">
                    Le Blog GFE
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Conseils, analyses et actualités sur le monde des compagnes IA.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2.5rem'
            }}>
                {blogPosts.map((post) => (
                    <article key={post.id} className="glass-panel card-hover" style={{
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                                {post.date}
                            </div>
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                {post.excerpt}
                            </p>
                            <Link to={`/blog/${post.slug}`} className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                                Lire l'article
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default BlogPage
