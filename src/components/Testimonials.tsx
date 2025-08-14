import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      company: "Mieszkanka Warszawy",
      content: "Ekonex to najlepsza firma wywozowa w okolicy. Zawsze punktualni, profesjonalni i w rozsądnych cenach.",
      rating: 5
    },
    {
      id: 2,
      name: "Piotr Nowak",
      company: "Właściciel restauracji",
      content: "Współpracujemy z Ekonex od lat. Niezawodna obsługa i elastyczne podejście do naszych potrzeb.",
      rating: 5
    },
    {
      id: 3,
      name: "Maria Wiśniewska",
      company: "Zarządca nieruchomości",
      content: "Polecam Ekonex wszystkim. Szybka realizacja zleceń i konkurencyjne ceny. Bardzo zadowolona z usług.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zaufało nam już setki zadowolonych klientów w całej Polsce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;