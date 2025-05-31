
const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Chicken Momo",
      description: "Traditional steamed dumplings filled with seasoned chicken and fresh herbs",
      image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Vegetable Momo",
      description: "Healthy steamed momos packed with fresh vegetables and aromatic spices",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Buff Momo",
      description: "Traditional buffalo meat momos with authentic Nepalese flavors",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop",
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-nunito">
            Our Featured Menu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Discover our signature momos, each crafted with authentic recipes passed down through generations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-green-500">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
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
