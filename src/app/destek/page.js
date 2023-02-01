import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Bize Destek Ol | Team Mostra',
    description: 'Team Mostra\'yı destekleyin. Sponsorluk, bağış ve işbirliği fırsatları.',
};

const sponsorshipTiers = [
    {
        name: 'Bronz',
        description: 'Temel destek paketi',
        benefits: [
            'Web sitesinde logo',
            'Sosyal medya teşekkürü',
            'Etkinlik davetiyesi',
        ],
        highlight: false,
    },
    {
        name: 'Gümüş',
        description: 'Gelişmiş destek paketi',
        benefits: [
            'Bronz paket avantajları',
            'Robot üzerinde logo',
            'Takım kıyafetlerinde logo',
            'Proje raporlarında yer alma',
        ],
        highlight: false,
    },
    {
        name: 'Altın',
        description: 'Premium destek paketi',
        benefits: [
            'Gümüş paket avantajları',
            'Ana sponsor olarak tanıtım',
            'Özel etkinlik organizasyonu',
            'Takım ile ortak içerik üretimi',
            'VIP yarışma deneyimi',
        ],
        highlight: true,
    },
];

const supportWays = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
        ),
        title: 'Finansal Destek',
        description: 'Banka havalesi veya online ödeme ile destek olabilirsiniz.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
        title: 'Malzeme Desteği',
        description: 'Elektronik, mekanik parça veya atölye malzemeleri bağışı.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Mentorluk',
        description: 'Mühendislik, yazılım veya iş alanında mentorluk desteği.',
    },
];

export default function DestekPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Bize Destek Ol</span>
                    <h1>Geleceği Birlikte <span className={styles.highlight}>İnşa Edelim</span></h1>
                    <p>
                        Desteğiniz ile daha fazla gence ulaşıyor, daha büyük projeler gerçekleştiriyoruz.
                    </p>
                </div>
            </section>

            {/* Sponsorship Tiers */}
            <section className={styles.section} id="sponsor">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Sponsorluk Paketleri</h2>
                        <p>Size uygun paketi seçin ve takımımıza sponsor olun.</p>
                    </div>
                    <div className={styles.tiersGrid}>
                        {sponsorshipTiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`${styles.tierCard} ${tier.highlight ? styles.highlighted : ''}`}
                            >
                                {tier.highlight && <span className={styles.popularBadge}>En Popüler</span>}
                                <h3>{tier.name}</h3>
                                <p className={styles.tierDesc}>{tier.description}</p>
                                <ul className={styles.benefitsList}>
                                    {tier.benefits.map((benefit, idx) => (
                                        <li key={idx}>
                                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/iletisim" className={styles.tierBtn}>
                                    İletişime Geç
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Ways */}
            <section className={styles.waysSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Destek Yolları</h2>
                        <p>Farklı şekillerde bize destek olabilirsiniz.</p>
                    </div>
                    <div className={styles.waysGrid}>
                        {supportWays.map((way, idx) => (
                            <div key={idx} className={styles.wayCard}>
                                <div className={styles.wayIcon}>{way.icon}</div>
                                <h4>{way.title}</h4>
                                <p>{way.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Sorularınız mı Var?</h2>
                        <p>Sponsorluk, bağış veya işbirliği hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/iletisim" className={styles.ctaPrimary}>
                                İletişime Geç
                            </Link>
                            <a
                                href="mailto:teammostra@gmail.com"
                                className={styles.ctaSecondary}
                            >
                                E-posta Gönder
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
