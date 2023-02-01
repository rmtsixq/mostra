'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Biz Kimiz', href: '/hakkimizda' },
    { name: 'Projelerimiz', href: '/projeler' },
    {
        name: 'Yarışmalar',
        href: '/yarisma',
        subLinks: [
            { name: 'FRC 2026', href: '/yarisma/frc-2026' },
            { name: 'Önceki Sezonlar', href: '/yarisma/onceki-sezonlar' },
            { name: 'Diğer Yarışmalar', href: '/yarisma/diger' },
        ]
    },
    { name: 'Eğitimler', href: '/egitimler' },
    { name: 'Blog', href: '/blog' },

    { name: 'Kitaplarımız', href: '/kitaplar' },
    { name: 'Podcast', href: '/podcast' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/mostralogo-beyaz.png"
                        alt="Team Mostra"
                        width={45}
                        height={45}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.name}
                            className={styles.navItem}
                            onMouseEnter={() => link.subLinks && handleDropdownEnter(index)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link href={link.href} className={styles.navLink}>
                                {link.name}
                                {link.subLinks && (
                                    <svg className={styles.chevron} viewBox="0 0 24 24" width="14" height="14">
                                        <path fill="currentColor" d="M7 10l5 5 5-5z" />
                                    </svg>
                                )}
                            </Link>

                            {link.subLinks && activeDropdown === index && (
                                <div className={styles.dropdown}>
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                            key={subLink.name}
                                            href={subLink.href}
                                            className={styles.dropdownLink}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA Buttons */}
                <div className={styles.ctaGroup}>
                    <Link href="/iletisim" className={styles.ctaOutline}>
                        İletişim
                    </Link>
                    <Link href="/destek" className={styles.ctaPrimary}>
                        Bize Destek Ol
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileNavLinks}>
                    {navLinks.map((link) => (
                        <div key={link.name} className={styles.mobileNavItem}>
                            <Link
                                href={link.href}
                                className={styles.mobileNavLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                            {link.subLinks && (
                                <div className={styles.mobileSubmenu}>
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                            key={subLink.name}
                                            href={subLink.href}
                                            className={styles.mobileSubLink}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className={styles.mobileCta}>
                        <Link href="/iletisim" className={styles.ctaOutline} onClick={() => setIsMobileMenuOpen(false)}>
                            İletişim
                        </Link>
                        <Link href="/destek" className={styles.ctaPrimary} onClick={() => setIsMobileMenuOpen(false)}>
                            Bize Destek Ol
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
