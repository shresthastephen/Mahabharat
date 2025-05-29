
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import BranchSection from '@/components/BranchSection';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMenu />
      <BranchSection />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
