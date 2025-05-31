
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
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Brand Name Only */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <div className="text-3xl font-bold brand-title text-blue-600">
              Momo Palace
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('branches')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg"
            >
              Branches
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 text-lg"
            >
              Contact
            </button>
            <button 
              onClick={handleOrderNow}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200">
            <div className="flex flex-col space-y-6 pt-6">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left text-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('menu')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left text-lg transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavClick('branches')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left text-lg transition-colors"
              >
                Branches
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left text-lg transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left text-lg transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full w-fit font-semibold text-lg transition-all duration-300"
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
