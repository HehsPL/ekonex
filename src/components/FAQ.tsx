import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: 'Jakie rodzaje odpadów odbieracie?',
      answer: 'Odbieramy wszystkie rodzaje odpadów: komunalne, przemysłowe, budowlane, niebezpieczne, medyczne oraz odpady zielone. Każdy rodzaj odpadów jest odpowiednio segregowany i przetwarzany zgodnie z obowiązującymi przepisami.'
    },
    {
      question: 'Jak często odbywa się wywóz odpadów?',
      answer: 'Częstotliwość wywozu dostosowujemy do potrzeb klienta. Oferujemy wywóz dzienny, kilka razy w tygodniu, cotygodniowy, dwutygodniowy lub comiesięczny. Możliwe są też dodatkowe wywózki na żądanie.'
    },
    {
      question: 'Czy prowadzicie pełną dokumentację?',
      answer: 'Tak, zapewniamy kompleksową dokumentację zgodną z wymogami prawa. Wystawiamy karty przekazania odpadów (KPO), raporty miesięczne, certyfikaty recyklingu oraz pomagamy w przygotowaniu raportów dla organów kontrolnych.'
    },
    {
      question: 'Jakie są koszty usług?',
      answer: 'Koszt zależy od rodzaju i ilości odpadów, częstotliwości wywozu oraz lokalizacji. Oferujemy bezpłatną wycenę po uprzednim określeniu Państwa potrzeb. Nasze ceny są konkurencyjne przy zachowaniu najwyższej jakości usług.'
    },
    {
      question: 'Czy zapewniacie pojemniki na odpady?',
      answer: 'Tak, oferujemy wynajem pojemników o różnych pojemnościach - od 120L do 1100L oraz kontenery od 3m³ do 40m³. Pojemniki są regularne czyszczone i serwisowane, a w razie potrzeby wymieniamy je na nowe.'
    },
    {
      question: 'Czy jesteście dostępni w weekendy i święta?',
      answer: 'Tak, oferujemy obsługę 7 dni w tygodniu. W przypadku sytuacji awaryjnych jesteśmy dostępni 24/7. Standardowe wywózki można również zaplanować na weekendy za dodatkową opłatą.'
    },
    {
      question: 'Na jakim obszarze działacie?',
      answer: 'Działamy na terenie całej Polski. Nasze główne biuro znajduje się w Warszawie, ale mamy oddziały i partnerów w większości województw, co pozwala nam na sprawną obsługę klientów w całym kraju.'
    },
    {
      question: 'Jak długo trwa podpisanie umowy i rozpoczęcie współpracy?',
      answer: 'Po otrzymaniu zapytania przygotowujemy wycenę w ciągu 24 godzin. Po akceptacji warunków, umowę można podpisać już następnego dnia, a usługi rozpoczynamy zazwyczaj w ciągu 2-3 dni roboczych.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące naszych usług. 
            Jeśli nie znajdziesz odpowiedzi na swoje pytanie, skontaktuj się z nami.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <button
            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Zadaj pytanie specjaliście
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;