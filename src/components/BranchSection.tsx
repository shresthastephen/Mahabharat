
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
    },
    {
      id: 3,
      name: "Bhaktapur Branch",
      location: "Durbar Square, Bhaktapur", 
      phone: "+977-1-4567892",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      hours: "11:00 AM - 9:00 PM",
      isMain: false,
      route: "/branch/bhaktapur"
    },
    {
      id: 4,
      name: "Pokhara Branch",
      location: "Lakeside, Pokhara",
      phone: "+977-61-567893", 
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      hours: "10:30 AM - 9:30 PM",
      isMain: false,
      route: "/branch/pokhara"
    },
    {
      id: 5,
      name: "Chitwan Branch",
      location: "Sauraha, Chitwan",
      phone: "+977-56-567894", 
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      hours: "10:00 AM - 9:00 PM",
      isMain: false,
      route: "/branch/chitwan"
    },
    {
      id: 6,
      name: "Butwal Branch",
      location: "Traffic Chowk, Butwal",
      phone: "+977-71-567895", 
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      hours: "10:00 AM - 9:30 PM",
      isMain: false,
      route: "/branch/butwal"
    }
  ];

  const handleBranchClick = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 brand-title font-nunito">
            Our Branches
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Visit us at any of our convenient locations across Nepal for the authentic momo experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              onClick={() => handleBranchClick(branch.route)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative cursor-pointer border border-gray-200 hover:border-green-500"
            >
              {branch.isMain && (
                <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-10 font-inter">
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
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-nunito">{branch.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-green-600 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-600 text-xs font-inter">{branch.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-600 flex-shrink-0" size={14} />
                    <span className="text-gray-600 text-xs font-inter">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-green-600 flex-shrink-0" size={14} />
                    <span className="text-gray-600 text-xs font-inter">{branch.hours}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium font-nunito text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
