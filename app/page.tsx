import Header from '@/components/Header';
import Hero from '@/components/Home/Hero';
import { TechMarquee } from '@/components/Home/Marquee';
import Services from '@/components/Home/Services';
import Team from '@/components/Home/Team';
import AISection from '@/components/Home/AISection';
import Products from '@/components/Home/Products';
import TechStack from '@/components/Home/TechStack';
import CaseStudies from '@/components/Home/CaseStudies';
import Process from '@/components/Home/Process';
import Engagement from '@/components/Home/Engagement';
import Testimonials from '@/components/Home/Testimonials';
import Contact from '@/components/Home/Contact';
import Footer from '@/components/Footer';
import { LogoMarquee } from '@/components/Home/Marquee';

export default function Home() {
  return (
    <div
      className="acc motion-on"
      style={{ ['--ac' as string]: '#304DDB', width: '100%', background: '#fff', overflowX: 'clip' }}
    >
      <Header />
      <Hero />
      <TechMarquee />
      <Services />
      <Team />
      <AISection />
      <Products />
      <TechStack />
      <LogoMarquee />
      <Engagement />
      <Process />

      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}