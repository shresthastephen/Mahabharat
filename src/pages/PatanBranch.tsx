import { MapPin, Phone, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import main from "../assets/patan/main.jpg"
import patan1 from "../assets/patan/patan1.jpg"
import patan2 from "../assets/patan/patan2.jpg"
import patan3 from "../assets/patan/patan3.jpg"
import patan4 from "../assets/patan/patan4.jpg"
import patan5 from "../assets/patan/patan5.jpg"
import patan6 from "../assets/patan/patan6.jpg"
import patan7 from "../assets/patan/patan7.jpg"
import patan8 from "../assets/patan/patan8.jpg"
import patan9 from "../assets/patan/patan9.jpg"

const PatanBranch = () => {
  const galleryImages = [
   patan2, patan1, patan3,patan4, patan5, patan6, patan7, patan8, patan9,
  ];

  const menuItems = [
    { name: "Buff Momo (Steam / Fried)", price: "Rs.150 / Rs.170" },
    { name: "Chicken Momo (Steam / Fried)", price: "Rs.170 / Rs.190" },
    { name: "Veg Momo (Steam / Fried)", price: "Rs.120 / Rs.140" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Patan Branch
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Nestled in the cultural heart of Patan, offering traditional momo
              with a heritage touch.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-green-100"> Patan Dhoka, Lalitpur</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+977-1-4567891</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-green-100">10:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Patan Branch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Shree Bagalamukhi Swadista Mahabharat Mo:Mo: Centre, located
                opposite the Patan Secondary School gate in Patan Dhoka, is a
                go-to spot for authentic Nepali momo. Serving the community for
                decades, we’re known for our generously sized buff,chicken and
                veg momo, flavorful fillings, and a variety of jhol (soup) that
                complete the experience.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Despite our modest space and busy rush hours, we pride ourselves
                on quick service and affordable prices. Whether dining in or
                taking away, guests can expect freshly prepared momo, local
                flavors, and a bustling. Popular among locals and tourists
                alike. We invite you to stop by and enjoy a true local favorite.
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.8/5 (1000+ reviews)</span>
              </div>
            </div>
            <div>
              <img
                src={main}
                alt="Patan Branch Interior"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Menu
            </h2>

            <div className="grid gap-2 mb-6">
              <div className="grid grid-cols-2 gap-4 p-4 bg-green-100 rounded-lg font-semibold text-gray-800">
                <div>Food Item</div>
                <div className="text-right">Price</div>
              </div>

              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-gray-700">{item.name}</div>
                  <div className="text-right text-green-600 font-semibold">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Patan Branch!</h2>
        
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/Amj44qeN5dLexzRKA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Get Directions
            </a>
            <a
              href="tel:+9779800000000"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors text-center"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatanBranch;
