
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
    <section id="branches" className="py-20 bg-gradient-to-br from-dark-bg to-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4 brand-title">
            Our Branches
          </h2>
          <p className="text-xl text-dark-text-muted max-w-2xl mx-auto">
            Visit us at any of our convenient locations across Nepal for the authentic momo experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              onClick={() => handleBranchClick(branch.route)}
              className="bg-dark-card rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 relative cursor-pointer border border-dark-border hover:border-dark-accent"
            >
              {branch.isMain && (
                <div className="absolute top-4 left-4 bg-dark-accent text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Main Branch
                </div>
              )}
              
              <div className="relative">
                <img
                  src={branch.image}
                  alt={`${branch.name} - Authentic Nepalese Momo Restaurant`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-3">{branch.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="text-dark-accent mt-1 flex-shrink-0" size={16} />
                    <span className="text-dark-text-muted text-sm">{branch.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Phone className="text-dark-accent flex-shrink-0" size={16} />
                    <span className="text-dark-text-muted text-sm">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-dark-accent flex-shrink-0" size={16} />
                    <span className="text-dark-text-muted text-sm">{branch.hours}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-dark-border">
                  <button className="w-full bg-gradient-to-r from-dark-accent to-dark-accent-dark text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
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
            className="bg-gradient-to-r from-dark-accent to-dark-accent-dark text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            View More Branches
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
