
import { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-red-600 text-white py-2 px-4">
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
          <div className="flex items-center">
            <div className="text-3xl font-bold text-red-600">
              🥟 <span className="text-gray-800">Momo Center</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Contact
            </a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
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
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">About Us</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full w-fit">
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
