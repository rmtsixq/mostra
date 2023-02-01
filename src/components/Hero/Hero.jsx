'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero({
    title = "Geleceği Birlikte İnşa Ediyoruz",
    subtitle = "Robotik, Elektrikli Araçlar ve Otonom Teknoloji",
    description = "Team Mostra olarak; teknoloji, mühendislik ve yenilikçilik alanlarında genç yetenekleri bir araya getiriyoruz.",
    backgroundImage = "/images/takımpic2.jpeg",
    primaryCta = { text: "Projelerimiz", href: "/projeler" },
    secondaryCta = { text: "Bizi Tanıyın", href: "/hakkimizda" },
}) {
    const heroRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (heroRef.current) {
                        const scrollY = window.scrollY;
                        const parallaxSpeed = 0.5;
                        heroRef.current.style.setProperty('--scroll-y', `${scrollY * parallaxSpeed}px`);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            {/* Background Image */}
            <div className={styles.backgroundWrapper}>
                <Image
                    src={backgroundImage}
                    alt="Team Mostra"
                    fill
                    priority
                    quality={90}
                    className={styles.backgroundImage}
                    sizes="100vw"
                />
                <div className={styles.overlay}></div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.container}>
                    <span className={styles.label}>{subtitle}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.ctaGroup}>
                        <Link href={primaryCta.href} className={styles.primaryBtn}>
                            {primaryCta.text}
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href={secondaryCta.href} className={styles.secondaryBtn}>
                            {secondaryCta.text}
                        </Link>
                    </div>
                </div>
            </div>


        </section>
    );
}
