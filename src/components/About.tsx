import React from 'react';
import { Award, Users, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certyfikaty ISO',
      description: 'ISO 14001, ISO 9001'
    },
    {
      icon: Users,
      title: 'Doświadczony zespół',
      description: '50+ specjalistów'
    },
    {
      icon: Globe,
      title: 'Zasięg działania',
      description: 'Cała Polska'
    }
  ];

  const advantages = [
    'Kompleksowa obsługa od A do Z',
    'Nowoczesne technologie i sprzęt',
    'Konkurencyjne ceny przy najwyższej jakości',
    'Pełna zgodność z przepisami prawa',
    'Indywidualne podejście do każdego klienta',
    'Szybki czas reakcji i elastyczność',
    'Doświadczenie w różnych branżach',
    'Profesjonalne doradztwo i wsparcie'
  ];

  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071019] mb-6">
                O firmie Ekonex
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#071019]">Ekonex</strong> to dynamicznie rozwijająca się firma 
                  specjalizująca się w kompleksowej gospodarce odpadami. Od ponad 15 lat świadczymy 
                  usługi najwyższej jakości dla przedsiębiorstw, instytucji publicznych i prywatnych 
                  klientów w całej Polsce.
                </p>
                <p>
                  Nasza misja to ochrona środowiska poprzez odpowiedzialne zarządzanie odpadami, 
                  maksymalizację recyklingu oraz edukację w zakresie ekologii. Działamy zgodnie 
                  z najsurowszymi standardami europejskimi i polskim prawem ochrony środowiska.
                </p>
                <p>
                  Dzięki nowoczesnemu parkowi maszynowemu, wykwalifikowanemu zespołowi oraz 
                  ciągłemu inwestowaniu w technologie, jesteśmy w stanie sprostać nawet 
                  najbardziej wymagającym projektom.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-[#257e33]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-[#257e33]" />
                    </div>
                    <h3 className="font-semibold text-[#071019] text-sm mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image and Advantages */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3735758/pexels-photo-3735758.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Zespół Ekonex"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            <div className="bg-[#257e33]/5 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-[#071019] mb-6">
                Dlaczego warto wybrać Ekonex?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#257e33] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;