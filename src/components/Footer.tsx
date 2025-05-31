
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

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
  };

  const handleOrderNow = () => {
    navigate('/order');
    window.scrollTo(0, 0);
  };

  return (
    <footer id="contact" className="bg-orange-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-orange-400">
                🍜 <span className="text-white">Momo Palace</span>
              </div>
            </div>
            <p className="text-orange-100 leading-relaxed">
              Serving authentic Nepalese momos since 2010. Experience the true taste of Nepal 
              with our handcrafted dumplings made with love and traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('home')} className="text-orange-100 hover:text-orange-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Menu</button></li>
              <li><button onClick={() => handleNavClick('branches')} className="text-orange-100 hover:text-orange-400 transition-colors">Branches</button></li>
              <li><button onClick={() => handleNavClick('about')} className="text-orange-100 hover:text-orange-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNavClick('contact')} className="text-orange-100 hover:text-orange-400 transition-colors">Contact</button></li>
              <li><button onClick={handleOrderNow} className="text-orange-100 hover:text-orange-400 transition-colors">Online Order</button></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Specialties</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Steamed Momos</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Fried Momos</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Jhol Momos</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Chow Mein</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Thukpa</button></li>
              <li><button onClick={() => handleNavClick('menu')} className="text-orange-100 hover:text-orange-400 transition-colors">Sel Roti</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-orange-100">Thamel, Kathmandu</p>
                  <p className="text-orange-100">Nepal 44600</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-400 flex-shrink-0" size={20} />
                <p className="text-orange-100">+977-1-4567890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-orange-400 flex-shrink-0" size={20} />
                <p className="text-orange-100">info@momopalace.com.np</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-orange-100">Mon - Sun</p>
                  <p className="text-orange-100">10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-orange-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-200 text-sm">
              © 2024 Momo Palace Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-orange-200 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-orange-200 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-orange-200 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
