import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'FRC 2026 | Team Mostra',
    description: 'Team Mostra FRC 2026 sezonu. Takım numarası 10396 ile FIRST Robotics Competition.',
};

const timeline = [
    { date: 'Ocak 2026', title: 'Kickoff', description: 'Sezon başlangıcı ve oyun tanıtımı' },
    { date: 'Ocak-Şubat', title: 'Build Season', description: '6 haftalık robot tasarım ve üretim süreci' },
    { date: 'Mart 2026', title: 'Regional', description: 'Bölgesel yarışmalar' },
    { date: 'Nisan 2026', title: 'World Championship', description: 'Houston, ABD - Dünya Şampiyonası' },
];

const robotSpecs = [
    { label: 'Ağırlık', value: '~55 kg' },
    { label: 'Boyut', value: '75x75x120 cm' },
    { label: 'Tahrik', value: 'Swerve Drive' },
    { label: 'Motor', value: 'NEO & Falcon' },
];

export default function FRC2026Page() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg"
                        alt="FRC Robot 2026"
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
                    <p>
                        Yeni sezon, yeni hedefler. FIRST Robotics Competition 2026 için hazırız.
                    </p>
                </div>
            </section>

            {/* Robot Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.robotGrid}>
                        <div className={styles.robotContent}>
                            <span className={styles.label}>2026 Robotu</span>
                            <h2>Tasarım ve <span className={styles.highlight}>Özellikler</span></h2>
                            <p>
                                2026 sezonu için geliştirdiğimiz robot, önceki sezonlardan edindiğimiz
                                deneyimler ışığında tasarlandı. Swerve drive sistemi ile yüksek manevra
                                kabiliyeti, güçlü toplama ve atma mekanizmalarıyla rekabetçi bir yapıya sahip.
                            </p>
                            <div className={styles.specsGrid}>
                                {robotSpecs.map((spec, idx) => (
                                    <div key={idx} className={styles.specCard}>
                                        <span className={styles.specValue}>{spec.value}</span>
                                        <span className={styles.specLabel}>{spec.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.robotImages}>
                            <div className={styles.mainImage}>
                                <Image
                                    src="/images/full_view_of_frc_robot_from_side.jpeg"
                                    alt="FRC Robot Yandan Görünüm"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.thumbImages}>
                                <div className={styles.thumbImage}>
                                    <Image
                                        src="/images/frc_robot_close_up.jpeg"
                                        alt="Robot Detay"
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.thumbImage}>
                                    <Image
                                        src="/images/cool_frc_mechanic_from_up.jpeg"
                                        alt="Mekanik Sistem"
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>Sezon Takvimi</span>
                        <h2>2026 Yol Haritası</h2>
                    </div>
                    <div className={styles.timeline}>
                        {timeline.map((item, idx) => (
                            <div key={idx} className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.timelineDate}>{item.date}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamImage}>
                            <Image
                                src="/images/frc_team_photo.jpeg"
                                alt="FRC Takım Fotoğrafı"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.teamContent}>
                            <span className={styles.label}>Takımımız</span>
                            <h2>50+ Tutkulu <span className={styles.highlight}>Genç Mühendis</span></h2>
                            <p>
                                FRC takımımız; mekanik, elektronik, yazılım, pazarlama ve medya
                                departmanlarından oluşan çok disiplinli bir yapıya sahiptir.
                                Her üye, kendi alanında uzmanlaşırken ekip çalışması ve
                                liderlik becerilerini de geliştirmektedir.
                            </p>
                            <a
                                href="https://www.chiefdelphi.com/t/frc-10396-team-mostra-2025-build-thread/475291"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.externalLink}
                            >
                                Build Thread'imizi İnceleyin
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Takımımıza Sponsor Olun</h2>
                        <p>FRC'de Türkiye'yi temsil etmemize destek verin.</p>
                        <Link href="/destek" className={styles.ctaButton}>
                            Destek Seçenekleri
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
