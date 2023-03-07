import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Biz Kimiz | Team Mostra',
    description: 'Team Mostra\'nın hikayesi, misyonu, vizyonu ve ekip yapısı. Robotik, elektrikli araçlar ve otonom teknoloji alanında geleceği inşa ediyoruz.',
};

const teamValues = [
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Yenilikçilik',
        description: 'Sürekli öğrenme ve geliştirme kültürüyle yeni teknolojileri takip ediyoruz.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: 'Takım Ruhu',
        description: 'Birlikte daha güçlüyüz. Her başarı, ekip çalışmasının ürünüdür.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: 'Sürdürülebilirlik',
        description: 'Çevre dostu teknolojiler geliştirerek geleceğe katkı sağlıyoruz.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        title: 'Mükemmellik',
        description: 'Her projede en yüksek standartları hedefliyoruz.',
    },
];

const stats = [
    { number: '10396', label: 'FRC Takım Numarası' },
    { number: '50+', label: 'Aktif Üye' },
    { number: '10+', label: 'Proje' },
    { number: '2', label: 'Off-Season Ödülü' },
    { number: '5+', label: 'Farklı Yarışma' },
];

export default function HakkimizdaPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/frc_team_photo.jpeg"
                        alt="Team Mostra Ekibi"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.label}>Biz Kimiz</span>
                    <h1>Geleceğin Mühendislerini<br /><span className={styles.highlight}>Bugünden Yetiştiriyoruz</span></h1>
                    <p>
                        Team Mostra, robotik, elektrikli araçlar ve otonom teknolojiler alanında
                        çalışan, tutkulu gençlerden oluşan bir ekiptir.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <span className={styles.label}>Hikayemiz</span>
                            <h2>Bir Hayalden<br /><span className={styles.highlight}>Güçlü Bir Takıma</span></h2>
                            <p>
                                Team Mostra, teknolojiye olan tutkumuzu paylaşan bir grup öğrenci olarak yola çıktık.
                                Amacımız sadece yarışmalara katılmak değil, aynı zamanda öğrendiğimizi paylaşmak ve
                                topluma katkı sağlamaktı.
                            </p>
                            <p>
                                FRC 10396 takımı olarak Ümraniye Off-Season Şampiyonluğu ve Başakşehir Off-Season
                                Endüstriyel Tasarım Ödülü ile sezona damga vurduk. Zeytinburnu FLL ve Tanzanya FTC
                                mentörlüklerimiz, eğitim içeriklerimiz ve sosyal sorumluluk projelerimizle büyümeye
                                devam ediyoruz.
                            </p>
                            <p>
                                Atölyemizde sadece robot yapmıyoruz – liderlik, iletişim ve problem çözme becerilerini
                                geliştiriyoruz. Engelsiz Mostra ve kit projelerimizle teknolojiyi toplumun her kesimine
                                ulaştırıyoruz.
                            </p>
                        </div>
                        <div className={styles.storyImages}>
                            <div className={styles.storyImageLarge}>
                                <Image
                                    src="/images/very_cool_pic_of_the_frc_robot_with_5_people_from_little_bit_up.jpeg"
                                    alt="FRC Robot ve Takım"
                                    fill
                                    className={styles.storyImage}
                                />
                            </div>
                            <div className={styles.storyImageSmall}>
                                <Image
                                    src="/images/team_members_sitting_in_a_circle_a_girl_is_taking_selfie_with_everyone.jpeg"
                                    alt="Takım Anı"
                                    fill
                                    className={styles.storyImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.section} id="misyon">
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                            </div>
                            <h3>Misyonumuz</h3>
                            <p>
                                Genç yetenekleri teknoloji ve mühendislik alanlarında yetiştirmek,
                                onlara pratik deneyim ve liderlik becerileri kazandırmak. STEM eğitimini
                                yaygınlaştırarak topluma katkı sağlamak.
                            </p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>
                                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3>Vizyonumuz</h3>
                            <p>
                                Türkiye'nin önde gelen robotik ve teknoloji takımı olarak, uluslararası
                                arenada ülkemizi başarıyla temsil etmek. Geliştirdiğimiz projelerle
                                sürdürülebilir bir gelecek için ilham kaynağı olmak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>Değerlerimiz</span>
                        <h2>Bizi Biz Yapan <span className={styles.highlight}>İlkelerimiz</span></h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {teamValues.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.section} id="ekip">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.label}>Ekibimiz</span>
                        <h2>Birlikte <span className={styles.highlight}>Güçlüyüz</span></h2>
                        <p>
                            Farklı yetenekleri ve tutkuları bir araya getiren, dinamik ve yaratıcı bir ekibiz.
                        </p>
                    </div>
                    <div className={styles.teamImageGrid}>
                        <div className={styles.teamImageWrapper}>
                            <Image
                                src="/images/takımpic2.jpeg"
                                alt="Team Mostra Ekip Fotoğrafı"
                                fill
                                className={styles.teamImage}
                            />
                        </div>
                    </div>
                    <div className={styles.teamCta}>
                        <p>Ekibimize katılmak ister misiniz?</p>
                        <div className={styles.teamCtaButtons}>
                            <a
                                href="https://forms.gle/XGdHgGvQwPiRS72k8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaPrimary}
                            >
                                Lise Başvuru Formu
                            </a>
                            <a
                                href="https://forms.gle/5e47ciUNhPwpM7C77"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaOutline}
                            >
                                Üniversite Başvuru Formu
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
