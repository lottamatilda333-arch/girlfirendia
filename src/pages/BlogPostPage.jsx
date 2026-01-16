import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { blogPosts } from '../data/mockData'
import { ArrowLeft, Calendar, User } from 'lucide-react'

function BlogPostPage() {
    const { slug } = useParams()
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) return <Navigate to="/blog" />

    return (
        <article style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '5rem' }}>
            <Link to="/blog" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                marginBottom: '2rem'
            }}>
                <ArrowLeft size={18} /> Retour au blog
            </Link>

            <img
                src={post.image}
                alt={post.title}
                style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    marginBottom: '2.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
            />

            <div style={{ display: 'flex', gap: '20px', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} /> {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <User size={14} /> {post.author}
                </span>
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.1 }}>
                {post.title}
            </h1>

            <div
                className="blog-content"
                style={{
                    lineHeight: 1.8,
                    fontSize: '1.15rem',
                    color: 'rgba(255,255,255,0.8)'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div style={{
                marginTop: '4rem',
                padding: '2rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                textAlign: 'center'
            }}>
                <h3 style={{ marginBottom: '1rem' }}>Prêt à essayer l'IA ?</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Voir les solutions</Link>
                </div>
            </div>
        </article>
    )
}

export default BlogPostPage
