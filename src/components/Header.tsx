
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
          const headerHeight = 80; // Approximate header height
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <div className="text-2xl sm:text-3xl font-bold brand-title text-green-600">
              Momo Palace
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 text-base xl:text-lg px-2"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 text-base xl:text-lg px-2"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('branches')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 text-base xl:text-lg px-2"
            >
              Branches
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 text-base xl:text-lg px-2"
            >
              About Us
            </button>
            <button 
              onClick={handleOrderNow}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 xl:px-8 py-2.5 xl:py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-base xl:text-lg"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-green-600 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-gray-700 hover:text-green-600 font-medium text-left text-base transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('menu')} 
                className="text-gray-700 hover:text-green-600 font-medium text-left text-base transition-colors py-2"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavClick('branches')} 
                className="text-gray-700 hover:text-green-600 font-medium text-left text-base transition-colors py-2"
              >
                Branches
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-gray-700 hover:text-green-600 font-medium text-left text-base transition-colors py-2"
              >
                About Us
              </button>
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full w-fit font-semibold text-base transition-all duration-300 mt-2"
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
