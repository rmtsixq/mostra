import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'Podcast | Team Mostra',
    description: 'Beyond The Build - Team Mostra podcast serisi. Robotik, teknoloji ve takım hikayeleri.',
};

const podcasts = [
    {
        name: 'Beyond The Build TR',
        language: 'Türkçe',
        description: 'Ana podcast serimiz. FRC, robotik ve takım süreçleri hakkında sohbetler.',
        spotifyUrl: 'https://open.spotify.com/show/5THbyHo0OVrrdns39sqpx3?si=5nb1C7m4T96Lcvc4xBRGPQ',
        featured: true,
    },
    {
        name: 'Beyond The Build EN',
        language: 'English',
        description: 'Our main podcast in English for international listeners.',
        spotifyUrl: 'https://open.spotify.com/show/5DXbVaZXhnd73P7ThVrxyt?si=UxkTgXdlS0K8w9HSupQf1Q',
        featured: false,
    },
    {
        name: 'Beyond The Build DE',
        language: 'Deutsch',
        description: 'Unser Podcast auf Deutsch.',
        spotifyUrl: 'https://open.spotify.com/show/4cVxwVBtxWXk2XR24jf4yO?si=nLfjG203RdOzTJ-_lEls-w',
        featured: false,
    },
    {
        name: 'Beyond The Build ES',
        language: 'Español',
        description: 'Nuestro podcast en español.',
        spotifyUrl: 'https://open.spotify.com/show/1mREWChN0rMN9J0KEHLsua?si=ukBeFm94RzSILnxkKMWm_Q',
        featured: false,
    },
    {
        name: 'Beyond The Build FR',
        language: 'Français',
        description: 'Notre podcast en français.',
        spotifyUrl: 'https://open.spotify.com/show/4DzQirG95M4THy6KSYJ2XE?si=SnHl4M-MS_elM78C33CX2g',
        featured: false,
    },
    {
        name: 'Beyond The Build PT',
        language: 'Português',
        description: 'Nosso podcast em português.',
        spotifyUrl: 'https://open.spotify.com/show/1PbjhVFnNZ8Hed768HXEIT?si=_y8A4UtzTDO6BxQJOjpW2w',
        featured: false,
    },
];

export default function PodcastPage() {
    const featuredPodcast = podcasts.find(p => p.featured);
    const otherPodcasts = podcasts.filter(p => !p.featured);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.label}>Podcast</span>
                    <h1>Beyond The <span className={styles.highlight}>Build</span></h1>
                    <p>
                        Robotik, teknoloji ve takım hikayeleri üzerine sohbetler.
                        6 farklı dilde yayın yapıyoruz.
                    </p>
                </div>
            </section>

            {/* Featured Podcast */}
            <section className={styles.featuredSection}>
                <div className={styles.container}>
                    <div className={styles.featuredCard}>
                        <div className={styles.featuredContent}>
                            <div className={styles.spotifyBadge}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                Spotify'da Dinleyin
                            </div>
                            <h2>{featuredPodcast.name}</h2>
                            <span className={styles.language}>{featuredPodcast.language}</span>
                            <p>{featuredPodcast.description}</p>
                            <a
                                href={featuredPodcast.spotifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.listenBtn}
                            >
                                Şimdi Dinle
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </a>
                        </div>
                        <div className={styles.featuredVisual}>
                            <div className={styles.podcastArt}>
                                <Image
                                    src="/images/mostralogo-yesil.png"
                                    alt="Beyond The Build Podcast"
                                    width={200}
                                    height={200}
                                    className={styles.podcastLogo}
                                />
                                <div className={styles.soundWaves}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Languages */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Diğer Dillerde</h2>
                        <p>Podcast serimizi 6 farklı dilde dinleyebilirsiniz.</p>
                    </div>
                    <div className={styles.podcastGrid}>
                        {otherPodcasts.map((podcast) => (
                            <a
                                key={podcast.name}
                                href={podcast.spotifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.podcastCard}
                            >
                                <div className={styles.podcastIcon}>
                                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </div>
                                <div className={styles.podcastInfo}>
                                    <h3>{podcast.name}</h3>
                                    <span className={styles.podcastLang}>{podcast.language}</span>
                                </div>
                                <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
