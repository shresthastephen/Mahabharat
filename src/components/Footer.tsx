
import { Mail, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
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
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleOrderNow = () => {
    navigate('/order');
    window.scrollTo(0, 0);
  };

  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-bold brand-title text-green-400 font-playfair">
                Shree Bagalamukhi Swadista Mahabharat
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed font-inter">
              Serving authentic Nepalese momos since 2040 A.D. Experience the true taste of Nepal 
              with our handcrafted momo(dumplings) made with love and traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white font-nunito">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('home')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Home</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Menu</button></li>
              <li><button onClick={() => handleNavClick('branches')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Branches</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">About Us</button></li>
              <li><button onClick={handleOrderNow} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Online Order</button></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white font-nunito">Our Specialties</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('menu')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Buff Momo</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Chicken Momo</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-gray-300 hover:text-green-400 transition-colors font-inter">Vegetable Momo</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white font-nunito">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-green-400 flex-shrink-0" size={20} />
                <p className="text-gray-300 font-inter">info@momopalace.com.np</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300 font-inter">Sun-Sat</p>
                  <p className="text-gray-300 font-inter">9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <button 
                onClick={handleOrderNow}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-inter font-medium"
              >
                <Phone size={18} />
                Call Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © 2024 Momo Palace Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors font-inter">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors font-inter">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors font-inter">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
