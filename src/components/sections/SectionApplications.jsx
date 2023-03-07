import Link from 'next/link';
import styles from './SectionApplications.module.css';

export default function SectionApplications() {
  const applications = [
    {
      id: 'zirve',
      title: 'Mostra x Beyond Zirve 2026',
      subtitle: 'Geleceğin Teknolojilerini Keşfet',
      description: 'Bilim ve teknoloji tutkunlarını bir araya getiren prestijli zirvemize siz de katılın. İlham verici konuşmalar ve workshoplarla dolu bir gün sizi bekliyor.',
      label: 'BAŞVURUYA AÇIK',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSc_KERh67p7cYO1Wi9PdSioohPrND-lCwOjyMZqmWM8WqkeBA/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQZf2lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac3PAuZD_5TG9zqUNRGlel5hZSDF9kUiFA64-Xv7cuUN0IoqnRJtdAgqqculg_aem_ft4Ml3FPA2wxWelL53G56A',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5" />
        </svg>
      )
    },
    {
      id: 'mun',
      title: 'Mostra MUN 2026',
      subtitle: 'Küresel Sorunlara Yerel Çözümler',
      description: 'Model United Nations konferansımızda diplomasi yeteneklerinizi sergileyin. Dünya sahnesinde sesinizi duyurmak için hemen başvurunuzu yapın.',
      label: 'BAŞVURUYA AÇIK',
      href: 'https://mostramun.com',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      )
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>FIRSATLARI YAKALA</span>
          <h2 className={styles.title}>Aktif Başvurular</h2>
          <p className={styles.subtitle}>Team Mostra topluluğuna katılmak ve projelerimizde yer almak için aşağıdaki formları doldurabilirsiniz.</p>
        </div>

        <div className={styles.grid}>
          {applications.map((app) => (
            <div key={app.id} className={styles.card}>
              <div className={styles.cardGlow} />
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {app.icon}
                  </div>
                  <span className={styles.statusLabel}>{app.label}</span>
                </div>
                <h3 className={styles.cardTitle}>{app.title}</h3>
                <h4 className={styles.cardSubtitle}>{app.subtitle}</h4>
                <p className={styles.cardDescription}>{app.description}</p>
                <Link href={app.href} className={styles.btn}>
                  <span>Başvuru Yap</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
