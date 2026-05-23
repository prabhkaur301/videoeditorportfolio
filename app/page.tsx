import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { AboutSection } from '@/components/about-section';
import { ResourcesSection } from '@/components/resources-section';
import { ProjectGallery } from '@/components/project-gallery';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ResourcesSection />
      <ProjectGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
