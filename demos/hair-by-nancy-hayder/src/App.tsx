import React, { useState } from 'react';
import { Phone, Star, MapPin, Check, Mail, Clock, ShieldCheck, ArrowRight, Menu, X, Scissors, Droplets, SprayCan, Sparkles, User, Hair, CalendarCheck, Quote, Facebook, Instagram } from 'lucide-react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setSubmitSuccess(true);
      // Optional: Reset form fields after successful submission
      // setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      // setFormSubmitted(false);
      // setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const reviews = [
    {
      name: "Sarah M.",
      text: "Nancy gave me the best balayage I've ever had! She truly listens and understands what you want. The salon atmosphere is so welcoming.",
      rating: 5,
    },
    {
      name: "Michael T.",
      text: "Hayder is a master with men's cuts. Always a perfect fade and great conversation. I wouldn't go anywhere else in Windsor.",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "My hair color was a disaster after a home dye kit. Nancy fixed it perfectly, I'm so grateful! Highly recommend for color correction.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Hair className="w-8 h-8 text-amber-500" />,
      title: "Women's Haircuts & Styling",
      description: "Precision cuts, luxurious blowouts, and personalized styling for every occasion.",
      link: "#services",
    },
    {
      icon: <User className="w-8 h-8 text-amber-500" />,
      title: "Men's Haircuts & Grooming",
      description: "Sharp fades, classic cuts, and expert beard grooming for the modern gentleman.",
      link: "#services",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: "Hair Color & Balayage",
      description: "Stunning custom color, balayage, highlights, and expert color correction.",
      link: "#services",
    },
    {
      icon: <Droplets className="w-8 h-8 text-amber-500" />,
      title: "Hair Treatments",
      description: "Restore health and shine with our nourishing keratin treatments and deep conditioning.",
      link: "#services",
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book an appointment?",
      answer: "We recommend booking at least 1-2 weeks in advance for popular services, especially on weekends. However, we do offer same-day appointments when available, so feel free to call!",
    },
    {
      question: "Do you offer walk-in appointments?",
      answer: "While we prioritize appointments, we do accept walk-ins based on stylist availability. Calling ahead is always recommended to avoid a wait.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We kindly request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the slot to other clients.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and cash.",
    },
    {
      question: "Do you offer consultations for hair color services?",
      answer: "Yes, we highly recommend a complimentary consultation for all new color clients to discuss your hair goals, assess your hair, and provide an accurate quote.",
    },
  ];

  return (
    <div className="font-sans antialiased text-neutral-800 bg-neutral-50">
      {/* Sticky Mobile Nav / Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-neutral-900 border-t border-amber-600 shadow-lg z-50 flex justify-around items-center h-16">
        <button onClick={() => scrollToSection('booking')} className="flex flex-col items-center text-xs text-amber-300 hover:text-amber-100 transition-colors">
          <CalendarCheck className="w-5 h-5 mb-0.5" />
          Book
        </button>
        <a href="tel:+15192548053" className="flex flex-col items-center text-xs text-amber-300 hover:text-amber-100 transition-colors">
          <Phone className="w-5 h-5 mb-0.5" />
          Call Us
        </a>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex flex-col items-center text-xs text-amber-300 hover:text-amber-100 transition-colors">
          {isMobileMenuOpen ? <X className="w-5 h-5 mb-0.5" /> : <Menu className="w-5 h-5 mb-0.5" />}
          Menu
        </button>
      </div>

      {/* Main Navigation (Desktop) */}
      <nav className="hidden md:flex sticky top-0 bg-neutral-900 bg-opacity-95 backdrop-blur-sm z-40 shadow-lg py-4 px-8 justify-between items-center border-b border-amber-600">
        <div className="text-2xl font-bold text-amber-400">HAIR BY NANCY & HAYDER</div>
        <ul className="flex space-x-8 text-neutral-200">
          <li><button onClick={() => scrollToSection('hero')} className="hover:text-amber-400 transition-colors">Home</button></li>
          <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
          <li><button onClick={() => scrollToSection('stylists')} className="hover:text-amber-400 transition-colors">Stylists</button></li>
          <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
          <li><button onClick={() => scrollToSection('reviews')} className="hover:text-amber-400 transition-colors">Reviews</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
        </ul>
        <button onClick={() => scrollToSection('booking')} className="px-5 py-2 bg-amber-500 text-neutral-900 font-semibold rounded-full hover:bg-amber-400 transition-all shadow-md">
          Book Now
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-90 z-50 md:hidden flex flex-col items-center justify-center p-8">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 text-neutral-100">
            <X className="w-8 h-8" />
          </button>
          <ul className="text-3xl text-neutral-100 space-y-6 text-center">
            <li><button onClick={() => scrollToSection('hero')} className="hover:text-amber-400 transition-colors">Home</button></li>
            <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
            <li><button onClick={() => scrollToSection('stylists')} className="hover:text-amber-400 transition-colors">Stylists</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
            <li><button onClick={() => scrollToSection('reviews')} className="hover:text-amber-400 transition-colors">Reviews</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
            <li>
              <button onClick={() => scrollToSection('booking')} className="mt-8 px-8 py-3 bg-amber-500 text-neutral-900 text-xl font-semibold rounded-full hover:bg-amber-400 transition-all shadow-lg">
                Book an Appointment
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4 md:p-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549429159-a5c960411edb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-neutral-950 bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-neutral-50 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            HAIR BY NANCY & HAYDER — <br className="md:hidden"/>Your Signature Style Awaits in Windsor, ON
          </h1>
          <p className="text-lg md:text-xl font-light text-neutral-200">
            Trusted by 259+ clients | 4.5<Star className="inline-block w-5 h-5 text-amber-400 fill-amber-400 -mt-1" /> rated salon | Personalized care since 2005
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button onClick={() => scrollToSection('booking')} className="px-8 py-4 bg-amber-500 text-neutral-900 text-lg font-bold rounded-full hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center">
              Book an Appointment <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <a href="tel:+15192548053" className="px-8 py-4 bg-neutral-700 text-neutral-50 text-lg font-semibold rounded-full hover:bg-neutral-600 transition-all shadow-xl flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" /> Call Now: (519) 254-8053
            </a>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section id="reviews" className="bg-neutral-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center mb-10 text-neutral-700">
            <Star className="w-7 h-7 text-amber-500 fill-amber-500 mr-1" />
            <span className="text-2xl font-semibold">4.5★ Rating</span>
            <span className="text-xl mx-2">across</span>
            <span className="text-2xl font-semibold">259 Google Reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <Quote className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-neutral-700 italic mb-4">"{review.text}"</p>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-neutral-800">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Signature Services</h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Discover a wide range of expert hair services designed to bring your vision to life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-xl shadow-md border border-neutral-200 text-left hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-700 mb-4">{service.description}</p>
                <button onClick={() => scrollToSection('booking')} className="text-amber-600 font-semibold flex items-center hover:text-amber-500 transition-colors">
                  Book Service <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylist Spotlight */}
      <section id="stylists" className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Meet Our Expert Stylists</h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Nancy & Hayder bring years of experience and passion to every client, ensuring you leave feeling confident and beautiful.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1594973302799-a41e97686526?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nancy, Senior Stylist" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Nancy</h3>
              <p className="text-amber-600 font-semibold mb-4">Senior Stylist | Color & Balayage Specialist</p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                With over 15 years of experience, Nancy is renowned for her exquisite balayage techniques, precision cuts, and transformative color corrections. She believes in creating a personalized look that enhances your natural beauty and lifestyle.
              </p>
              <button onClick={() => scrollToSection('booking')} className="px-6 py-3 bg-neutral-800 text-neutral-50 font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center mx-auto">
                Book with Nancy <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1606558661642-1698b6710b10?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hayder, Master Barber" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Hayder</h3>
              <p className="text-amber-600 font-semibold mb-4">Master Barber | Men's Grooming Expert</p>
              <p className="text-neutral-700 leading-relaxed mb-6">
                Hayder brings a modern touch to classic barbering. Specializing in sharp fades, stylish men's cuts, and expert beard grooming, he ensures every client leaves with a look that's both polished and distinct.
              </p>
              <button onClick={() => scrollToSection('booking')} className="px-6 py-3 bg-neutral-800 text-neutral-50 font-semibold rounded-full hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center mx-auto">
                Book with Hayder <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Story & Philosophy</h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              HAIR BY NANCY & HAYDER was founded with a passion for exceptional haircare and a commitment to personalized service. We believe that a great haircut or color can transform not just your look, but your confidence. Our salon is a place where creativity meets comfort.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              With over 15 years of combined experience, we continuously seek education in the latest techniques and use only professional-grade products to ensure stunning, healthy results. Your hair journey is our priority.
            </p>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-center"><Check className="w-5 h-5 text-amber-500 mr-2" /> Personalized Consultations</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-amber-500 mr-2" /> Expert Stylists with Years of Experience</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-amber-500 mr-2" /> Premium Products for Lasting Results</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-amber-500 mr-2" /> Relaxing & Welcoming Atmosphere</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1503951458535-fc1972b212f4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Salon Interior" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-neutral-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Visit Our Salon</h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Find us conveniently located on Wyandotte Street West in Windsor, Ontario.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left bg-white p-8 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Contact & Location</h3>
              <div className="space-y-4 text-neutral-700 text-lg">
                <p className="flex items-center"><MapPin className="w-6 h-6 text-amber-500 mr-3" /> 2274 Wyandotte St W, Windsor, ON N9B 1K4, Canada</p>
                <p className="flex items-center"><Phone className="w-6 h-6 text-amber-500 mr-3" /> <a href="tel:+15192548053" className="hover:text-amber-600 transition-colors">+1 (519) 254-8053</a></p>
                <p className="flex items-center"><Mail className="w-6 h-6 text-amber-500 mr-3" /> <a href="mailto:hello@hairbynancyandhayder.com" className="hover:text-amber-600 transition-colors">hello@hairbynancyandhayder.com</a></p>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">Hours of Operation</h3>
              <div className="space-y-2 text-neutral-700 text-lg">
                <p className="flex items-center"><Clock className="w-6 h-6 text-amber-500 mr-3" /> Tuesday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="flex items-center"><Clock className="w-6 h-6 text-amber-500 mr-3" /> Sunday - Monday: Closed</p>
                <p className="text-amber-600 font-semibold mt-4">Currently Open: Yes!</p>
              </div>
              <a href="https://www.google.com/maps/dir/?api=1&destination=2274+Wyandotte+St+W,+Windsor,+ON+N9B+1K4" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center px-6 py-3 bg-amber-500 text-neutral-900 font-semibold rounded-full hover:bg-amber-400 transition-colors shadow-md">
                Get Directions <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.596851608754!2d-83.07632948454743!3d42.30826977918968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d184a44b98d%3A0x74229b47e87127e!2s2274%20Wyandotte%20St%20W%2C%20Windsor%2C%20ON%20N9B%201K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact Form & FAQ */}
      <section id="booking" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Book Your Appointment</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Fill out the form below to request an appointment or send us a general inquiry. We'll get back to you within 2 hours!
            </p>
            {submitSuccess ? (
              <div className="p-6 bg-green-100 text-green-800 rounded-lg flex items-center space-x-3">
                <Check className="w-6 h-6" />
                <p className="font-semibold text-lg">Thank you! Your message has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-700 text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neutral-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-neutral-700 text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-neutral-700 text-sm font-semibold mb-2">Preferred Service (Optional)</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Women's Haircut & Styling">Women's Haircut & Styling</option>
                    <option value="Men's Haircut & Grooming">Men's Haircut & Grooming</option>
                    <option value="Hair Color & Balayage">Hair Color & Balayage</option>
                    <option value="Hair Treatments">Hair Treatments</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-neutral-700 text-sm font-semibold mb-2">Your Message / Appointment Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 text-neutral-900 text-lg font-bold rounded-full hover:bg-amber-400 transition-all shadow-md flex items-center justify-center"
                >
                  {formSubmitted ? 'Submitting...' : 'Send Message / Request Appointment'} <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="bg-neutral-50 p-8 rounded-xl shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg text-neutral-800 bg-white hover:bg-neutral-50 transition-colors"
                    onClick={() => handleFAQToggle(index)}
                  >
                    {faq.question}
                    {openFAQ === index ? <X className="w-5 h-5 text-amber-500" /> : <ArrowRight className="w-5 h-5 text-neutral-600" />}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-neutral-50 text-neutral-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">HAIR BY NANCY & HAYDER</h3>
            <p className="text-neutral-400">2274 Wyandotte St W, Windsor, ON N9B 1K4</p>
            <p className="text-neutral-400">Phone: <a href="tel:+15192548053" className="hover:text-amber-400 transition-colors">+1 (519) 254-8053</a></p>
            <p className="text-neutral-400">Email: <a href="mailto:hello@hairbynancyandhayder.com" className="hover:text-amber-400 transition-colors">hello@hairbynancyandhayder.com</a></p>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-neutral-200 mb-4">Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-amber-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('stylists')} className="hover:text-amber-400 transition-colors">Stylists</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Social Media & Copyright */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-neutral-200 mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
            <p className="text-sm text-neutral-500 mt-8">&copy; {new Date().getFullYear()} HAIR BY NANCY & HAYDER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
