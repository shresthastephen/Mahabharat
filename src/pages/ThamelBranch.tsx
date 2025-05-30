
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ThamelBranch = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                Main Branch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Thamel Branch</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Our flagship location in the heart of Kathmandu's tourist district, serving authentic momos since 2010.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-yellow-100">Thamel, Kathmandu</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-yellow-100">+977-1-4567890</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-yellow-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-yellow-100">10:00 AM - 10:00 PM</div>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Thamel Branch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Located in the bustling heart of Thamel, our main branch has been serving locals and tourists 
                alike for over a decade. This is where our journey began, and it remains the cornerstone of 
                our momo empire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With our largest seating capacity and most extensive menu, the Thamel branch offers the full 
                Momo Center experience. From traditional steamed momos to innovative fusion varieties, 
                every dish is prepared with the same love and authenticity that made us famous.
              </p>
              <div className="flex items-center gap-2 text-yellow-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.9/5 (500+ reviews)</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop"
                alt="Thamel Branch Interior"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of Nepal at our Thamel branch. Perfect for families, friends, and food lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThamelBranch;
