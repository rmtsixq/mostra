import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Projelerimiz | Team Mostra',
    description: 'Team Mostra projeleri: FRC robotları, elektrikli araçlar, otonom sistemler ve daha fazlası.',
};

const projects = [
    {
        id: 'frc-robot-2025',
        title: 'FRC Robot 2025',
        category: 'Robotik',
        description: 'FIRST Robotics Competition 2025 sezonu için geliştirdiğimiz yarışma robotu.',
        image: '/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg',
        technologies: ['Mekanik', 'Elektronik', 'Yazılım', 'CAD'],
        featured: true,
    },
    {
        id: 'elektrikli-arac',
        title: 'Elektrikli Araç Projesi',
        category: 'Sürdürülebilirlik',
        description: 'TÜBİTAK Efficiency Challenge için geliştirilen enerji verimli elektrikli araç.',
        image: '/images/full_car_view_from_front_with_5_people_looking.jpeg',
        technologies: ['Elektrik Motorları', 'Batarya Sistemleri', 'Aerodinamik'],
        featured: true,
    },
];

const otherActivities = [
    { title: 'Eğitici Kit Projesi (Matkap Kiti & Filament Makinesi)', category: 'Eğitim' },
    { title: 'Toplumsal Etki (Engelsiz Mostra & LÖSEV)', category: 'Sosyal Sorumluluk' },
    { title: 'Zeytinburnu FLL & Tanzanya FTC Mentörlüğü', category: 'Mentörlük' },
    { title: 'Gençlik Merkezlerinde STEM Eğitimleri', category: 'Eğitim' },
    { title: 'Okullarla Atölye Çalışmaları (3 Ortaokul)', category: 'Eğitim' },
    { title: 'Mostra Topluluk & Sosyal Girişimleri', category: 'Topluluk' },
    { title: 'Teknoloji Zirvesi Organizasyonu', category: 'Etkinlik' },
    { title: 'ADHD Blog & Bilim Dergisi Yayını', category: 'Dijital' },
    { title: 'Podcast: Teknoloji ve Gelecek', category: 'Medya' },
    { title: 'Mostra 2D Mobil Oyun Geliştirme', category: 'Yazılım' },
    { title: 'Yaşlılar için Yapay Zeka Uygulaması', category: 'Yazılım' },
    { title: 'Firsthub Platform Geliştirme', category: 'Dijital' },
    { title: 'Üsküdar Bilim Merkezi Sergisi', category: 'Etkinlik' },
    { title: 'Kadın Mühendis Röportaj Serisi', category: 'Sosyal Sorumluluk' },
    { title: 'YouTube Shorts: 3D Yazdırılabilir Aletler', category: 'Medya' },
    { title: 'Çantada Teknik Eğitim Serisi', category: 'Eğitim' },
];

const categories = ['Tümü', 'Robotik', 'Yazılım', 'Eğitim', 'Sosyal Sorumluluk', 'Dijital', 'Etkinlik'];

export default function ProjelerPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Projelerimiz</span>
                    <h1>Hayallerimizi<br /><span className={styles.highlight}>Gerçeğe Dönüştürüyoruz</span></h1>
                    <p>
                        Robotik, yapay zeka ve sürdürülebilir teknolojiler alanında geliştirdiğimiz projeler.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className={styles.projectsSection}>
                <div className={styles.container}>
                    {/* Featured Projects */}
                    <div className={styles.featuredGrid}>
                        {projects.filter(p => p.featured).map((project) => (
                            <div key={project.id} className={styles.featuredCard}>
                                <div className={styles.cardImage}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.cardOverlay}></div>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className={styles.techTags}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.tag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed List for Projects without Images */}
                    <h3 className={styles.sectionTitle}>Diğer Çalışmalar ve Girişimler</h3>
                    <div className={styles.otherActivitiesGrid}>
                        {otherActivities.map((activity, idx) => (
                            <div key={idx} className={styles.activityItem}>
                                <div className={styles.activityDot}></div>
                                <div className={styles.activityContent}>
                                    <span className={styles.activityCategory}>{activity.category}</span>
                                    <h4>{activity.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Bir Proje Fikriniz mi Var?</h2>
                        <p>Birlikte çalışmak ve yenilikçi projeler geliştirmek için bizimle iletişime geçin.</p>
                        <Link href="/iletisim" className={styles.ctaButton}>
                            İletişime Geçin
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
