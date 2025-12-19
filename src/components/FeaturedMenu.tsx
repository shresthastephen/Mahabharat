
import patan6 from "../assets/patan/patan6.jpg"
import patan4 from "../assets/patan/patan4.jpg"


const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Buff Momo",
      description: "Traditional buffalo meat momo with authentic Nepalese flavors",
      image: patan6,
    },
    {
      id: 2,
      name: "Chicken Momo",
      description: "Traditional steamed momo(dumplings) filled with seasoned chicken and fresh herbs",
      image: patan4,
    },
    {
      id: 3,
      name: "Vegetable Momo",
      description: "Healthy steamed momo packed with fresh vegetables and aromatic spices",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section id="menu" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-nunito">
            Our Featured Menu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Discover our signature momo, each crafted with authentic recipes passed down through generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-green-500">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-nunito">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-inter">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
