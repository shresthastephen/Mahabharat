import { Star, Quote, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Denish Maharjan",
      location: "Kathmandu",
      rating: 5,
      text: "Absolutely the best momo in Nepal! The Lagankhel branch never misses — consistently delicious and my all-time favorite.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Arun Thapa",
      location: "Bhaktapur",
      rating: 4,
      text: "The traditional ambiance combined with delicious food makes every visit memorable.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Sarah Florez",
      location: "USA",
      rating: 5,
      text: "As a tourist, this was my first momo experience and it was incredible! The staff at the Patan branch were so helpful in explaining the different varieties. Will definitely visit again!'",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Shayam",
      location: "Patan",
      rating: 5,
      text: "Authentic Newari taste with modern presentation. The Pulchowk branch has become our family's go-to place for special occasions. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Dipak Rai",
      location: "Kathmandu",
      rating: 5,
      text: "A weekly favorite of mine, and it never disappoints — consistently delicious food, fast service, and fair prices.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Lisa Gurung",
      location: "Pokhara",
      rating: 4,
      text: "The vibe is just right, and the momo? Absolutely delicious — top-notch quality all around!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers who
            keep coming back for more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 bg-emerald-600 text-white p-3 rounded-full">
                <Quote size={20} />
              </div>

              <div className="flex items-center gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <User className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-yellow-400 fill-current"
                    size={24}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.7/5</span>
            </div>
            <p className="text-gray-600 mb-4">
              Based on 500+ verified reviews across all our branches
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
