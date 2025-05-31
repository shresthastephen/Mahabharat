
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-dark-surface shadow-2xl sticky top-0 z-50 border-b border-dark-border">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <div className="text-4xl font-bold">
              <span className="text-6xl">🍜</span> 
              <span className="brand-title text-dark-accent ml-2 text-3xl">Momo Palace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-dark-text hover:text-dark-accent font-medium transition-colors duration-300 text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className="text-dark-text hover:text-dark-accent font-medium transition-colors duration-300 text-lg"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('branches')} 
              className="text-dark-text hover:text-dark-accent font-medium transition-colors duration-300 text-lg"
            >
              Branches
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-dark-text hover:text-dark-accent font-medium transition-colors duration-300 text-lg"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-dark-text hover:text-dark-accent font-medium transition-colors duration-300 text-lg"
            >
              Contact
            </button>
            <button 
              onClick={handleOrderNow}
              className="bg-gradient-to-r from-dark-accent to-dark-accent-dark text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark-text hover:text-dark-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-dark-border">
            <div className="flex flex-col space-y-6 pt-6">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-dark-text hover:text-dark-accent font-medium text-left text-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('menu')} 
                className="text-dark-text hover:text-dark-accent font-medium text-left text-lg transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavClick('branches')} 
                className="text-dark-text hover:text-dark-accent font-medium text-left text-lg transition-colors"
              >
                Branches
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-dark-text hover:text-dark-accent font-medium text-left text-lg transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-dark-text hover:text-dark-accent font-medium text-left text-lg transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-dark-accent to-dark-accent-dark text-white px-8 py-3 rounded-full w-fit font-semibold text-lg transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
