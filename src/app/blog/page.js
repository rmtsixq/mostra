import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Blog | Team Mostra',
    description: 'Team Mostra blog yazıları. Robotik, teknoloji ve takım hikayeleri.',
};

export default function BlogPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Blog</span>
                    <h1>Build <span className={styles.highlight}>Blog</span></h1>
                    <p>
                        Yarışma sürecimizi, teknik detayları ve günlük güncellemelerimizi buradan takip edebilirsiniz.
                    </p>
                </div>
            </section>

            {/* Google Drive Embed */}
            <section className={styles.blogSection}>
                <div className={styles.container}>
                    <div className={styles.embedContainer}>
                        <iframe
                            src="https://drive.google.com/file/d/1gL329Sqti5lfYhdjz965emU3vbjQ2DnG/preview"
                            width="100%"
                            height="800"
                            allow="autoplay"
                            className={styles.driveFrame}
                        ></iframe>
                    </div>
                    <div className={styles.externalLink}>
                        <a
                            href="https://drive.google.com/file/d/1gL329Sqti5lfYhdjz965emU3vbjQ2DnG/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.driveBtn}
                        >
                            Drive'da Görüntüle
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                            </svg>
                        </a>
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
