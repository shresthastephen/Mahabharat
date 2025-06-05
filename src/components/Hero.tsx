import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-teal-200">
              <Star className="fill-current" size={20} />
              <span className="text-sm font-medium font-inter">Authentic Nepalese Cuisine</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-nunito">
              Taste the 
              <span className="block text-teal-300">Authentic</span>
              <span className="block">Momos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-lg font-inter">
              Experience the rich flavors of traditional Nepalese momos, handcrafted with love and served fresh from our kitchen to your table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleOrderNow}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 justify-center font-nunito"
              >
                Order Now
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold font-nunito">500+</div>
                <div className="text-emerald-200 text-sm font-inter">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-nunito">15+</div>
                <div className="text-emerald-200 text-sm font-inter">Momo Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-nunito">4.9</div>
                <div className="text-emerald-200 text-sm font-inter">Rating</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=500&h=400&fit=crop"
                  alt="Delicious Momos"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 font-nunito">Steamed Momos</h3>
                  <p className="text-gray-600 font-inter">Fresh • Authentic • Delicious</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce font-inter">
              Hot & Fresh! 🔥
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
