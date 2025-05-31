
import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-orange-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+977-1-4567890</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🕒 Open Daily: 10:00 AM - 10:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <div className="text-3xl font-bold text-orange-600">
              🍜 <span className="text-gray-800">Momo Palace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('menu')} 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => handleNavClick('branches')} 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Branches
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={handleOrderNow}
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors font-medium"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('menu')} 
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => handleNavClick('branches')} 
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Branches
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Contact
              </button>
              <button 
                onClick={handleOrderNow}
                className="bg-orange-600 text-white px-6 py-2 rounded-full w-fit font-medium"
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
