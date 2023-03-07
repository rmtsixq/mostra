import Image from 'next/image';
import Link from 'next/link';
import styles from '../frc-2025/page.module.css'; // Reusing existing styles

export const metadata = {
    title: 'FRC 2026 | Team Mostra',
    description: 'Team Mostra FRC 2026 sezonu hazırlıkları ve gelecek planları.',
};

export default function FRC2026Page() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/takımpic2.jpeg"
                        alt="FRC 2026 Hazırlık"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <Link href="/yarisma" className={styles.backLink}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Yarışmalar
                    </Link>
                    <div className={styles.teamBadge}>
                        <span className={styles.teamNumber}>10396</span>
                        <span className={styles.teamLabel}>Team Mostra</span>
                    </div>
                    <h1>FRC <span className={styles.highlight}>2026</span></h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: '500', marginTop: '1rem', color: 'var(--clr-primary)' }}>
                        Yarışmadan sonra güncellenecektir.
                    </p>
                </div>
            </section>

            {/* Placeholder Content Section */}
            <section className={styles.section}>
                <div className={styles.container} style={{ textAlign: 'center', padding: '100px 0' }}>
                    <div className={styles.teamBadge} style={{ margin: '0 auto 2rem' }}>
                        <span className={styles.teamLabel}>COMING SOON</span>
                    </div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Gelecek <span className={styles.highlight}>Burada</span> Şekilleniyor</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.2rem', color: 'var(--clr-text-secondary)' }}>
                        Team Mostra olarak FRC 2026 sezonu için hazırlıklarımıza tüm hızımızla devam ediyoruz.
                        Robot tasarımımız, teknik detaylarımız ve sezon yol haritamız çok yakında burada olacak.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/yarisma/frc-2025" className={styles.ctaButton} style={{ background: 'transparent', border: '1px solid var(--clr-primary)', color: 'var(--clr-primary)' }}>
                            2025 Sezonunu İncele
                        </Link>
                        <Link href="/iletisim" className={styles.ctaButton}>
                            Bize Katılın
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter/Social CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Gelişmeleri Takip Edin</h2>
                        <p>2026 sezonu güncellemelerini kaçırmamak için sosyal medya hesaplarımızı takip edin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                            <a href="https://instagram.com/teammostra" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-primary)', fontWeight: 'bold' }}>Instagram</a>
                            <a href="https://www.linkedin.com/company/team-mostra-tm/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-primary)', fontWeight: 'bold' }}>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
