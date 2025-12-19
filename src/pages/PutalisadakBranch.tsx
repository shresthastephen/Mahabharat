import { MapPin, Phone, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import putali from "../assets/putalisadak/putali.jpg"
import putali1 from "../assets/putalisadak/putali1.jpg"
import putali2 from "../assets/putalisadak/putali2.jpg"
import putali3 from "../assets/putalisadak/putali3.jpg"
import putali4 from "../assets/putalisadak/putali4.jpg"
import putali5 from "../assets/putalisadak/putali5.jpg"
import putali6 from "../assets/putalisadak/putali6.jpg"
import putali7 from "../assets/putalisadak/putali7.jpg"
import putali8 from "../assets/putalisadak/putali8.jpg"
import putali9 from "../assets/putalisadak/putali9.jpg"


const PutalisadakBranch = () => {
  const galleryImages = [
     putali1, putali2, putali3, putali4, putali5, putali6, putali7, putali9,
  ];

  const menuItems = [
    { name: "Buff Momo (Steam / Fried)", price: "Rs.150 / Rs.170" },
    { name: "Chicken Momo (Steam / Fried)", price: "Rs.170 / Rs.190" },
    { name: "Veg Momo (Steam / Fried)", price: "Rs.120 / Rs.140" },
    { name: "Sauage (Buff / Chicken)", price: "Rs.40 / Rs.50" },
    { name: "Keema Aanda(Buff / Chicken)", price: "Rs.80 / Rs.100" },

  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Putalisadak Branch
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Located near the Share Market Office
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-green-100">Putalisadak, Kathmandu</div>
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
                  <div className="text-green-100">11:00 AM - 6:30 PM</div>
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
                About Putalisadak Branch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This branch is dedicated entirely to what we do best—authentic
                Nepali momo. In the heart of one of Kathmandu’s busiest office
                areas, it has quickly become a go-to stop for professionals,
                traders, students, and locals looking for a quick, delicious,
                and affordable meal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We serve freshly prepared buff, chicken, and veg momo,
                generously filled and paired with our signature jhol and spicy
                achhar. With fast service and consistent quality, this outlet is
                designed for busy schedules—perfect for a quick lunch break, an
                evening bite, or takeaway on the go.
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.8/5 (500+ reviews)</span>
              </div>
            </div>
            <div>
              <img
                src={putali1}
                alt="Putalisadak Branch"
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
          <h2 className="text-3xl font-bold mb-4">
            Visit Our Putalisadak Branch!
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/kXWexB97X5WMXcTHA"
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

export default PutalisadakBranch;
