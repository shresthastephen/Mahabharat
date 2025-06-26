import { ShoppingBag, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OrderPage = () => {
  const branches = [
    {
      id: 1,
      name: "Lagankhel Branch",
      location: "Lagankhel, Lalitpur",
      phone: "+977-1-4567890",
      image:
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      hours: "10:00 AM - 8:30 PM",
      map: "https://maps.app.goo.gl/CXdekXE2FMTkG9Hr9",
    },
    {
      id: 2,
      name: "Patan Branch",
      location: "PatanDhoka, Lalitpur",
      phone: "+977-1-4567891",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      hours: "11:00 AM - 8:00 PM",
      map: "https://maps.app.goo.gl/q9Sm9F9W5VECrTQN6",
    },
    {
      id: 3,
      name: "Gwarko Branch",
      location: "Gwarko, Lalitpur",
      phone: "+977-1-4567892",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      hours: "11:00 AM - 7:00 PM",
      map: "https://maps.app.goo.gl/bUWWxwx7Yoyb2CDFA",
    },
    {
      id: 4,
      name: "Pulchowk Branch",
      location: "Harihar Bhawan",
      phone: "+977-61-567893",
      image:
        "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      hours: "8:00 AM - 6:30 PM",
      map: "https://maps.app.goo.gl/yJeykg4jCULyKTKz9",
    },
    {
      id: 5,
      name: "Putalisadak Branch",
      location: "Putalisadak, Kathmandu",
      phone: "+977-1-4567892",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      hours: "11:00 AM - 6:00 PM",
      map: "https://maps.app.goo.gl/Bqbqyw7zcPcb92oz8",
    },
    {
      id: 6,
      name: "Sundarijal Branch",
      location: "Sundarijal, Kathmandu",
      phone: "+977-61-567893",
      image:
        "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      hours: "10:30 AM - 9:30 PM",
      map: "https://maps.app.goo.gl/5XiTci456k9yBz298",
    },
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Order From Our Branches
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your nearest location and get fresh, hot momos delivered to
              your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative border border-gray-200 hover:border-green-500"
              >
                <div className="relative">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {branch.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-600 text-sm">
                        {branch.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">
                        {branch.phone}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">
                        {branch.hours}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                    >
                      Order Now
                    </a>
                    <a
                      href={
                        branch.map ||
                        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          branch.location
                        )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >
                      <MapPin size={16} />
                      Get Directions
                    </a>
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
              We ensure the highest quality and fastest delivery for all our
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-green-100">
                Fresh momos delivered hot to your doorstep in 30 minutes or less
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-green-100">
                Same authentic taste and quality from all our branches
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-green-100">
                Simple online ordering system with real-time tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderPage;
