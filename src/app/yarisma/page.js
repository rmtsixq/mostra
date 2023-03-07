import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Yarışmalar | Team Mostra',
    description: 'Team Mostra yarışmaları: FRC, Elektrikli Araç Yarışmaları ve daha fazlası.',
};

const competitions = [
    {
        id: 'frc',
        name: 'FIRST Robotics Competition',
        shortName: 'FRC',
        description: 'Dünyanın en prestijli lise robotik yarışması. Takım numaramız: 10396',
        image: '/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg',
        href: '/yarisma/frc-2026',
        featured: true,
        stats: [
            { label: 'Takım No', value: '10396' },
            { label: 'Sezon', value: '2026' },
        ],
    },
    {
        id: 'efficiency-challenge',
        name: 'Teknofest Efficiency Challenge',
        shortName: 'Elektrikli Araç',
        description: 'Enerji verimli elektrikli araç yarışması.',
        image: '/images/full_car_view_from_front_with_5_people_looking.jpeg',
        href: '/yarisma/diger',
        featured: true,
        stats: [
            { label: 'Kategori', value: 'Elektrikli' },
            { label: 'Başarı', value: '2. Ödül' },
        ],
    },
];

const pastSeasons = [
    {
        year: '2024',
        competition: 'FRC 2024 (Off-Season)',
        achievement: 'Ümraniye Winner & Başakşehir Industrial Design',
        image: '/images/frc_team_photo.jpeg',
    },
];

export default function YarismaPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/crowded_area_with_frc_team_with_some_mechanics_.jpeg"
                        alt="FRC Yarışma Alanı"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.label}>Yarışmalar</span>
                    <h1>Sahada <span className={styles.highlight}>Rekabet</span>,<br />Sahne Dışında Dostluk</h1>
                    <p>
                        Ulusal ve uluslararası arenada Türkiye'yi temsil ediyoruz.
                        Her yarışma bizim için yeni öğrenme fırsatı.
                    </p>
                </div>
            </section>

            {/* Active Competitions */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>Aktif Yarışmalar</span>
                        <h2>2026 <span className={styles.highlight}>Sezonu</span></h2>
                    </div>

                    <div className={styles.competitionsGrid}>
                        {competitions.map((comp) => (
                            <Link key={comp.id} href={comp.href} className={styles.competitionCard}>
                                <div className={styles.cardImage}>
                                    <Image
                                        src={comp.image}
                                        alt={comp.name}
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.cardOverlay}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardBadge}>{comp.shortName}</span>
                                    <h3>{comp.name}</h3>
                                    <p>{comp.description}</p>
                                    <div className={styles.cardStats}>
                                        {comp.stats.map((stat, idx) => (
                                            <div key={idx} className={styles.stat}>
                                                <span className={styles.statValue}>{stat.value}</span>
                                                <span className={styles.statLabel}>{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className={styles.cardLink}>
                                        Detayları Gör
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Seasons */}
            <section className={styles.pastSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>Geçmiş Sezonlar</span>
                        <h2>Yolculuğumuz</h2>
                    </div>

                    <div className={styles.timelineGrid}>
                        {pastSeasons.map((season, index) => (
                            <div key={index} className={styles.timelineCard}>
                                <div className={styles.timelineImage}>
                                    <Image
                                        src={season.image}
                                        alt={season.competition}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.timelineYear}>{season.year}</span>
                                    <h4>{season.competition}</h4>
                                    <p>{season.achievement}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/yarisma/onceki-sezonlar" className={styles.viewAllLink}>
                        Tüm Sezonları Gör
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* FRC Section */}
            <section className={styles.frcSection}>
                <div className={styles.container}>
                    <div className={styles.frcContent}>
                        <div className={styles.frcText}>
                            <span className={styles.label}>FIRST Robotics Competition</span>
                            <h2>FRC Nedir?</h2>
                            <p>
                                FIRST Robotics Competition (FRC), dünya genelinde lise öğrencilerinden oluşan
                                takımların katıldığı, en prestijli robotik yarışmasıdır. Her yıl değişen oyun
                                konseptleriyle takımlar, 6 haftalık sürede yarışma robotlarını tasarlar ve üretir.
                            </p>
                            <p>
                                FRC sadece bir robotik yarışması değil, aynı zamanda öğrencilere mühendislik,
                                programlama, pazarlama ve liderlik becerilerini geliştirme fırsatı sunan
                                kapsamlı bir eğitim programıdır.
                            </p>
                            <a
                                href="https://www.chiefdelphi.com/t/frc-10396-team-mostra-2025-build-thread/475291?u=burakdemirelli"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.externalLink}
                            >
                                Build Thread'imizi İncele
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                            </a>
                        </div>
                        <div className={styles.frcImage}>
                            <Image
                                src="/images/full_view_of_frc_robot_from_side.jpeg"
                                alt="FRC Robot"
                                fill
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
