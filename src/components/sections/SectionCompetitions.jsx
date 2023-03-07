import Image from 'next/image';
import Link from 'next/link';
import styles from './SectionCompetitions.module.css';

const competitions = [
    {
        name: 'FRC 2025',
        description: 'FIRST Robotics Competition - Takım 10396',
        image: '/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg',
        href: '/yarisma/frc-2025',
        featured: true,
    },
    {
        name: 'Elektrikli Araç Yarışması',
        description: 'TÜBİTAK Efficiency Challenge',
        image: '/images/full_car_view_from_front_with_5_people_looking.jpeg',
        href: '/yarisma/diger',
        featured: false,
    },
    {
        name: 'Otonom Teknolojiler',
        description: 'Otonom araç ve drone projeleri',
        image: '/images/frc_robot_close_up.jpeg',
        href: '/projeler',
        featured: false,
    },
];

export default function SectionCompetitions() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Yarışmalarımız</span>
                    <h2 className={styles.title}>
                        Sahada <span className={styles.highlight}>Rekabet</span>,<br />
                        Sahne Dışında Dostluk
                    </h2>
                    <p className={styles.description}>
                        Ulusal ve uluslararası arenada Türkiye'yi temsil ediyoruz.
                        Her yarışma bizim için yeni öğrenme ve büyüme fırsatı.
                    </p>
                </div>

                <div className={styles.grid}>
                    {competitions.map((comp, index) => (
                        <Link
                            key={comp.name}
                            href={comp.href}
                            className={`${styles.card} ${comp.featured ? styles.featured : ''}`}
                        >
                            <div className={styles.cardImage}>
                                <Image
                                    src={comp.image}
                                    alt={comp.name}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.cardOverlay}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{comp.name}</h3>
                                <p>{comp.description}</p>
                                <span className={styles.cardLink}>
                                    Detayları İncele
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/yarisma" className={styles.ctaButton}>
                        Tüm Yarışmaları Gör
                    </Link>
                </div>
            </div>
        </section>
    );
}
