import React, { useState } from 'react';
import { Phone, Star, MapPin, Check, Mail, Clock, ShieldCheck, ArrowRight, Menu, X, CalendarDays, Cut, Palette, Sparkles, UserRound, Award } from 'lucide-react';

function App() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for FAQ accordions
  const [openFaq, setOpenFaq] = useState(null);

  // Helper for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on navigation
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setFormSubmitted(true);
      setIsSubmitting(false);
      setFormData({ // Reset form after submission
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Mock data for reviews (since no live widget)
  const reviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      text: "Nancy gave me the best balayage I've ever had! She truly listened to what I wanted and the result was stunning. Highly recommend!",
    },
    {
      id: 2,
      author: 'David P.',
      rating: 4,
      text: "Hayder always gives a sharp, clean fade. Quick service and a friendly atmosphere. My go-to spot for a fresh cut.",
    },
    {
      id: 3,
      author: 'Jessica L.',
      rating: 5,
      text: "Such a welcoming salon! The team is amazing, and my hair treatments have made a huge difference. Absolutely love coming here.",
    },
  ];

  // Mock data for services
  const services = [
    {
      name: "Women's Haircuts & Styling",
      description: "Precision cuts, luxurious blowouts, and personalized styling for all hair types.",
      icon: Cut,
      price: "$45 - $85",
    },
    {
      name: "Men's Haircuts & Grooming",
      description: "Sharp fades, classic cuts, beard trims, and modern grooming for the discerning gentleman.",
      icon: UserRound,
      price: "$30 - $55",
    },
    {
      name: "Hair Color & Balayage",
      description: "From subtle highlights to vibrant balayage and expert color corrections. Consultation required.",
      icon: Palette,
      price: "From $120",
    },
    {
      name: "Hair Treatments",
      description: "Deep conditioning, keratin treatments, and restorative therapies for healthy, beautiful hair.",
      icon: Sparkles,
      price: "From $60",
    },
  ];

  // Mock data for FAQ
  const faqs = [
    {
      question: "How far in advance should I book an appointment?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially for color services or weekend appointments. However, we often have same-day availability for haircuts, so feel free to call!",
    },
    {
      question: "Can I request a specific stylist?",
      answer: "Absolutely! You can request Nancy or Hayder when booking your appointment online or over the phone. We encourage you to view their portfolios to find the best fit for your style.",
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations or rescheduling. A fee may apply for late cancellations or no-shows. Please call us directly to make any changes.",
    },
    {
      question: "Do you offer walk-ins?",
      answer: "While walk-ins are welcome, appointments are highly recommended to ensure you get the service and stylist you desire without a wait. We do our best to accommodate walk-ins when possible.",
    },
    {
      question: "What products do you use and sell?",
      answer: "We proudly use and retail a selection of professional-grade, cruelty-free products known for their quality and effectiveness. Our stylists can recommend the best products for your hair type.",
    },
  ];

  // Helper for generating star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div className="font-sans antialiased text-stone-800 bg-stone-50">
      {/* Sticky Mobile Nav/Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4 px-6 md:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-900">HAIR BY NANCY & HAYDER</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-3">
            <a onClick={() => scrollToSection('hero')} className="block text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer">Home</a>
            <a onClick={() => scrollToSection('services')} className="block text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer">Services</a>
            <a onClick={() => scrollToSection('stylists')} className="block text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer">Stylists</a>
            <a onClick={() => scrollToSection('contact')} className="block text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer">Contact</a>
            <a href="tel:+15192548053" className="w-full text-center py-3 px-6 rounded-lg bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-700 transition-colors duration-300">Call Now</a>
            <a onClick={() => scrollToSection('booking')} className="w-full text-center py-3 px-6 rounded-lg border border-amber-600 text-amber-600 font-semibold hover:bg-amber-50 transition-colors duration-300">Book Online</a>
          </nav>
        )}
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-4 px-8 items-center justify-between">
        <h1 className="text-2xl font-bold text-stone-900">HAIR BY NANCY & HAYDER</h1>
        <div className="flex space-x-8 items-center">
          <a onClick={() => scrollToSection('hero')} className="text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer transition-colors duration-200">Home</a>
          <a onClick={() => scrollToSection('services')} className="text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer transition-colors duration-200">Services</a>
          <a onClick={() => scrollToSection('stylists')} className="text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer transition-colors duration-200">Stylists</a>
          <a onClick={() => scrollToSection('contact')} className="text-lg font-medium text-stone-700 hover:text-amber-700 cursor-pointer transition-colors duration-200">Contact</a>
          <a onClick={() => scrollToSection('booking')} className="py-2.5 px-6 rounded-lg bg-amber-600 text-white font-semibold shadow-md hover:bg-amber-700 transition-colors duration-300 flex items-center gap-2">
            <CalendarDays size={20} /> Book Now
          </a>
        </div>
      </nav>

      <main className="pt-20 md:pt-28"> {/* Offset for sticky header */}
        {/* Hero Section */}
        <section id="hero" className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-6"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549449779-117865766280?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-stone-900 opacity-60"></div>
          <div className="relative z-10 text-white max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Crafting Your Perfect Look in Windsor, ON
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90">
              Award-Winning Hair Care by Nancy & Hayder. Trusted by 259+ customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a onClick={() => scrollToSection('booking')} className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white text-lg font-bold rounded-lg shadow-xl hover:bg-amber-700 transition-transform duration-300 hover:scale-105">
                Book an Appointment
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="tel:+15192548053" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-white hover:text-stone-900 transition-colors duration-300">
                <Phone className="mr-2" size={20} />
                Call Now: (519) 254-8053
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-3">
              <Award className="text-amber-600" size={32} />
              What Our Clients Say
            </h3>
            <div className="flex items-center justify-center text-amber-500 mb-8">
              {renderStars(4.5)}
              <span className="text-stone-700 ml-3 text-xl font-semibold">4.5★ ({reviews.length} Reviews)</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-stone-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stone-100">
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                    <span className="ml-3 text-stone-800 font-semibold">{review.author}</span>
                  </div>
                  <p className="text-stone-700 italic leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-stone-50 to-stone-100">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Our Services</h3>
            <p className="text-xl text-stone-700 mb-12 max-w-2xl mx-auto">
              Discover a wide range of professional hair services tailored to your unique style and needs.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-stone-100 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                  <div className="mb-4 text-amber-600">
                    <service.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-semibold text-stone-900 mb-3">{service.name}</h4>
                  <p className="text-stone-700 mb-4 flex-grow">{service.description}</p>
                  <span className="text-amber-700 font-bold text-lg mb-4">{service.price}</span>
                  <a href="#" className="flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">
                    Learn More <ArrowRight className="ml-1" size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stylist Spotlight */}
        <section id="stylists" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Meet Your Stylists</h3>
            <p className="text-xl text-stone-700 mb-12 max-w-2xl mx-auto">
              Nancy and Hayder bring years of experience and passion to every cut, color, and style.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Nancy */}
              <div className="flex flex-col items-center bg-stone-50 p-8 rounded-xl shadow-lg border border-stone-100">
                <img src="https://images.unsplash.com/photo-1598460677840-a19f6a7d519b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nancy, Senior Stylist" className="w-48 h-48 rounded-full object-cover mb-6 shadow-md" />
                <h4 className="text-3xl font-semibold text-stone-900 mb-2">Nancy</h4>
                <p className="text-amber-600 text-lg font-medium mb-4">Senior Stylist | Color Specialist</p>
                <p className="text-stone-700 leading-relaxed mb-6 max-w-md">
                  With over 12 years of experience, Nancy is renowned for her exquisite balayage techniques, precision cuts, and ability to transform hair while maintaining its health and vibrancy.
                </p>
                <a href="#" className="flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300">
                  View Nancy's Portfolio <ArrowRight className="ml-2" size={18} />
                </a>
              </div>

              {/* Hayder */}
              <div className="flex flex-col items-center bg-stone-50 p-8 rounded-xl shadow-lg border border-stone-100">
                <img src="https://images.unsplash.com/photo-1549449779-117865766280?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hayder, Master Barber" className="w-48 h-48 rounded-full object-cover mb-6 shadow-md" />
                <h4 className="text-3xl font-semibold text-stone-900 mb-2">Hayder</h4>
                <p className="text-amber-600 text-lg font-medium mb-4">Master Barber | Men's Grooming Expert</p>
                <p className="text-stone-700 leading-relaxed mb-6 max-w-md">
                  Hayder specializes in modern men's haircuts, sharp fades, and meticulous beard grooming. His attention to detail ensures every client leaves looking and feeling their best.
                </p>
                <a href="#" className="flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300">
                  View Hayder's Portfolio <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="location" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Find Us</h3>
            <p className="text-xl text-stone-700 mb-12 max-w-2xl mx-auto">
              Visit our salon conveniently located in the heart of Windsor, ON.
            </p>

            <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg border border-stone-100">
              {/* Google Map */}
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.584347738361!2d-83.07843438453472!3d42.31686777918559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d184a44b361%3A0x6d90e21a221f727c!2s2274%20Wyandotte%20St%20W%2C%20Windsor%2C%20ON%20N9B%201K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map of Hair by Nancy & Hayder"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="text-left space-y-6 flex flex-col justify-center">
                <div className="flex items-center">
                  <MapPin className="text-amber-600 mr-4" size={28} strokeWidth={1.5} />
                  <div>
                    <p className="text-stone-700 text-lg">2274 Wyandotte St W,</p>
                    <p className="text-stone-700 text-lg">Windsor, ON N9B 1K4, Canada</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-amber-600 mr-4" size={28} strokeWidth={1.5} />
                  <a href="tel:+15192548053" className="text-stone-700 text-lg hover:text-amber-700 transition-colors duration-200">(519) 254-8053</a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-amber-600 mr-4" size={28} strokeWidth={1.5} />
                  <a href="mailto:hello@hairbynancyandhayder.com" className="text-stone-700 text-lg hover:text-amber-700 transition-colors duration-200">hello@hairbynancyandhayder.com</a>
                </div>
                <div className="flex items-start">
                  <Clock className="text-amber-600 mr-4 mt-1" size={28} strokeWidth={1.5} />
                  <div>
                    <h4 className="text-xl font-semibold text-stone-900 mb-2">Hours of Operation</h4>
                    <ul className="text-stone-700 text-lg space-y-1">
                      <li>Monday: Closed</li>
                      <li>Tuesday - Friday: 10:00 AM - 7:00 PM</li>
                      <li>Saturday: 9:00 AM - 5:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=2274+Wyandotte+St+W,+Windsor,+ON+N9B+1K4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300 self-start">
                  Get Directions <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Booking/Contact Form Section */}
        <section id="booking" className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-stone-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Book Your Appointment</h3>
            <p className="text-xl text-stone-700 mb-12">
              Ready for a fresh new look? Fill out the form below or call us to schedule your visit.
            </p>

            <div id="contact" className="bg-white p-8 rounded-xl shadow-lg border border-stone-100 text-left">
              {formSubmitted ? (
                <div className="text-center p-8">
                  <Check className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-3xl font-bold text-stone-900 mb-4">Thank You!</h4>
                  <p className="text-lg text-stone-700">Your appointment request has been received. We'll contact you within 2 hours to confirm your booking.</p>
                  <button onClick={() => setFormSubmitted(false)} className="mt-6 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300">
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-stone-700 mb-1">Preferred Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 bg-white"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Women's Haircut">Women's Haircut & Styling</option>
                      <option value="Men's Haircut">Men's Haircut & Grooming</option>
                      <option value="Hair Color/Balayage">Hair Color & Balayage</option>
                      <option value="Hair Treatment">Hair Treatment</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Your Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-br from-stone-100 to-stone-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-stone-900 mb-6">Frequently Asked Questions</h3>
            <p className="text-xl text-stone-700 mb-12">
              Have questions? We've got answers! Find information about booking, services, and policies.
            </p>

            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-stone-100">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-xl font-semibold text-stone-900 focus:outline-none"
                  >
                    {faq.question}
                    {openFaq === index ? <X size={20} className="text-amber-600" /> : <ArrowRight size={20} className="text-amber-600" />}
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-stone-700 leading-relaxed animate-fade-in-down">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-200 py-12 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-full lg:col-span-1 mb-8 lg:mb-0">
            <h4 className="text-3xl font-bold text-white mb-4">HAIR BY NANCY & HAYDER</h4>
            <p className="text-stone-300 mb-4">
              Crafting beautiful hair in Windsor, ON since 2010. Experience the difference of expert care.
            </p>
            <div className="flex items-center text-amber-500 mb-2">
              {renderStars(4.5)}
              <span className="ml-2 text-stone-300">4.5★ ({reviews.length} Reviews)</span>
            </div>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('hero')} className="text-stone-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer">Home</a></li>
              <li><a onClick={() => scrollToSection('services')} className="text-stone-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer">Services</a></li>
              <li><a onClick={() => scrollToSection('stylists')} className="text-stone-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer">Stylists</a></li>
              <li><a onClick={() => scrollToSection('booking')} className="text-stone-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer">Book Now</a></li>
              <li><a onClick={() => scrollToSection('contact')} className="text-stone-300 hover:text-amber-600 transition-colors duration-200 cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Contact Info</h5>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin className="mr-3" size={20} /><span className="text-stone-300">2274 Wyandotte St W, Windsor, ON N9B 1K4</span></li>
              <li className="flex items-center"><Phone className="mr-3" size={20} /><a href="tel:+15192548053" className="text-stone-300 hover:text-amber-600 transition-colors duration-200">(519) 254-8053</a></li>
              <li className="flex items-center"><Mail className="mr-3" size={20} /><a href="mailto:hello@hairbynancyandhayder.com" className="text-stone-300 hover:text-amber-600 transition-colors duration-200">hello@hairbynancyandhayder.com</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Hours</h5>
            <ul className="space-y-2 text-stone-300">
              <li>Mon: Closed</li>
              <li>Tue - Fri: 10 AM - 7 PM</li>
              <li>Sat: 9 AM - 5 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-10 pt-8 text-center text-stone-400">
          &copy; {new Date().getFullYear()} HAIR BY NANCY & HAYDER. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;