import { Award, Heart, Users, Utensils } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every momo is handcrafted with care using traditional family recipes",
    },
    {
      icon: Utensils,
      title: "Fresh Ingredients",
      description:
        "We source the finest local ingredients daily for the best taste",
    },
    {
      icon: Award,
      title: "Authentic Recipes",
      description:
        "Traditional Nepalese recipes passed down through generations",
    },
    {
      icon: Users,
      title: "Family Business",
      description:
        "A proud family-owned restaurant serving the community since 2010",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story of
                <span className="text-emerald-600"> Authentic Flavors</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to{" "}
                <span className="text-emerald-600">
                  Shree Bagalamukhi Swadista Mahabharat Mo:Mo: Centre{" "}
                </span>
                , where tradition meets taste. Established in 2040 B.S (1982
                A.D), we've been serving authentic Nepalese momo that remind
                you of home-cooked meals. Our journey began with a simple
                mission: to share the incredible flavors of Nepal with food
                lovers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each momo is carefully crafted using time-honored recipes, fresh
                ingredients, and the love that goes into every fold. From our
                kitchen to your table, we ensure that every bite takes you on a
                culinary journey through the heart of Nepal's culture.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop"
                  alt="Chef preparing momo"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop"
                  alt="Traditional kitchen"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop"
                  alt="Fresh ingredients"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=300&h=200&fit=crop"
                  alt="Steaming momos"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 bg-teal-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-teal-100 text-sm">Years Experience</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-emerald-100 text-sm">Momo Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
