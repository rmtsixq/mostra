import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Blog | Team Mostra',
    description: 'Team Mostra blog yazıları. Robotik, teknoloji ve takım hikayeleri.',
};

const blogPosts = [
    {
        id: 'frc-2026-hazirlik',
        title: 'FRC 2026 Sezonu Başlıyor!',
        excerpt: 'Yeni sezon için hazırlıklarımız hakkında bilgiler ve beklentilerimiz.',
        date: '2026-01-15',
        category: 'FRC',
        readTime: '5 dk',
    },
    {
        id: 'atölye-yenilendi',
        title: 'Atölyemiz Yenilendi',
        excerpt: 'Yeni 3D yazıcılarımız ve CNC makinelerimiz ile üretim kapasitemizi arttırdık.',
        date: '2025-12-20',
        category: 'Haberler',
        readTime: '3 dk',
    },
    {
        id: 'elektrikli-arac-basari',
        title: 'Elektrikli Araç Yarışmasında Başarı',
        excerpt: 'TÜBİTAK Efficiency Challenge\'da elde ettiğimiz sonuçlar.',
        date: '2025-11-10',
        category: 'Yarışmalar',
        readTime: '4 dk',
    },
    {
        id: 'yeni-uyeler',
        title: 'Ekibimize Yeni Üyeler Katıldı',
        excerpt: 'Bu dönem takımımıza katılan yetenekli öğrencilerimizi tanıyın.',
        date: '2025-10-01',
        category: 'Takım',
        readTime: '3 dk',
    },
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Blog</span>
                    <h1>Hikayelerimiz ve <span className={styles.highlight}>Haberlerimiz</span></h1>
                    <p>
                        Takım içinden güncellemeler, teknik yazılar ve yarışma hikayeleri.
                    </p>
                </div>
            </section>

            {/* Blog Posts */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.postsGrid}>
                        {blogPosts.map((post) => (
                            <article key={post.id} className={styles.postCard}>
                                <div className={styles.postMeta}>
                                    <span className={styles.category}>{post.category}</span>
                                    <span className={styles.date}>
                                        {new Date(post.date).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <div className={styles.postFooter}>
                                    <span className={styles.readTime}>{post.readTime} okuma</span>
                                    <span className={styles.readMore}>
                                        Devamını Oku
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Haberdar Olun</h2>
                        <p>Sosyal medya hesaplarımızı takip ederek son gelişmelerden haberdar olun.</p>
                        <div className={styles.socialLinks}>
                            <a
                                href="https://instagram.com/teammostra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.youtube.com/@teammostra"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                            >
                                YouTube
                            </a>
                            <a
                                href="https://www.linkedin.com/company/team-mostra-tm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialBtn}
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
