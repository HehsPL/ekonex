import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/ekonex-logo.png"
                alt="Ekonex Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Profesjonalna gospodarka odpadami dla firm i instytucji. 
              Działamy zgodnie z najwyższymi standardami ekologicznymi 
              od ponad 15 lat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#257e33] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#257e33] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#257e33] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nasze usługi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Wywóz odpadów komunalnych
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Wywóz odpadów przemysłowych
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Recykling i segregacja
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Wynajem kontenerów
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Doradztwo ekologiczne
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Usługi awaryjne 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Szybkie linki</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('o-nas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#257e33] transition-colors text-left"
                >
                  O firmie
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('uslugi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#257e33] transition-colors text-left"
                >
                  Usługi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('opinie')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#257e33] transition-colors text-left"
                >
                  Opinie klientów
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#257e33] transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#257e33] transition-colors text-left"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#257e33] transition-colors">
                  Polityka prywatności
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#257e33] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ul. Przykładowa 123</p>
                  <p className="text-gray-300">00-001 Warszawa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#257e33] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+48 123 456 789</p>
                  <p className="text-xs text-gray-500">Dostępny 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#257e33] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">kontakt@ekonex.pl</p>
                  <p className="text-xs text-gray-500">Odpowiedź w 2h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ekonex. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
              <a href="#" className="hover:text-[#257e33] transition-colors">
                Regulamin
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
              <a href="#" className="hover:text-[#257e33] transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
              <a href="#" className="hover:text-[#257e33] transition-colors">
                Pliki cookies
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-[#257e33] transition-colors"
              >
                Powrót do góry ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  )
}