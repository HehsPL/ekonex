import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Ekonex</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('uslugi')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('o-nas')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              O nas
            </button>
            <button
              onClick={() => scrollToSection('opinie')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Opinie
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+48 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kontakt@ekonex.pl</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-lg mt-2">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('uslugi')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('o-nas')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
              >
                O nas
              </button>
              <button
                onClick={() => scrollToSection('opinie')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
              >
                Opinie
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-left bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium mt-2"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;