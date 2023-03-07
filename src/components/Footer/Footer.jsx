import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/teammostra', icon: 'instagram' },
    { name: 'YouTube', href: 'https://www.youtube.com/@teammostra', icon: 'youtube' },
    { name: 'TikTok', href: 'https://tiktok.com/@teammostra', icon: 'tiktok' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/team-mostra-tm/', icon: 'linkedin' },
];

const footerLinks = {
    hakkimizda: [
        { name: 'Hikayemiz', href: '/hakkimizda' },
        { name: 'Misyon & Vizyon', href: '/hakkimizda#misyon' },
        { name: 'Ekibimiz', href: '/hakkimizda#ekip' },
    ],
    projeler: [
        { name: 'Tüm Projeler', href: '/projeler' },
        { name: 'FRC 2025', href: '/yarisma/frc-2025' },
        { name: 'Elektrikli Araç', href: '/projeler/elektrikli-arac' },
    ],
    kaynaklar: [
        { name: 'Blog', href: '/blog' },
        { name: 'Podcast', href: '/podcast' },
        { name: 'Kitaplarımız', href: '/kitaplar' },
        { name: 'Eğitimler', href: '/egitimler' },
    ],
    iletisim: [
        { name: 'Bize Ulaşın', href: '/iletisim' },
        { name: 'Destek Ol', href: '/destek' },
        { name: 'Sponsor Ol', href: '/destek#sponsor' },
    ],
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    {/* Brand Section */}
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/images/mostralogo-yesil.png"
                                alt="Team Mostra"
                                width={50}
                                height={50}
                            />
                            <span>Team Mostra</span>
                        </Link>
                        <p className={styles.tagline}>
                            Robotik, Elektrikli Araçlar ve Otonom Teknoloji alanlarında
                            geleceği inşa eden bir takım.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                >
                                    <SocialIcon name={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className={styles.linksGrid}>
                        <div className={styles.linkSection}>
                            <h4>Hakkımızda</h4>
                            <ul>
                                {footerLinks.hakkimizda.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkSection}>
                            <h4>Projeler</h4>
                            <ul>
                                {footerLinks.projeler.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkSection}>
                            <h4>Kaynaklar</h4>
                            <ul>
                                {footerLinks.kaynaklar.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkSection}>
                            <h4>İletişim</h4>
                            <ul>
                                {footerLinks.iletisim.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Team Mostra. Tüm hakları saklıdır.
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link href="/gizlilik">Gizlilik Politikası</Link>
                        <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ name }) {
    switch (name) {
        case 'instagram':
            return (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>
            );
        case 'youtube':
            return (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        default:
            return null;
    }
}
