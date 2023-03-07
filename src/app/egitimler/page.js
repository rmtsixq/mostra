import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Eğitimler | Team Mostra',
    description: 'Team Mostra tarafından hazırlanan robotik, yazılım ve mühendislik eğitimleri.',
};

const trainings = [
    {
        id: 'canva-tasarim',
        title: 'Canva ile Görsel Tasarım',
        category: 'Tasarım',
        level: 'Başlangıç',
        description: 'Sosyal medya, sunum ve marka kimliği için profesyonel tasarım becerileri.',
        duration: '4 Hafta',
    },
    {
        id: 'cad-egitimi',
        title: 'CAD Modelleme',
        category: 'Mühendislik',
        level: 'Orta',
        description: 'Onshape ve Fusion 360 ile 3D modelleme teknikleri ve teknik çizim.',
        duration: '8 Hafta',
    },
    {
        id: 'yazilim-egitimi',
        title: 'Yazılım ve Robotik Kodlama',
        category: 'Yazılım',
        level: 'Orta',
        description: 'Java ve Python ile algoritma kurma ve robotik kontrol sistemleri.',
        duration: '10 Hafta',
    },
    {
        id: 'adhd-cad',
        title: 'ADHD Dostu CAD Eğitimi',
        category: 'Eğitim',
        level: 'Özel',
        description: 'Odaklanma dostu yöntemlerle 3D tasarım ve modelleme eğitimi.',
        duration: '6 Hafta',
    },
    {
        id: 'adhd-yazilim',
        title: 'ADHD Dostu Yazılım',
        category: 'Eğitim',
        level: 'Özel',
        description: 'Görsel odaklı ve interaktif kodlama teknikleri ile yazılım dünyasına giriş.',
        duration: '6 Hafta',
    },
    {
        id: 'online-seminer',
        title: 'Öğretmen Online Seminerleri',
        category: 'Topluluk',
        level: 'İleri',
        description: 'Eğitimcilere yönelik STEM ve robotik eğitim metodolojileri.',
        duration: 'Programlı',
    },
];

export default function EgitimlerPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/two_people_looking_to_a_camera_while_working_on_the_3d_printer_probably_for_frc.jpeg"
                        alt="Team Mostra Eğitim"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.label}>Eğitimler</span>
                    <h1>Öğren, <span className={styles.highlight}>İnşa Et</span>, İlham Ver</h1>
                    <p>
                        Robotik, mühendislik ve yazılım alanlarında kapsamlı eğitim programlarımız.
                    </p>
                </div>
            </section>

            {/* Trainings Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.trainingsGrid}>
                        {trainings.map((training) => (
                            <div key={training.id} className={styles.trainingCard}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.category}>{training.category}</span>
                                    <span className={styles.level}>{training.level}</span>
                                </div>
                                <h3>{training.title}</h3>
                                <p>{training.description}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.duration}>
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        {training.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className={styles.resourcesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Kaynaklar</h2>
                        <p>Öğrenme yolculuğunuzda size yardımcı olacak ek kaynaklar.</p>
                    </div>
                    <div className={styles.resourcesGrid}>
                        <a href="/kitaplar" className={styles.resourceCard}>
                            <div className={styles.resourceIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                                </svg>
                            </div>
                            <h4>Kitaplarımız</h4>
                            <p>Çocuklar için robotik kitapları</p>
                        </a>
                        <a href="/podcast" className={styles.resourceCard}>
                            <div className={styles.resourceIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                                </svg>
                            </div>
                            <h4>Podcast</h4>
                            <p>Beyond The Build serisi</p>
                        </a>
                        <a
                            href="https://www.youtube.com/@teammostra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resourceCard}
                        >
                            <div className={styles.resourceIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                                    <polygon points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" fill="#0a0a0a" />
                                </svg>
                            </div>
                            <h4>YouTube</h4>
                            <p>Video eğitimlerimiz</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
