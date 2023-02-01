import Image from 'next/image';
import Link from 'next/link';
import styles from './SectionWorkshop.module.css';

export default function SectionWorkshop() {
    const images = [
        { src: '/images/cool_frc_mechanic_from_up.jpeg', alt: 'FRC mekanik çalışması' },
        { src: '/images/frc_team_working_on_smth.jpeg', alt: 'Takım çalışması' },
        { src: '/images/two_people_looking_to_a_camera_while_working_on_the_3d_printer_probably_for_frc.jpeg', alt: '3D printer çalışması' },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Atölyemiz</span>
                    <h2 className={styles.title}>
                        Fikirlerin Hayata<br />
                        <span className={styles.highlight}>Geçtiği Yer</span>
                    </h2>
                    <p className={styles.description}>
                        Atölyemiz, robotik projelerimizin kalbidir. Burada 3D yazıcılar, CNC makineleri,
                        elektronik çalışma istasyonları ve mekanik atölye ekipmanlarımızla hayallerimizi
                        gerçeğe dönüştürüyoruz.
                    </p>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M12 18v-6M9 15h6" />
                                </svg>
                            </div>
                            <div>
                                <h4>3D Üretim</h4>
                                <p>Modern 3D yazıcılarla prototipleme</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M12 1v6m0 6v10M4.22 4.22l4.24 4.24m7.08 7.08l4.24 4.24M1 12h6m6 0h10M4.22 19.78l4.24-4.24m7.08-7.08l4.24-4.24" />
                                </svg>
                            </div>
                            <div>
                                <h4>Mekanik Atölye</h4>
                                <p>Metal ve ahşap işleme kapasitesi</p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                                </svg>
                            </div>
                            <div>
                                <h4>Elektronik Lab</h4>
                                <p>PCB tasarım ve lehimleme</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/hakkimizda#atolye" className={styles.link}>
                        Atölyemizi Keşfedin
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className={styles.gallery}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
