import React from 'react';
import { Truck, Recycle, FileText, Clock, Shield, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Wywóz odpadów',
      description: 'Regularne odbieranie odpadów komunalnych i przemysłowych z Twojej firmy',
      features: ['Harmonogram dostosowany do potrzeb', 'Nowoczesna flota pojazdów', 'Obsługa 7 dni w tygodniu']
    },
    {
      icon: Recycle,
      title: 'Recykling i segregacja',
      description: 'Profesjonalna segregacja i przetwarzanie odpadów zgodnie z normami UE',
      features: ['Segregacja na źródle', 'Maksymalizacja recyklingu', 'Certyfikowane procesy']
    },
    {
      icon: FileText,
      title: 'Dokumentacja i raportowanie',
      description: 'Kompleksowa obsługa dokumentów związanych z gospodarką odpadami',
      features: ['Karty przekazania odpadów', 'Raporty miesięczne', 'Wsparcie w audytach']
    },
    {
      icon: MapPin,
      title: 'Kontenery i pojemniki',
      description: 'Wynajem i serwis pojemników na odpady różnych pojemności',
      features: ['Różne wielkości kontenerów', 'Regularne czyszczenie', 'Wymiana w razie potrzeby']
    },
    {
      icon: Shield,
      title: 'Doradztwo ekologiczne',
      description: 'Pomoc w optymalizacji procesów gospodarki odpadami w Twojej firmie',
      features: ['Audyt obecnych rozwiązań', 'Plany optymalizacji', 'Szkolenia pracowników']
    },
    {
      icon: Clock,
      title: 'Usługi awaryjne',
      description: 'Szybka interwencja w przypadkach awaryjnych i nietypowych zdarzeń',
      features: ['Dostępność 24/7', 'Szybki czas reakcji', 'Specjalistyczny sprzęt']
    }
  ];

  return (
    <section id="uslugi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071019] mb-4">
            Nasze Usługi
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferujemy kompleksowe rozwiązania w zakresie gospodarki odpadami, 
            dostosowane do indywidualnych potrzeb każdego klienta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#257e33]/30 group"
              >
                <div className="w-16 h-16 bg-[#257e33]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#257e33] transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-[#257e33] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#071019] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#257e33] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#257e33] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1e6329] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;