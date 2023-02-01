import styles from './SectionSponsors.module.css';

// Placeholder sponsors - replace with actual sponsor data
const sponsors = [
    { name: 'Sponsor 1', tier: 'gold' },
    { name: 'Sponsor 2', tier: 'gold' },
    { name: 'Sponsor 3', tier: 'silver' },
    { name: 'Sponsor 4', tier: 'silver' },
    { name: 'Sponsor 5', tier: 'bronze' },
    { name: 'Sponsor 6', tier: 'bronze' },
];

export default function SectionSponsors() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Sponsorlarımız</span>
                    <h2 className={styles.title}>
                        Başarılarımızın <span className={styles.highlight}>Destekçileri</span>
                    </h2>
                    <p className={styles.description}>
                        Projelerimizi gerçekleştirmemizde bize destek olan değerli sponsorlarımıza
                        teşekkür ederiz. Onların desteği ile geleceği inşa ediyoruz.
                    </p>
                </div>

                <div className={styles.sponsorGrid}>
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className={`${styles.sponsorCard} ${styles[sponsor.tier]}`}
                        >
                            <div className={styles.sponsorLogo}>
                                <span>{sponsor.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>Siz de takımımıza sponsor olarak destek olmak ister misiniz?</p>
                    <a href="/destek#sponsor" className={styles.ctaButton}>
                        Sponsor Olun
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
