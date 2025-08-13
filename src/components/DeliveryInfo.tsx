import React from 'react';
import { Truck, Clock, MapPin, Calendar, Shield, CheckCircle } from 'lucide-react';

const DeliveryInfo = () => {
  const deliveryFeatures = [
    {
      icon: Clock,
      title: 'Punktualność',
      description: 'Wywóz zgodnie z ustalonym harmonogramem'
    },
    {
      icon: Truck,
      title: 'Nowoczesna flota',
      description: 'Specjalistyczne pojazdy do każdego rodzaju odpadów'
    },
    {
      icon: MapPin,
      title: 'Cała Polska',
      description: 'Obsługujemy klientów w całym kraju'
    },
    {
      icon: Calendar,
      title: 'Elastyczne terminy',
      description: 'Dostosowanie harmonogramu do Twoich potrzeb'
    }
  ];

  const serviceSteps = [
    {
      step: '1',
      title: 'Kontakt i wycena',
      description: 'Skontaktuj się z nami, otrzymasz bezpłatną wycenę w ciągu 24h'
    },
    {
      step: '2',
      title: 'Dostawa pojemników',
      description: 'Dostarczamy odpowiednie pojemniki w uzgodnionym terminie'
    },
    {
      step: '3',
      title: 'Regularny wywóz',
      description: 'Odbieramy odpady zgodnie z ustalonym harmonogramem'
    },
    {
      step: '4',
      title: 'Dokumentacja',
      description: 'Otrzymujesz pełną dokumentację zgodną z przepisami'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Realizacja usług i harmonogram
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Poznaj proces współpracy z Ekonex - od pierwszego kontaktu 
            po regularne świadczenie usług.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Service Process */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Jak przebiega współpraca
            </h3>
            <div className="space-y-8">
              {serviceSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features and Guarantees */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Gwarancje jakości
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {deliveryFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Warunki współpracy
              </h4>
              <div className="space-y-4">
                {[
                  'Minimalna umowa na 12 miesięcy',
                  'Możliwość wypowiedzenia z 30-dniowym wyprzedzeniem',
                  'Płatność przelewem, faktura VAT',
                  'Możliwość modyfikacji zakresu usług',
                  'Gwarancja jakości i terminowości',
                  'Ubezpieczenie OC i gwarancja jakości'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-emerald-600 text-white p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8" />
                <h4 className="text-xl font-semibold">
                  Obsługa awaryjna 24/7
                </h4>
              </div>
              <p className="text-emerald-100 mb-4">
                W przypadku sytuacji awaryjnych jesteśmy dostępni 
                przez całą dobę, 7 dni w tygodniu.
              </p>
              <div className="text-xl font-bold">
                📞 +48 123 456 789
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;