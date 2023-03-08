import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Kitaplarımız | Team Mostra',
    description: 'Team Mostra tarafından yazılan ve yayınlanan çocuk kitapları. 6 farklı dilde ücretsiz erişim.',
};

const books = [
    {
        id: 'mucit-kaplumbaga-tr',
        title: 'Mucit Kaplumbağa ve Serüvenleri',
        language: 'Türkçe',
        description: 'Çocuklara robotik ve teknoloji sevgisi aşılamak için hazırladığımız hikaye kitabı serisi.',
        featured: true,
        series: [
            { name: 'Seri 1 - Mucit Kaplumbağa', pdfUrl: 'https://6500d809762a4dbb96ec0589df6d9d33.elf.site/' },
            { name: 'Seri 2 - Kaybolan Mercanlar', pdfUrl: 'https://drive.google.com/file/d/1IE1X0E8WBr_HNgavxnQmji0dzfh-Yw0B/view?usp=sharing' },
            { name: 'Seri 3 - Ormanda Kaybolan Yol', pdfUrl: 'https://drive.google.com/file/d/1hKokJV3UXwcQRZieYjmyiXqPzx_uEm7g/view?usp=drive_link' },
            { name: 'Seri 4 - Deredeki Sorunun Çözümü', pdfUrl: 'https://drive.google.com/file/d/1ycKNf_pcHVbd-D9qqSQahu6uEqXbCYad/view?usp=drive_link' },
            { name: 'Seri 5 - Kayıp Ateş Böcekleri', pdfUrl: 'https://drive.google.com/file/d/1BAt4g-Ph0taTQE8JbFNXHuqpiUgh6Zp9/view?usp=drive_link' }
        ]
    },
    {
        id: 'inventor-tortoise-en',
        title: 'Inventor Tortoise and His Adventures',
        language: 'English',
        description: 'A story book designed to inspire children about robotics and technology.',
        pdfUrl: 'https://78deefc70a0946d9b37803f48af8422d.elf.site/',
        featured: false,
    },
    {
        id: 'tobi-la-tortue-fr',
        title: 'Tobi la Tortue Inventrice et ses Aventures',
        language: 'Français',
        description: 'Un livre d\'histoires pour inspirer les enfants sur la robotique.',
        pdfUrl: 'https://081d60e84fca46e2a66f00335c108582.elf.site/',
        featured: false,
    },
    {
        id: 'tartaruga-inventora-pt',
        title: 'A Tartaruga Inventora e suas Aventuras',
        language: 'Português',
        description: 'Um livre de histórias para inspirar crianças sobre robótica.',
        pdfUrl: 'https://c6bba7902c95439a8cedc289032bec16.elf.site/',
        featured: false,
    },
    {
        id: 'tortuga-inventora-es',
        title: 'La Tortuga Inventora y sus Aventuras',
        language: 'Español',
        description: 'Un libro de cuentos para inspirar a los niños sobre la robótica.',
        pdfUrl: 'https://b7e094e7e76f4fe1ba2960d014c2e30e.elf.site/',
        featured: false,
    },
    {
        id: 'erfinder-schildkrote-de',
        title: 'Die Erfinder-Schildkröte und ihre Abenteuer',
        language: 'Deutsch',
        description: 'Ein Bilderbuch, um Kinder für Robotik zu begeistern.',
        pdfUrl: 'https://1d9e8262c9fe40fc9cdbd589b67a96cd.elf.site/',
        featured: false,
    },
    {
        id: 'arabic-book',
        title: 'السلحفاة المخترع ومغامراته',
        language: 'العربية',
        description: 'كتاب قصص لإلهام الأطفال حول الروبوتات والتكنولوجيا.',
        pdfUrl: 'https://09df0e1cc2e54ab483f2586775c1f55a.elf.site/',
        featured: false,
    },
];

export default function KitaplarPage() {
    const featuredBook = books.find(b => b.featured);
    const otherBooks = books.filter(b => !b.featured);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Kitaplarımız</span>
                    <h1>Hayallere <span className={styles.highlight}>İlham Veren</span> Hikayeler</h1>
                    <p>
                        Çocuklara robotik ve teknoloji sevgisi aşılamak için hazırladığımız kitaplar,
                        6 farklı dilde ücretsiz erişime açık.
                    </p>
                </div>
            </section>

            {/* Featured Book */}
            <section className={styles.featuredSection}>
                <div className={styles.container}>
                    <div className={styles.featuredCard}>
                        <div className={styles.featuredImage}>
                            <div className={styles.bookCoverImage}>
                                <Image
                                    src="/images/mucit_kaplumbaga_cover.png"
                                    alt={featuredBook.title}
                                    fill
                                    className={styles.actualCover}
                                />
                            </div>
                        </div>
                        <div className={styles.featuredContent}>
                            <span className={styles.badge}>Öne Çıkan</span>
                            <h2>{featuredBook.title}</h2>
                            <span className={styles.language}>{featuredBook.language}</span>
                            <p>{featuredBook.description}</p>

                            {featuredBook.series ? (
                                <div className={styles.seriesGrid}>
                                    {featuredBook.series.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.seriesBtn}
                                        >
                                            <span>{item.name}</span>
                                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <a
                                    href={featuredBook.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.readBtn}
                                >
                                    Şimdi Oku
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Books */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Tüm Dillerde</h2>
                        <p>Kitabımızı kendi diliizde okuyun veya indirin.</p>
                    </div>
                    <div className={styles.booksGrid}>
                        {otherBooks.map((book) => (
                            <a
                                key={book.id}
                                href={book.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.bookCard}
                            >
                                <div className={styles.bookIcon}>
                                    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                                    </svg>
                                </div>
                                <div className={styles.bookInfo}>
                                    <h3>{book.title}</h3>
                                    <span className={styles.bookLang}>{book.language}</span>
                                </div>
                                <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Eğitim İçeriklerimizi Keşfedin</h2>
                        <p>Kitaplarımızın yanı sıra eğitim videolarımız ve atölye çalışmalarımız da mevcuttur.</p>
                        <a href="/egitimler" className={styles.ctaButton}>
                            Eğitimlere Git
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
