
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BhaktapurBranch = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  ];

  const menuItems = [
    { name: "Steam Momos (Chicken)", price: "Rs. 180" },
    { name: "Steam Momos (Buff)", price: "Rs. 160" },
    { name: "Steam Momos (Veg)", price: "Rs. 140" },
    { name: "Royal Heritage Momos", price: "Rs. 320" },
    { name: "Fried Momos (Chicken)", price: "Rs. 200" },
    { name: "Jhol Momos (Chicken)", price: "Rs. 220" },
    { name: "Traditional Newari Momos", price: "Rs. 300" },
    { name: "Chow Mein (Chicken)", price: "Rs. 250" },
    { name: "Thukpa (Chicken)", price: "Rs. 280" },
    { name: "King Curd (Juju Dhau)", price: "Rs. 180" }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhaktapur Branch</h1>
            <p className="text-xl text-orange-100 mb-8">
              Located near the historic Durbar Square, serving momos with a royal heritage touch.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-orange-100">Durbar Square, Bhaktapur</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-orange-100">+977-1-4567892</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-orange-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-orange-100">11:00 AM - 9:00 PM</div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Bhaktapur Branch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Bhaktapur branch stands as a testament to Nepal's rich culinary heritage, located just steps 
                away from the UNESCO World Heritage Site of Durbar Square. This location seamlessly blends 
                medieval architecture with modern dining comfort.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Known for its traditional preparation methods and use of ancient recipes, our Bhaktapur branch 
                offers an authentic taste of how momos were originally made. The restaurant features traditional 
                Newari décor and serves specialty varieties unique to this location.
              </p>
              <div className="flex items-center gap-2 text-orange-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.9/5 (280+ reviews)</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                alt="Bhaktapur Branch Interior"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Menu</h2>
            
            <div className="grid gap-2 mb-6">
              <div className="grid grid-cols-2 gap-4 p-4 bg-orange-100 rounded-lg font-semibold text-gray-800">
                <div>Food Item</div>
                <div className="text-right">Price</div>
              </div>
              
              {menuItems.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="text-gray-700">{item.name}</div>
                  <div className="text-right text-orange-600 font-semibold">{item.price}</div>
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

      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Heritage Branch!</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience the royal taste of momos in the historic city of Bhaktapur, where tradition meets flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-400 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BhaktapurBranch;
