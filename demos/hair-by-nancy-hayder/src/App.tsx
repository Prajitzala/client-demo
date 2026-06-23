import React, { useState } from 'react';
import { Phone, Star, MapPin, Check, Mail, Clock, ShieldCheck, ArrowRight, Menu, X, Scissors, Palette, Heart, Sparkles, Calendar, User, ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', contactForm);
    // Simulate API call
    setTimeout(() => {
      setIsContactFormSubmitted(true);
      // Optionally reset form after submission
      setContactForm({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  const services = [
    {
      icon: Scissors,
      title: "Women's Haircuts & Styling",
      description: "Precision cuts, elegant blowouts, and personalized styles tailored for you.",
      link: "#services",
    },
    {
      icon: User,
      title: "Men's Haircuts & Grooming",
      description: "Sharp fades, classic cuts, and expert grooming for the modern man.",
      link: "#services",
    },
    {
      icon: Palette,
      title: "Hair Color & Balayage",
      description: "Stunning highlights, balayage, and vibrant color transformations.",
      link: "#services",
    },
    {
      icon: Sparkles,
      title: "Hair Treatments & Care",
      description: "Rejuvenating treatments, keratin, and deep conditioning for healthy, radiant hair.",
      link: "#services",
    },
  ];

  const stylists = [
    {
      name: 'Nancy',
      specialty: 'Color Specialist & Senior Stylist',
      image: 'https://via.placeholder.com/200/a38b7d/ffffff?text=Nancy',
      bioSnippet: 'With over 12 years of experience, Nancy is a master of vibrant color transformations and precision cuts.',
    },
    {
      name: 'Hayder',
      specialty: 'Master Barber & Stylist',
      image: 'https://via.placeholder.com/200/6a5f56/ffffff?text=Hayder',
      bioSnippet: 'Hayder brings modern flair to men\'s grooming, specializing in fades, undercuts, and contemporary styles.',
    },
  ];

  const faqs = [
    {
      question: 'How far in advance should I book an appointment?',
      answer: 'We recommend booking at least 1-2 weeks in advance for popular times, but we often have same-day availability. Check our online booking system or call us directly!',
    },
    {
      question: 'Do you offer walk-in appointments?',
      answer: 'While we do our best to accommodate walk-ins, appointments are highly recommended to ensure you get the service and stylist you prefer without a wait.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We kindly request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the slot to another client. Late cancellations or no-shows may incur a fee.',
    },
    {
      question: 'Can I request a specific stylist?',
      answer: 'Absolutely! You can request Nancy or Hayder when booking online or over the phone. We encourage you to view their portfolios to find the perfect match for your style.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express), debit cards, and cash.',
    },
  ];

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Stylists', href: '#stylists' },
    { name: 'About Us', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="font-sans antialiased text-gray-800 bg-stone-50">
      {/* Sticky Mobile Navbar/Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-stone-800 text-white p-3 shadow-lg z-50 lg:hidden">
        <div className="flex justify-around items-center">
          <a href="tel:+15192548053" className="flex flex-col items-center text-xs opacity-80 hover:opacity-100 transition-opacity">
            <Phone size={18} />
            <span>Call Us</span>
          </a>
          <button onClick={() => window.location.hash = '#book'} className="flex flex-col items-center text-xs opacity-80 hover:opacity-100 transition-opacity">
            <Calendar size={18} />
            <span>Book Now</span>
          </button>
          <button onClick={toggleMobileMenu} className="flex flex-col items-center text-xs opacity-80 hover:opacity-100 transition-opacity">
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Header */}
      <header id="home" className="bg-gradient-to-r from-stone-900 to-stone-700 text-white shadow-lg sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            HAIR BY NANCY & HAYDER
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-medium hover:text-amber-300 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="ml-6 px-6 py-2 bg-amber-400 text-stone-900 rounded-full font-semibold hover:bg-amber-300 transition-colors flex items-center gap-2 shadow-md">
              <Calendar size={20} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-stone-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6 animate-fade-in-down">
            <button onClick={toggleMobileMenu} className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className="text-3xl font-bold text-white hover:text-amber-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" onClick={toggleMobileMenu} className="mt-8 px-8 py-3 bg-amber-400 text-stone-900 rounded-full font-semibold text-xl hover:bg-amber-300 transition-colors flex items-center gap-3 shadow-md">
              <Calendar size={24} />
              Book Your Style
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-[70vh] md:h-[85vh] flex items-center justify-center text-center overflow-hidden"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1597341272304-ce2805b53444?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
          <div className="absolute inset-0 bg-stone-900 opacity-60"></div>
          <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
              Your Style, Mastered.
              <br />
              Hair by Nancy & Hayder.
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 font-light animate-fade-in-up delay-100">
              Award-Winning Hair in Windsor, ON. Trusted by 259+ customers with a 4.5<Star size={20} className="inline-block text-amber-400 -mt-1" fill="currentColor" /> rating.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
              <a href="#contact" className="px-8 py-3 bg-amber-400 text-stone-900 rounded-full text-xl font-bold hover:bg-amber-300 transition-transform transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Calendar size={24} /> Book an Appointment
              </a>
              <a href="tel:+15192548053" className="px-8 py-3 border-2 border-white text-white rounded-full text-xl font-semibold hover:bg-white hover:text-stone-900 transition-colors transition-transform transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                <Phone size={24} /> Call Us: (519) 254-8053
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">What Our Clients Say</h2>
            <div className="flex items-center justify-center mb-8">
              <Star size={28} className="text-amber-400 fill-current" />
              <Star size={28} className="text-amber-400 fill-current" />
              <Star size={28} className="text-amber-400 fill-current" />
              <Star size={28} className="text-amber-400 fill-current" />
              <Star size={28} className="text-amber-400 fill-current" />
              <span className="ml-4 text-2xl font-semibold text-stone-700">4.5<span className="text-lg">/5.0</span></span>
              <span className="ml-2 text-xl text-stone-600">(259 Google Reviews)</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <p className="text-lg italic text-stone-700 mb-4">"Nancy is a true artist! My balayage has never looked better, and the service was impeccable. Highly recommend!"</p>
                <div className="flex items-center justify-center">
                  <Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" />
                </div>
                <p className="mt-2 font-semibold text-stone-900">- Jessica L.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <p className="text-lg italic text-stone-700 mb-4">"Hayder consistently delivers the sharpest fades. Always a great experience and a friendly atmosphere."</p>
                <div className="flex items-center justify-center">
                  <Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" />
                </div>
                <p className="mt-2 font-semibold text-stone-900">- Mike S.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200">
                <p className="text-lg italic text-stone-700 mb-4">"My new go-to salon in Windsor! Professional, clean, and they really listen to what you want."</p>
                <div className="flex items-center justify-center">
                  <Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" /><Star size={18} className="text-amber-400 fill-current" />
                </div>
                <p className="mt-2 font-semibold text-stone-900">- Emily R.</p>
              </div>
            </div>
            <a href="https://www.google.com/search?q=HAIR+BY+NANCY+%26+HAYDER+Windsor+ON&hl=en&gl=CA&sll=42.301389,-83.053889&sztp=MTQ2NTI2OTA0ODk2NTgyMTQ5MzI&tbm=lcl&lra=ChQKDQoJL2cvMWs2M3N6Z2wQAhABGgIIAQ&rldimm=14652690489658214932&rldoc=1&rllag=42299878,-83050410,13&rldov=1&lsig=AB86z5X6tLq4NqN9pQ4z9R-0Q-9A" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-amber-600 hover:text-amber-700 transition-colors group">
              Read All 259 Reviews on Google <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Our Signature Services</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Discover our range of expert hair care and styling services, designed to bring out your best look.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-stone-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200 text-center flex flex-col items-center">
                  <div className="p-4 bg-amber-100 rounded-full mb-6">
                    <service.icon size={36} className="text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-700 mb-6 flex-grow">{service.description}</p>
                  <a href={service.link} className="mt-auto inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
                    Learn More <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stylist Spotlight */}
        <section id="stylists" className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Meet Your Stylists</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Get to know Nancy & Hayder, the passionate professionals behind your next great hair day.</p>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {stylists.map((stylist, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-200 text-center flex flex-col items-center">
                  <img src={stylist.image} alt={stylist.name} className="w-32 h-32 object-cover rounded-full mb-6 border-4 border-amber-300 shadow-md" />
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{stylist.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{stylist.specialty}</p>
                  <p className="text-stone-700 mb-6 flex-grow">{stylist.bioSnippet}</p>
                  <a href={`#contact`} className="mt-auto inline-flex items-center gap-2 text-stone-900 px-6 py-2 bg-amber-400 rounded-full font-semibold hover:bg-amber-300 transition-colors group shadow-md">
                    Book with {stylist.name} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us (Brief) */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Our Salon Story</h2>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">HAIR BY NANCY & HAYDER is more than just a salon; it's a place where passion for hair meets personalized service. With over 15 years of combined experience, Nancy and Hayder opened their doors in Windsor to create a welcoming space where every client can achieve their dream look.</p>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">We are dedicated to using professional-grade products, staying ahead of trends, and ensuring every visit leaves you feeling confident and beautiful. Your hair journey is our passion.</p>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-lg font-semibold text-stone-900 px-8 py-3 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors group shadow-lg">
              Experience the Difference <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="location-hours" className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Find Us</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Visit us at our welcoming salon in the heart of Windsor, ON.</p>

            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              {/* Google Map Embed */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200 h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.871147053073!2d-83.053889!3d42.301389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d18b2c4e61f%3A0x7d6a5c2d3b2e7a9b!2s2274%20Wyandotte%20St%20W%2C%20Windsor%2C%20ON%20N9B%201K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200 text-left">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Contact & Hours</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-lg text-stone-700"><MapPin size={24} className="text-amber-600 mr-3 flex-shrink-0" /> 2274 Wyandotte St W, Windsor, ON N9B 1K4</p>
                  <a href="tel:+15192548053" className="flex items-center text-lg text-stone-700 hover:text-amber-600 transition-colors"><Phone size={24} className="text-amber-600 mr-3 flex-shrink-0" /> +1 519-254-8053</a>
                  <a href="mailto:hello@hairbynancyandhayder.com" className="flex items-center text-lg text-stone-700 hover:text-amber-600 transition-colors"><Mail size={24} className="text-amber-600 mr-3 flex-shrink-0" /> hello@hairbynancyandhayder.com</a>
                  
                  <div className="pt-4">
                    <h4 className="font-bold text-xl text-stone-900 mb-2">Our Hours:</h4>
                    <ul className="text-lg text-stone-700 space-y-1">
                      <li><Clock size={20} className="inline-block text-amber-600 mr-2 -mt-1" /> Tuesday - Friday: 10:00 AM - 6:00 PM</li>
                      <li><Clock size={20} className="inline-block text-amber-600 mr-2 -mt-1" /> Saturday: 9:00 AM - 4:00 PM</li>
                      <li><Clock size={20} className="inline-block text-amber-600 mr-2 -mt-1" /> Sunday & Monday: Closed</li>
                    </ul>
                  </div>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=2274+Wyandotte+St+W,+Windsor,+ON+N9B+1K4" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-stone-900 px-6 py-3 bg-amber-400 rounded-full font-semibold hover:bg-amber-300 transition-colors group shadow-md">
                  Get Directions <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Frequently Asked Questions</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Have questions? We've got answers. Find more information about our services and policies.</p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-stone-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-200">
                  <button
                    className="w-full flex justify-between items-center p-6 text-xl font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-t-xl"
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <span>{activeFaq === index ? <X size={24} /> : <ArrowRight size={24} />}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="p-6 pt-0 text-lg text-stone-700 text-left border-t border-stone-200 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">Book Your Appointment</h2>
            <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Ready for a fresh look? Schedule your visit online or get in touch with us directly.</p>

            <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl border border-stone-200">
              {isContactFormSubmitted ? (
                <div className="text-center py-10">
                  <Check size={64} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-stone-900 mb-4">Thank You!</h3>
                  <p className="text-xl text-stone-700">Your appointment request has been received. We'll be in touch within 2 hours to confirm your booking.</p>
                  <button onClick={() => setIsContactFormSubmitted(false)} className="mt-8 px-8 py-3 bg-amber-400 text-stone-900 rounded-full font-semibold hover:bg-amber-300 transition-colors shadow-md">
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} className="space-y-6 text-left">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-stone-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                      placeholder="John Doe" required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-stone-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactFormChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                      placeholder="(123) 456-7890" required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-stone-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-lg font-medium text-stone-700 mb-2">Preferred Service</label>
                    <select
                      id="service"
                      name="service"
                      value={contactForm.service}
                      onChange={handleContactFormChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="womens-haircut">Women's Haircut & Styling</option>
                      <option value="mens-haircut">Men's Haircut & Grooming</option>
                      <option value="hair-color">Hair Color & Balayage</option>
                      <option value="hair-treatments">Hair Treatments</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-stone-700 mb-2">Your Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors bg-stone-50"
                      placeholder="Any specific requests or preferred dates/times?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-amber-400 text-stone-900 rounded-full text-xl font-bold hover:bg-amber-300 transition-colors shadow-lg flex items-center justify-center gap-3"
                  >
                    <Calendar size={24} /> Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">HAIR BY NANCY & HAYDER</h3>
            <p className="text-stone-300">Your premier destination for exceptional hair care in Windsor, ON. Crafting perfect styles, one client at a time.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}><a href={item.href} className="text-stone-300 hover:text-amber-300 transition-colors">{item.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-2 text-stone-300">
              <li className="flex items-center justify-center md:justify-start"><MapPin size={18} className="mr-2" /> 2274 Wyandotte St W, Windsor, ON</li>
              <li className="flex items-center justify-center md:justify-start"><Phone size={18} className="mr-2" /> +1 519-254-8053</li>
              <li className="flex items-center justify-center md:justify-start"><Mail size={18} className="mr-2" /> hello@hairbynancyandhayder.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} HAIR BY NANCY & HAYDER. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
