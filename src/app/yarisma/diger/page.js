import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Diğer Yarışmalar | Team Mostra',
    description: 'Team Mostra elektrikli araç, otonom sistemler ve diğer yarışma projeleri.',
};

const competitions = [
    {
        id: 'efficiency-challenge',
        name: 'Teknofest Efficiency Challenge',
        category: 'Elektrikli Araç',
        description: 'Enerji verimli elektrikli araç tasarımı ve yarışması. Takımımız her yıl bu yarışmada yer almaktadır.',
        image: '/images/full_car_view_from_front_with_5_people_looking.jpeg',
        achievements: ['2. Ödül', 'En İyi Tasarım'],
        status: 'Aktif',
    },
    {
        id: 'robotaksi',
        name: 'Teknofest Robotaksi Binek Otonom Araç Yarışması',
        category: 'Otonom Sistemler',
        description: 'Tam otonom sürüş algoritmaları ve araç kontrol sistemleri geliştirdiğimiz zorlu bir parkur yarışı.',
        image: '/images/robotaksi_new.jpg',
        achievements: [],
        status: 'Aktif',
    },
    {
        id: 'robots-battle-league',
        name: 'Türkiye Robots Battle League',
        category: 'Robotik',
        description: 'Yüksek mühendislik ve strateji gerektiren savaş robotları ligi.',
        image: '/images/trbl_official.jpeg',
        achievements: [],
        status: 'Aktif',
    },
    {
        id: 'entrepreneurship',
        name: 'Teknofest Girişimcilik Yarışması',
        category: 'Girişimcilik',
        description: 'Teknolojik projelerimizi iş modellerine dönüştürdüğümüz ve ticarileşme potansiyelini ölçtüğümüz yarışma.',
        image: '/images/entrepreneurship.jpeg',
        achievements: [],
        status: 'Aktif',
    },
    {
        id: 'bosch-future-mobility',
        name: 'Bosch Future Mobility Challenge',
        category: 'Otonom Sistemler',
        description: 'Otonom sürüş algoritmaları ve akıllı ulaşım sistemleri geliştirdiğimiz uluslararası bir yarışma.',
        achievements: [],
        status: 'Aktif',
    },
];

export default function DigerYarismalarPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/full_car_view_from_front_with_5_people_looking.jpeg"
                        alt="Elektrikli Araç Projesi"
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
                    <span className={styles.label}>Diğer Yarışmalar</span>
                    <h1>Elektrikli Araçlar ve <span className={styles.highlight}>Otonom Sistemler</span></h1>
                    <p>
                        FRC'nin yanı sıra elektrikli araç ve otonom teknolojiler alanında da yarışıyoruz.
                    </p>
                </div>
            </section>

            {/* Competitions Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.competitionsGrid}>
                        {competitions.map((comp) => (
                            <div key={comp.id} className={styles.competitionCard}>
                                {comp.image && (
                                    <div className={styles.cardImage}>
                                        <Image
                                            src={comp.image}
                                            alt={comp.name}
                                            fill
                                            className={styles.image}
                                        />
                                        <span className={`${styles.statusBadge} ${styles[comp.status.toLowerCase()]}`}>
                                            {comp.status}
                                        </span>
                                    </div>
                                )}
                                <div className={styles.cardContent}>
                                    <span className={styles.category}>{comp.category}</span>
                                    <h3>{comp.name}</h3>
                                    <p>{comp.description}</p>
                                    {comp.achievements.length > 0 && (
                                        <div className={styles.achievements}>
                                            {comp.achievements.map((ach, idx) => (
                                                <span key={idx} className={styles.achievementTag}>{ach}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Electric Vehicle Section */}
            <section className={styles.evSection}>
                <div className={styles.container}>
                    <div className={styles.evGrid}>
                        <div className={styles.evContent}>
                            <span className={styles.label}>Elektrikli Araç Projemiz</span>
                            <h2>Sürdürülebilir <span className={styles.highlight}>Mobilite</span></h2>
                            <p>
                                Elektrikli araç projemiz, enerji verimliliği ve sürdürülebilir ulaşım
                                konularında pratik deneyim kazanmamızı sağlıyor. Takım olarak tasarladığımız
                                ve ürettiğimiz araç, ulusal yarışmalarda Türkiye'yi temsil ediyor.
                            </p>
                            <p>
                                Projemiz; aerodinamik tasarım, batarya yönetim sistemleri, elektrik motor
                                kontrolü ve hafif malzeme kullanımı gibi kritik mühendislik konularını kapsıyor.
                            </p>
                        </div>
                        <div className={styles.evImages}>
                            <div className={styles.evImageLarge}>
                                <Image
                                    src="/images/car_is_in_side_view_they_are_sitting_front_of_it_looking_at_camera.jpeg"
                                    alt="Elektrikli Araç Yan Görünüm"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.evImageSmall}>
                                <Image
                                    src="/images/front_car_ppic_with_5_people_working_on_great_car_view.jpeg"
                                    alt="Araç Detay"
                                    fill
                                    className={styles.image}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Projelerimize Sponsor Olun</h2>
                        <p>Elektrikli araç ve otonom sistemler projelerimizi destekleyin.</p>
                        <Link href="/destek" className={styles.ctaButton}>
                            Destek Seçenekleri
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
