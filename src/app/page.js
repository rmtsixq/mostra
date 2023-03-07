import Hero from '@/components/Hero';
import { SectionWorkshop, SectionCompetitions, SectionSponsors, SectionApplications } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero
        title="Geleceği Birlikte İnşa Ediyoruz"
        subtitle="Robotik, Elektrikli Araçlar ve Otonom Teknoloji"
        description="Team Mostra olarak; teknoloji, mühendislik ve yenilikçilik alanlarında genç yetenekleri bir araya getiriyoruz."
        backgroundImage="/images/DSCF5276.JPEG"
        primaryCta={{ text: "Projelerimiz", href: "/projeler" }}
        secondaryCta={{ text: "Bizi Tanıyın", href: "/hakkimizda" }}
      />
      <SectionApplications />
      <SectionWorkshop />
      <SectionCompetitions />
      <SectionSponsors />
    </>
  );
}
