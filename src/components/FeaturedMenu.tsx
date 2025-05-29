
import { Clock, Users, Flame } from 'lucide-react';

const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Momo",
      description: "Traditional steamed dumplings filled with seasoned chicken and fresh herbs",
      price: "Rs. 180",
      image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=300&h=200&fit=crop",
      time: "15 min",
      serves: "10 pcs",
      spicy: 2
    },
    {
      id: 2,
      name: "Vegetable Momo",
      description: "Healthy steamed momos packed with fresh vegetables and aromatic spices",
      price: "Rs. 150",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop",
      time: "12 min",
      serves: "10 pcs",
      spicy: 1
    },
    {
      id: 3,
      name: "Fried Momo",
      description: "Crispy golden-brown momos served with special chutney",
      price: "Rs. 200",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      time: "18 min",
      serves: "8 pcs",
      spicy: 3
    },
    {
      id: 4,
      name: "Buff Momo",
      description: "Traditional buffalo meat momos with authentic Nepalese flavors",
      price: "Rs. 220",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop",
      time: "20 min",
      serves: "10 pcs",
      spicy: 2
    }
  ];

  const getSpicyLevel = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame
        key={i}
        size={16}
        className={i < level ? "text-orange-500 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Featured Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our signature momos, each crafted with authentic recipes passed down through generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{item.serves}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-500">Spicy:</span>
                      <div className="flex gap-1">
                        {getSpicyLevel(item.spicy)}
                      </div>
                    </div>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm hover:bg-emerald-700 transition-colors font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
