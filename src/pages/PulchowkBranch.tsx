import { MapPin, Phone, Clock, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import pul from "../assets/pulchowk/pul.jpg"
import pul1 from "../assets/pulchowk/pul1..jpg"
import pul2 from "../assets/pulchowk/pul2.jpg"
import pul3 from "../assets/pulchowk/pul3.jpg"
import pul4 from "../assets/pulchowk/pul4.jpg"
import pul5 from "../assets/pulchowk/pul5.jpg"


const BhaktapurBranch = () => {
  const galleryImages = [
    pul, pul1, pul2, pul3, pul4, pul5,
  ];

  const menuItems = [
    { name: "Buff Momo (Steam)", price: "Rs. 150" },
    { name: "Chicken Momo (Steam)", price: "Rs. 170" },
    { name: "Veg Momo (Steam)", price: "Rs. 120" },
    { name: "Khaja Set(Veg / Non-Veg)", price: "Rs. 90 / Rs. 120" },
    { name: "Wai Wai (Soup / Fried)", price: "Rs. 120" },
    { name: "Chowmein (Buff / Veg)", price: "Rs. 120 / Rs. 100 " },
    { name: "Aanda Bann", price: "Rs. 70" },
    { name: "Veg Momo (Steam)", price: "Rs. 120" },
    { name: "Veg Momo (Steam)", price: "Rs. 120" },
    { name: "Veg Momo (Steam)", price: "Rs. 120" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pulchowk Branch
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Located opposite of UN Office, Harihar Bhawan
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-green-100">Harihar Bhawan, Pulchowk</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+977-1-4567892</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-green-100">8:30 AM - 6:30 PM</div>
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
                About Pulchowk Branch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our branch is perfectly placed to serve government employees,
                private officers, professionals, and locals in the bustling
                office area. While momo remains our signature specialty—buff,
                chicken, and veg, served with flavorful fillings, rich jhol, and
                spicy achhar—this branch also offers a wider menu to suit
                diverse tastes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Alongside momo, guests can enjoy classic Newari recipes and
                variety of dishes, making it a convenient choice for both quick
                lunches and relaxed evening meals. Whether dining in during a
                lunch break or picking up a takeaway after work, this branch
                continues our legacy of delivering hearty, satisfying Nepali
                food with a homely touch.
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.7/5 (280+ reviews)</span>
              </div>
            </div>
            <div>
              <img
                src={pul}
                alt="Pulchowk Branch "
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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Pulchowk Branch!</h2>

         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/3rC9m1ZNXZHwNLxeA"
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

export default BhaktapurBranch;
