import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Projelerimiz | Team Mostra',
    description: 'Team Mostra projeleri: FRC robotları, elektrikli araçlar, otonom sistemler ve daha fazlası.',
};

const projects = [
    {
        id: 'frc-robot-2026',
        title: 'FRC Robot 2026',
        category: 'Robotik',
        description: 'FIRST Robotics Competition 2026 sezonu için geliştirdiğimiz yarışma robotu.',
        image: '/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg',
        technologies: ['Mekanik', 'Elektronik', 'Yazılım', 'CAD'],
        featured: true,
    },
    {
        id: 'elektrikli-arac',
        title: 'Elektrikli Araç Projesi',
        category: 'Elektrikli Araçlar',
        description: 'TÜBİTAK Efficiency Challenge için geliştirilen enerji verimli elektrikli araç.',
        image: '/images/full_car_view_from_front_with_5_people_looking.jpeg',
        technologies: ['Elektrik Motorları', 'Batarya Sistemleri', 'Aerodinamik'],
        featured: true,
    },
    {
        id: 'frc-robot-closeup',
        title: 'FRC Mekanik Sistemler',
        category: 'Robotik',
        description: 'Robot alt sistemleri: toplama, atma, tırmanma mekanizmaları.',
        image: '/images/frc_robot_close_up.jpeg',
        technologies: ['Mekanik Tasarım', '3D Baskı', 'CNC'],
        featured: false,
    },
    {
        id: 'roboquest',
        title: 'RoboQuest: Robotun Serüvenleri',
        category: 'Yazılım',
        description: 'Çocuklara robotik öğretmeyi amaçlayan eğitici oyun projesi.',
        image: '/images/roboquest.png',
        technologies: ['Game Development', 'Eğitim Teknolojileri'],
        featured: false,
    },
    {
        id: 'rehberai',
        title: 'RehberAI',
        category: 'Yapay Zeka',
        description: 'Yaşlılara yönelik sesli ve yazılı yapay zeka asistan uygulaması.',
        image: '/images/rehberai.png',
        technologies: ['AI/ML', 'NLP', 'Voice Recognition'],
        featured: false,
    },
    {
        id: 'mostra-ai',
        title: 'Mostra AI',
        category: 'Yapay Zeka',
        description: 'Team Mostra için geliştirilen yapay zeka asistan.',
        image: '/images/mostra_ai.png',
        technologies: ['LLM', 'RAG', 'Chatbot'],
        featured: false,
    },
];

const categories = ['Tümü', 'Robotik', 'Elektrikli Araçlar', 'Yapay Zeka', 'Yazılım'];

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

                    {/* Regular Projects */}
                    <h3 className={styles.sectionTitle}>Diğer Projeler</h3>
                    <div className={styles.projectsGrid}>
                        {projects.filter(p => !p.featured).map((project) => (
                            <div key={project.id} className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.projectContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className={styles.techTags}>
                                        {project.technologies.slice(0, 2).map((tech) => (
                                            <span key={tech} className={styles.tagSmall}>{tech}</span>
                                        ))}
                                    </div>
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
