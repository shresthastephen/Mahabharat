
import { MapPin, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import lagankhel from "../assets/lagankhel/lagankhel.jpg"
import patan from "../assets/patan/main.jpg"

const BranchSection = () => {
  const navigate = useNavigate();

  const branches = [
    {
      id: 1,
      name: "Lagankhel Branch",
      location: "Lagankhel Branch",
      phone: "+977-1-4567890",
      image: lagankhel,
      hours: "10:00 AM - 9:00 PM",
      route: "/branch/lagankhel"
    },
    {
      id: 2,
      name: "Patan Branch", 
      location: "Patan Dhoka, Lalitpur",
      phone: "+977-1-4567891",
      image: patan,
      hours: "11:00 AM - 8:30 PM",
      route: "/branch/patan"
    },
    {
      id: 3,
      name: "Gwarko Branch",
      location: "Gwarko, Lalitpur", 
      phone: "+977-1-4567892",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      hours: "11:00 AM - 7:30 PM",
      route: "/branch/gwarko"
    },
    {
      id: 4,
      name: "Pulchowk Branch",
      location: "Harihar Bhawan, Lalitpur",
      phone: "+977-61-567893", 
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      hours: "8:30 AM - 6:30 PM",
      route: "/branch/pulchowk"
    },
    {
      id: 5,
      name: "Putalisadak Branch",
      location: "Putalisadak, Kathmandu",
      phone: "+977-56-567894", 
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      hours: "11:00 AM - 6:00 PM",
      route: "/branch/putalisadak"
    },
    {
      id: 6,
      name: "Sundarijal, Branch",
      location: "Nayapati pipalbot, Jorpati, Ktm",
      phone: "+977-71-567895", 
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      hours: "11:00 AM - 8:30 PM",
      route: "/branch/sundarijal"
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
          
              
              <div className="relative">
                <img
                  src={branch.image}
                  alt={`${branch.name} - Authentic Nepalese Momo Restaurant`}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 font-nunito">{branch.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-green-600 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-600 text-sm font-inter">{branch.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-600 flex-shrink-0" size={14} />
                    <span className="text-gray-600 text-sm font-inter">{branch.phone}</span>
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
