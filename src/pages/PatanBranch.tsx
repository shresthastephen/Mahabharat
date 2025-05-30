import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PatanBranch = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patan Branch</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Nestled in the cultural heart of Patan, offering traditional momos with a heritage touch.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-300" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-emerald-100">Jawalakhel, Patan</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-300" size={20} />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-emerald-100">+977-1-4567891</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-emerald-300" size={20} />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-emerald-100">10:00 AM - 9:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Patan Branch</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Patan branch brings the authentic momo experience to the historic city of arts and crafts. 
                Surrounded by ancient temples and traditional Newari architecture, this location offers a unique 
                dining atmosphere that perfectly complements our traditional recipes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Popular among local families and cultural enthusiasts, our Patan branch specializes in 
                traditional Newari-style momos alongside our classic varieties. The cozy ambiance and 
                friendly service make it a perfect spot for intimate family gatherings.
              </p>
              <div className="flex items-center gap-2 text-yellow-500">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.8/5 (320+ reviews)</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Patan Branch Interior"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Patan Branch!</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Discover the cultural heritage of Patan while enjoying our delicious momos in a traditional setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
            <Link to="/order" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  );
};

export default PatanBranch;
