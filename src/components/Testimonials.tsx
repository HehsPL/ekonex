import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna Kowalska',
      position: 'Kierownik Działu Środowiska',
      company: 'Fabryka Mebli "Drewno"',
      content: 'Współpraca z Ekonex znacznie uprościła naszą gospodarkę odpadami. Profesjonalizm, punktualność i konkurencyjne ceny - zdecydowanie polecamy!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marek Nowak',
      position: 'Prezes Zarządu',
      company: 'Hotel Centrum',
      content: 'Dzięki Ekonex mogę być spokojny o aspekt ekologiczny mojego biznesu. Fachowa obsługa i pełna dokumentacja - to właśnie potrzebowałem.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Magdalena Wiśniewska',
      position: 'Dyrektor Administracyjny',
      company: 'Centrum Handlowe Plaza',
      content: 'Ekonex obsługuje nasze centrum od 3 lat. Niezawodność, elastyczność i świetny kontakt - nie wyobrażam sobie współpracy z kimś innym.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3823492/pexels-photo-3823492.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Tomasz Kaczmarek',
      position: 'Właściciel',
      company: 'Restauracja "Smakowita"',
      content: 'Szybka reakcja na nasze potrzeby i profesjonalna obsługa. Ekonex to firma, na którą można liczyć w każdej sytuacji.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3823493/pexels-photo-3823493.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="opinie" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Zaufanie naszych klientów to nasza największa wartość. 
            Przekonaj się, dlaczego wybierają Ekonex.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-emerald-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-emerald-600 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-emerald-100">Zadowolonych klientów</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Obsługiwanych firm</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-100">Lat na rynku</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-100">Wsparcie techniczne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;