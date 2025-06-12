
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PokharaBranch = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  ];

  const menuItems = [
    { name: "Buff Momo", price: "Rs. 180" },
    { name: "Chicken Momo", price: "Rs. 160" },
    { name: "Veg Momo", price: "Rs. 140" },

  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gwarko Branch</h1>
            <p className="text-xl text-green-100 mb-8">
              Enjoy stunning mountain views while savoring authentic momos by the beautiful Phewa Lake.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-green-100">Gwarko, Lalitpur</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-green-100">+977-61-567893</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-green-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-green-100">11:30 AM - 7:30 PM</div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Gwarko Branch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our newest addition to the Momo Center family, the Pokhara branch offers breathtaking views 
                of the Annapurna range and Phewa Lake. Located in the heart of Lakeside, it's become a 
                favorite among trekkers, tourists, and locals alike.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                This branch features an expanded menu with mountain-inspired momo varieties and offers 
                both indoor and outdoor seating. The serene lakeside atmosphere combined with our 
                delicious food creates an unforgettable dining experience.
              </p>
              <div className="flex items-center gap-2 text-green-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.8/5 (450+ reviews)</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=400&fit=crop"
                alt="Pokhara Branch with Lake View"
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
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menu</h2>
            
            <div className="grid gap-2 mb-6">
              <div className="grid grid-cols-2 gap-4 p-4 bg-green-100 rounded-lg font-semibold text-gray-800">
                <div>Food Item</div>
                <div className="text-right">Price</div>
              </div>
              
              {menuItems.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="text-gray-700">{item.name}</div>
                  <div className="text-right text-green-600 font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
          <h2 className="text-3xl font-bold mb-4">Visit Our Lakeside Paradise!</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Dine with the mountains as your backdrop and the lake at your feet. An experience you'll never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PokharaBranch;
