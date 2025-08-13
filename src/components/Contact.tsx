import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'Wywóz odpadów komunalnych',
    'Wywóz odpadów przemysłowych',
    'Wynajem kontenerów',
    'Recykling i segregacja',
    'Doradztwo ekologiczne',
    'Usługi awaryjne',
    'Inne'
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany';
    } else if (!/^[\+]?[0-9\s\-\(\)]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy format numeru telefonu';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Wybierz rodzaj usługi';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Wiadomość musi mieć minimum 10 znaków';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="kontakt" className="py-20 bg-emerald-50">
      <section id="kontakt" className="py-20 bg-[#257e33]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#257e33]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#257e33]" />
            </div>
            <h2 className="text-3xl font-bold text-[#071019] mb-4">
              Dziękujemy za kontakt!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Otrzymaliśmy Twoją wiadomość i skontaktujemy się z Tobą w ciągu 24 godzin.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-700">
                W pilnych sprawach zadzwoń pod numer: 
                <strong className="text-[#257e33] ml-2">+48 123 456 789</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-20 bg-[#257e33]/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071019] mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Otrzymaj bezpłatną wycenę i profesjonalne doradztwo. 
            Jesteśmy do Twojej dyspozycji przez cały dzień.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#071019] mb-6">
                Dane kontaktowe
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#257e33]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#257e33]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#071019]">Telefon</h4>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-sm text-gray-500">Dostępny 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#257e33]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#257e33]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#071019]">Email</h4>
                    <p className="text-gray-600">kontakt@ekonex.pl</p>
                    <p className="text-sm text-gray-500">Odpowiedź w ciągu 2h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#257e33]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#257e33]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#071019]">Adres</h4>
                    <p className="text-gray-600">ul. Przykładowa 123</p>
                    <p className="text-gray-600">00-001 Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#257e33]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#257e33]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#071019]">Godziny pracy</h4>
                    <p className="text-gray-600">Pon-Pt: 7:00 - 18:00</p>
                    <p className="text-gray-600">Sob: 8:00 - 14:00</p>
                    <p className="text-sm text-gray-500">Awarie: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-[#257e33] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">
                Potrzebujesz natychmiastowej pomocy?
              </h3>
              <p className="text-white/80 mb-6">
                Zadzwoń na naszą infolinię i otrzymaj pomoc eksperta.
              </p>
              <a
                href="tel:+48123456789"
                className="bg-white text-[#257e33] px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#071019] mb-6">
                Otrzymaj bezpłatną wycenę
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Jan Kowalski"
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center space-x-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Nazwa firmy
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors"
                      placeholder="ABC Sp. z o.o."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="jan.kowalski@example.com"
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center space-x-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="+48 123 456 789"
                    />
                    {errors.phone && (
                      <div className="mt-1 flex items-center space-x-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Rodzaj usługi *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors ${
                      errors.serviceType ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Wybierz rodzaj usługi</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <div className="mt-1 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.serviceType}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#257e33] focus:border-[#257e33] transition-colors ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Opisz swoje potrzeby, rodzaj odpadów, częstotliwość wywozu itp."
                  />
                  {errors.message && (
                    <div className="mt-1 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#257e33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e6329] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Wysyłanie...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Wyślij zapytanie</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;