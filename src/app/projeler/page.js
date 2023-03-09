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
    {
        id: 'spinalight',
        title: 'Spinalight',
        category: 'Sağlık Teknolojileri',
        description: 'Gerçek zamanlı olarak duruşunuzu takip eden ve daha sağlıklı alışkanlıklar kazanmanızı sağlayan giyilebilir teknoloji.',
        image: '/images/spinalight.png',
        technologies: ['Giyilebilir Teknoloji', 'Sensörler', 'Mobil Uygulama'],
        featured: true,
        link: 'https://spinalight.com',
    },
    {
        id: 'tornavida',
        title: 'Tornavida (3D CAD Tasarım)',
        category: 'Mekanik Tasarım',
        description: 'Ergonomik kullanım sağlayan CAD ortamında modellenmiş tornavida tasarımı.',
        image: '/images/tornavida.png',
        technologies: ['CAD', 'Mekanik Tasarım', '3D Modelleme'],
        featured: true,
        link: 'https://a360.co/4rgGbnH',
    },
    {
        id: 'egitici-kit',
        title: 'Eğitici Kit Projesi (Matkap Kiti & Filament Makinesi)',
        category: 'Eğitim',
        description: 'Öğrenciler için pratik üretim ve geri dönüşüm sağlayan 3D yazıcı kitleri.',
        image: '/images/proj_filament_makinesi.png',
        technologies: ['3D Baskı', 'Geri Dönüşüm', 'Mekanik'],
        featured: true,
    },
    {
        id: 'toplumsal-etki',
        title: 'Toplumsal Etki (Engelsiz Mostra & LÖSEV)',
        category: 'Sosyal Sorumluluk',
        description: 'Lösemili çocuklara ve engelli bireylere yönelik teknolojiyle destek projeleri.',
        image: '/images/proj_corbada_tuzun_olsun.png',
        technologies: ['Sosyal İnovasyon', 'Topluluk'],
        featured: true,
    },
    {
        id: 'mentorluk',
        title: 'Zeytinburnu FLL & Tanzanya FTC Mentörlüğü',
        category: 'Mentörlük',
        description: 'Uluslararası alanda farklı takımlara robotik mentörlüğü sağlanması.',
        image: '/images/proj_deneyim_paylasimi_ve_mentorluk.png',
        technologies: ['Eğitim', 'Uluslararası', 'FRC/FTC/FLL'],
        featured: true,
    },
    {
        id: 'stem-egitim',
        title: 'Gençlik Merkezlerinde STEM Eğitimleri',
        category: 'Eğitim',
        description: 'Gençlik merkezlerindeki öğrencilere yönelik temel STEM ve robotik eğitimleri.',
        image: '/images/proj_anaokulu_ilkokul_ve_ortaokul_egitimleri.png',
        technologies: ['STEM', 'Eğitim', 'Robotik'],
        featured: true,
    },
    {
        id: 'okullarda-atolye',
        title: 'Okullarla Atölye Çalışmaları',
        category: 'Eğitim',
        description: 'Okullara giderek gerçekleştirilen uygulamalı mühendislik atölyeleri.',
        image: '/images/proj_okullarda_atolye.jpeg',
        technologies: ['Atölye', 'Uygulamalı Eğitim'],
        featured: true,
    },
    {
        id: 'mostra-topluluk',
        title: 'Mostra Topluluk & Sosyal Girişimleri',
        category: 'Topluluk',
        description: 'Takım içi ve dışı sosyal girişim, farkındalık projeleri.',
        image: '/images/proj_mostra_topluluk.png',
        technologies: ['Girişimcilik', 'Ekip Çalışması'],
        featured: true,
    },
    {
        id: 'teknoloji-zirvesi',
        title: 'Teknoloji Zirvesi Organizasyonu',
        category: 'Etkinlik',
        description: 'Alanında uzman kişilerin ağırlandığı geniş çaplı teknoloji zirvesi.',
        image: '/images/proj_diyalog_cafe.png',
        technologies: ['Organizasyon', 'İletişim'],
        featured: true,
    },
    {
        id: 'mobil-oyun',
        title: 'Mostra 2D Mobil Oyun',
        category: 'Yazılım',
        description: 'Takımın serüvenlerini konu alan 2D eğitici ve eğlenceli mobil oyun.',
        image: '/images/proj_2d_mobil_oyun.png',
        technologies: ['Unity', 'C#', 'Oyun Tasarımı'],
        featured: true,
    },
    {
        id: 'firsthub',
        title: 'Firsthub Platform Geliştirme',
        category: 'Dijital',
        description: 'FIRST takımlarını bir araya getiren dijital inovasyon platformu.',
        image: '/images/proj_first_hub.png',
        technologies: ['Web Geliştirme', 'Veritabanı', 'API'],
        featured: true,
    },
    {
        id: 'bilim-merkezi',
        title: 'Üsküdar Bilim Merkezi Sergisi',
        category: 'Etkinlik',
        description: 'Bilim merkezindeki fuar alanında projelerin sergilendiği etkileşimli stand.',
        image: '/images/proj_bilim_sergisi___uskudar_bilim_merkezi.png',
        technologies: ['Sunum', 'Teknoloji İletişimi'],
        featured: true,
    },
    {
        id: 'kadin-muhendis',
        title: 'Kadın Mühendis Röportaj Serisi',
        category: 'Sosyal Sorumluluk',
        description: 'Sektördeki kadın mühendislerle yapılan, ilham verici röportajlar.',
        image: '/images/proj_kadin_muhendis_roportaj_serileri.png',
        technologies: ['Medya', 'İçerik Üretimi'],
        featured: true,
    },
    {
        id: 'youtube-shorts',
        title: 'YouTube Shorts: 3D Yazdırılabilir Aletler',
        category: 'Medya',
        description: '3D yazıcı ile üretilen aletlerin çalışma mantığını anlatan video serisi.',
        image: '/images/proj_3d_printer.png',
        technologies: ['Video Kurgu', '3D Tasarım'],
        featured: true,
    },
    {
        id: 'adhd-blog',
        title: 'ADHD Blog & Bilim Dergisi',
        category: 'Dijital',
        description: 'Farkındalık yaratan eğitim içerikleri ve bilim dergisi.',
        image: '/images/proj_17_kuresel_amac_serisi.png',
        technologies: ['İçerik Üretimi', 'Tasarım'],
        featured: true,
    },
    {
        id: 'cantada-teknik',
        title: 'Çantada Teknik Eğitim Serisi',
        category: 'Eğitim',
        description: 'Gittiğimiz her yere götürdüğümüz eğitim materyalleri serisi.',
        image: '/images/proj_cad_egitimi.png',
        technologies: ['Eğitim', 'Yaygınlaştırma'],
        featured: true,
    },
    {
        id: 'podcast',
        title: 'Podcast Bölümleri',
        category: 'Medya',
        description: 'Teknoloji, mühendislik ve takım ruhunu konuştuğumuz podcast.',
        image: '/images/proj_kadin_muhendis_roportaj_serileri.png',
        technologies: ['Medya', 'Kurgu', 'Ses Tasarımı'],
        featured: true,
    },
    {
        id: 'is-guvenligi',
        title: 'İş Güvenliği Eğitimi',
        category: 'Eğitim',
        description: 'Güvenli atölye ve çalışma prensipleri üzerine verilen düzenli eğitimler.',
        image: '/images/team_members_sitting_in_a_circle_a_girl_is_taking_selfie_with_everyone.jpeg',
        technologies: ['Eğitim', 'Güvenlik'],
        featured: true,
    },
    {
        id: 'kitap-projesi',
        title: 'Kitap Projesi',
        category: 'Dijital',
        description: 'Takımımızın hikayesini ve vizyonunu anlattığımız yazılı eserimiz.',
        image: '/images/mucit_kaplumbaga_cover.png',
        technologies: ['İçerik Üretimi', 'Editörlük'],
        featured: true,
    },
    {
        id: 'ogretmen-semineri',
        title: 'Öğretmen Online Seminer',
        category: 'Eğitim',
        description: 'Öğretmenlere yönelik teknoloji ve STEM odaklı online seminerler.',
        image: '/images/proj_canva_egitimi.png',
        technologies: ['Etkinlik', 'Dijital Sunum'],
        featured: true,
    },
];

const categories = ['Tümü', 'Robotik', 'Yazılım', 'Eğitim', 'Sosyal Sorumluluk', 'Dijital', 'Etkinlik', 'Sağlık Teknolojileri', 'Mekanik Tasarım', 'Mentörlük', 'Topluluk', 'Medya'];

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
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                            Bağlantıya Git
                                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proof Files Section */}
            <section className={styles.proofSection}>
                <div className={styles.container}>
                    <div className={styles.proofCard}>
                        <div className={styles.proofInfo}>
                            <span className={styles.proofLabel}>Belgeleme</span>
                            <h2>Projelerimizi <span className={styles.highlight}>Detaylı İncelemek İçin</span></h2>
                            <p>Tüm teknik dokümanlarımıza, raporlarımıza ve proje detaylarımıza buradan ulaşabilirsiniz.</p>
                        </div>
                        <a
                            href="https://drive.google.com/drive/folders/1gUmlZ2aq5x4UjOc3wOhdgWqIswsLao60?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.proofButton}
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Klasörü Görüntüle
                        </a>
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
