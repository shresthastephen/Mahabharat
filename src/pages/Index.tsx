
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedMenu />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
