import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Önceki Sezonlar | Team Mostra',
    description: 'Team Mostra FRC geçmiş sezonları ve başarıları.',
};

const seasons = [
    {
        year: '2025',
        name: 'REEFSCAPE',
        achievement: '',
        description: 'İlk FRC sezonumuz. Regional\'da büyük deneyim kazandık.',
        image: '/images/frc_team_photo.jpeg',
        highlights: [
            'Ümraniye Off-Season Şampiyonluğu',
            'Başakşehir Industrial Design Ödülü',
            'İlk robot tasarımımız',
            '6 haftalık yoğun build season',
            'Regional katılımı',
            'Outreach projeleri',
        ],
    },
];

const achievements = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ),
        title: 'Ümraniye Off-Season Şampiyonu',
        year: '2024',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        title: 'Başakşehir Industrial Design',
        year: '2024',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
        title: 'FRC 10396 Team Mostra',
        year: '2024',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: '50+ Aktif Üye',
        year: '2025',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: '10+ Outreach Etkinliği',
        year: '2025',
    },
];

export default function OncekiSezonlarPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <Link href="/yarisma" className={styles.backLink}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Yarışmalar
                    </Link>
                    <span className={styles.label}>FRC Geçmişimiz</span>
                    <h1>Önceki <span className={styles.highlight}>Sezonlar</span></h1>
                    <p>
                        Her sezon yeni deneyimler, yeni başarılar. İşte FRC yolculuğumuz.
                    </p>
                </div>
            </section>

            {/* Achievements */}
            <section className={styles.achievementsSection}>
                <div className={styles.container}>
                    <div className={styles.achievementsGrid}>
                        {achievements.map((item, idx) => (
                            <div key={idx} className={styles.achievementCard}>
                                <div className={styles.achievementIcon}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <span className={styles.achievementYear}>{item.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasons List */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Sezon Detayları</h2>
                    </div>

                    {seasons.map((season) => (
                        <div key={season.year} className={styles.seasonCard}>
                            <div className={styles.seasonImage}>
                                <Image
                                    src={season.image}
                                    alt={`FRC ${season.year}`}
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.seasonContent}>
                                <div className={styles.seasonHeader}>
                                    <span className={styles.seasonYear}>{season.year}</span>
                                    <span className={styles.seasonName}>{season.name}</span>
                                </div>
                                <span className={styles.achievement}>{season.achievement}</span>
                                <p>{season.description}</p>
                                <ul className={styles.highlights}>
                                    {season.highlights.map((item, idx) => (
                                        <li key={idx}>
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>2025 Sezonu Yayında!</h2>
                        <p>Yeni sezon hazırlıklarımızı ve robotumuzu inceleyin.</p>
                        <Link href="/yarisma/frc-2025" className={styles.ctaButton}>
                            FRC 2025'i İncele
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
