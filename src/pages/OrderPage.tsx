
import { ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderPage = () => {
  const branches = [
    {
      id: 1,
      name: "Thamel Branch",
      location: "Thamel, Kathmandu",
      phone: "+977-1-4567890",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      hours: "10:00 AM - 10:00 PM",
      isMain: true
    },
    {
      id: 2,
      name: "Patan Branch", 
      location: "Jawalakhel, Patan",
      phone: "+977-1-4567891",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      hours: "10:00 AM - 9:30 PM",
      isMain: false
    },
    {
      id: 3,
      name: "Bhaktapur Branch",
      location: "Durbar Square, Bhaktapur", 
      phone: "+977-1-4567892",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      hours: "11:00 AM - 9:00 PM",
      isMain: false
    },
    {
      id: 4,
      name: "Pokhara Branch",
      location: "Lakeside, Pokhara",
      phone: "+977-61-567893", 
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      hours: "10:30 AM - 9:30 PM",
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Branches Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingBag className="text-green-600" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Order From Our Branches</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your nearest location and get fresh, hot momos delivered to your doorstep
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {branches.map((branch) => (
              <div key={branch.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative border border-gray-200 hover:border-green-500">
                {branch.isMain && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Main Branch
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{branch.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-600 text-sm">{branch.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">{branch.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">{branch.hours}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Order From Us?</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              We ensure the highest quality and fastest delivery for all our customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-green-100">Fresh momos delivered hot to your doorstep in 30 minutes or less</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-green-100">Same authentic taste and quality from all our branches</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-green-100">Simple online ordering system with real-time tracking</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderPage;
