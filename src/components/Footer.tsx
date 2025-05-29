
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-emerald-500">
                🥟 <span className="text-white">Momo Center</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Serving authentic Nepalese momos since 2010. Experience the true taste of Nepal 
              with our handcrafted dumplings made with love and traditional recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Menu</a></li>
              <li><a href="#branches" className="text-gray-300 hover:text-emerald-500 transition-colors">Branches</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-emerald-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">Online Order</a></li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Specialties</h3>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Steamed Momos</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Fried Momos</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Jhol Momos</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Chow Mein</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Thukpa</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-emerald-500 transition-colors">Sel Roti</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Thamel, Kathmandu</p>
                  <p className="text-gray-300">Nepal 44600</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-500 flex-shrink-0" size={20} />
                <p className="text-gray-300">+977-1-4567890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500 flex-shrink-0" size={20} />
                <p className="text-gray-300">info@momocenter.com.np</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">Mon - Sun</p>
                  <p className="text-gray-300">10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Momo Center Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
