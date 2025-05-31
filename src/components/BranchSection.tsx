
import { MapPin, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BranchSection = () => {
  const navigate = useNavigate();

  const branches = [
    {
      id: 1,
      name: "Thamel Branch",
      location: "Thamel, Kathmandu",
      phone: "+977-1-4567890",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      hours: "10:00 AM - 10:00 PM",
      isMain: true,
      route: "/branch/thamel"
    },
    {
      id: 2,
      name: "Patan Branch", 
      location: "Jawalakhel, Patan",
      phone: "+977-1-4567891",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      hours: "10:00 AM - 9:30 PM",
      isMain: false,
      route: "/branch/patan"
    }
  ];

  const handleBranchClick = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  const handleViewMore = () => {
    navigate('/branches');
    window.scrollTo(0, 0);
  };

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 brand-title">
            Our Branches
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our convenient locations across Nepal for the authentic momo experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              onClick={() => handleBranchClick(branch.route)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative cursor-pointer border border-gray-200 hover:border-green-500"
            >
              {branch.isMain && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Main Branch
                </div>
              )}
              
              <div className="relative">
                <img
                  src={branch.image}
                  alt={`${branch.name} - Authentic Nepalese Momo Restaurant`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{branch.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">{branch.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">{branch.hours}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewMore}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            View More Branches
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
