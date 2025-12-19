import { MapPin, Phone, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lagan from "../assets/lagankhel/lagan.jpg";
import lagan1 from "../assets/lagankhel/lagan1.jpg";
import lagan2 from "../assets/lagankhel/lagan2.jpg";
import momo from "../assets/lagankhel/momo.jpg";
import momo1 from "../assets/lagankhel/momo1.jpg";
import momo2 from "../assets/lagankhel/momo2.jpg";
import lagancopy from "../assets/lagankhel/lagancopy.jpg"

import lagankhel from "../assets/lagankhel/lagankhel.jpg";

const LagankhelBranch = () => {
  const galleryImages = [lagancopy, lagan1, lagan2, momo, momo1, momo2, lagankhel];

  const menuItems = [{ name: "Buff Momo", price: "Rs.160" }];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lagankhel Branch
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Our flagship location in the heart of populated Lalitpur district,
              serving authentic momo since 2040 BS.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-green-100">Lagankhel, Lalitpur</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+977-1-4567890</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-green-100">10:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Lagankhel Branch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bagalamukhi Swadishta Mahabharat Mo:Mo: Center is a beloved
                local gem in Lagankhel, serving authentic, flavorful buff momo
                for decades. Known for our hearty fillings, and spicy achhar,
                our momo have earned a loyal following across the valley.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We're a small, cozy spot with a busy, but perfect for a quick
                bite. While we don’t offer good parking and the space can get
                warm during peak hours, our takeaway service is always
                available.
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">
                  4.9/5 (1000+ reviews)
                </span>
              </div>
            </div>
            <div>
              <img
                src={lagan}
                alt="Langankhel Branch "
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

      {/* Gallery Section */}
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
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste at our Lagankhel branch. Perfect for
            families, friends, and food lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/QusbuQVEeU6E5HXb6"
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

export default LagankhelBranch;
