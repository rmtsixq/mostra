import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'İletişim | Team Mostra',
    description: 'Team Mostra ile iletişime geçin. Sorularınız, işbirliği teklifleriniz veya destek için bize ulaşın.',
};

const socialLinks = [
    {
        name: 'Instagram',
        handle: '@teammostra',
        href: 'https://instagram.com/teammostra',
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        handle: '@teammostra',
        href: 'https://www.youtube.com/@teammostra',
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        handle: '@teammostra',
        href: 'https://tiktok.com/@teammostra',
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        handle: 'Team Mostra',
        href: 'https://www.linkedin.com/company/team-mostra-tm/',
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp Topluluğu',
        handle: 'Katılın',
        href: 'https://chat.whatsapp.com/D0xFG9POTbu81gInYxnON8',
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
];

export default function IletisimPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>İletişim</span>
                    <h1>Bizimle <span className={styles.highlight}>İletişime Geçin</span></h1>
                    <p>
                        Sorularınız, işbirliği teklifleriniz veya bize destek olmak için ulaşabilirsiniz.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            <h2>Mesaj Gönderin</h2>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Adınız</label>
                                        <input type="text" id="name" name="name" placeholder="Adınızı girin" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">E-posta</label>
                                        <input type="email" id="email" name="email" placeholder="ornek@email.com" required />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Konu</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Konu seçin</option>
                                        <option value="sponsorship">Sponsorluk</option>
                                        <option value="collaboration">İşbirliği</option>
                                        <option value="join">Ekibe Katılım</option>
                                        <option value="question">Genel Soru</option>
                                        <option value="other">Diğer</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Mesajınız</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Mesajınızı yazın..."
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Gönder
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialCard}>
                            <h2>Bizi Takip Edin</h2>
                            <p>Sosyal medya hesaplarımızdan bize ulaşabilir, son gelişmeleri takip edebilirsiniz.</p>

                            <div className={styles.socialList}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialItem}
                                    >
                                        <div className={styles.socialIcon}>{social.icon}</div>
                                        <div className={styles.socialInfo}>
                                            <span className={styles.socialName}>{social.name}</span>
                                            <span className={styles.socialHandle}>{social.handle}</span>
                                        </div>
                                        <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className={styles.quickLinksSection}>
                <div className={styles.container}>
                    <div className={styles.quickLinksGrid}>
                        <Link href="/destek" className={styles.quickLinkCard}>
                            <div className={styles.quickLinkIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </div>
                            <h3>Bize Destek Olun</h3>
                            <p>Sponsorluk ve bağış seçenekleri</p>
                        </Link>
                        <a
                            href="https://forms.gle/XGdHgGvQwPiRS72k8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.quickLinkCard}
                        >
                            <div className={styles.quickLinkIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <line x1="20" y1="8" x2="20" y2="14" />
                                    <line x1="23" y1="11" x2="17" y2="11" />
                                </svg>
                            </div>
                            <h3>Ekibe Katılın</h3>
                            <p>Lise ve üniversite başvuruları</p>
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdZfPkMyriHvAXWGSGRU-GmADjUqJWG8DfztdbH0kSDCgtRWA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.quickLinkCard}
                        >
                            <div className={styles.quickLinkIcon}>
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4M12 8h.01" />
                                </svg>
                            </div>
                            <h3>Mentor Olun</h3>
                            <p>Tecrübenizi paylaşın</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
