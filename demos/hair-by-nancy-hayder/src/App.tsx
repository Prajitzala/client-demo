import React, { useState, useEffect } from 'react';
import { Phone, Star, MapPin, Check, Mail, Clock, ShieldCheck, ArrowRight, Menu, X, Scissors, Brush, Droplet, User, Sparkles, Instagram, Facebook } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleFAQToggle = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call or form submission
    console.log('Form Submitted:', formData);
    setContactFormSubmitted(true);
    // Optionally reset form after a delay
    setTimeout(() => {
      setContactFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  // Sample Data for content sections
  const reviews = [
    { name: "Sarah K.", text: "Nancy gave me the best balayage I've ever had! She's truly an artist. Highly recommend this salon!", rating: 5 },
    { name: "Mike T.", text: "Hayder always gets my fade perfect. Quick, professional, and friendly. Best men's cut in Windsor.", rating: 5 },
    { name: "Jessica R.", text: "Lovely salon and incredibly welcoming staff. My hair feels amazing after my treatment. Thank you!", rating: 4.5 },
    { name: "Emily C.", text: "Always a great experience! Nancy listens to exactly what I want and delivers every time. Pure talent.", rating: 5 },
  ];

  const services = [
    { icon: Scissors, name: "Women's Haircuts & Styling", description: "Precision cuts, luxurious blowouts, and elegant styling." },
    { icon: User, name: "Men's Haircuts & Grooming", description: "Sharp fades, classic cuts, and expert beard detailing." },
    { icon: Sparkles, name: "Hair Color & Balayage", description: "Vibrant colors, natural balayage, and expert color correction." },
    { icon: Droplet, name: "Hair Treatments", description: "Revitalizing keratin, deep conditioning, and scalp treatments." },
  ];

  const stylists = [
    { name: "Nancy", specialty: "Color & Balayage Specialist", experience: "12+ years", bio: "Nancy is renowned for her exceptional eye for color, transforming hair with stunning balayage and vibrant hues. Her precision cutting techniques ensure every client leaves with a look that perfectly suits their style.", image: "https://images.unsplash.com/photo-1544717305-ad2d1847c162?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Placeholder image
    { name: "Hayder", specialty: "Men's & Precision Cuts", experience: "10+ years", bio: "Hayder's expertise lies in sharp, modern men's haircuts and intricate precision cuts for all. His attention to detail ensures a flawless finish, making him a favorite for clients seeking a perfect fade or a classic, sophisticated style.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Placeholder image
  ];

  const faqs = [
    { question: "How far in advance should I book an appointment?", answer: "We recommend booking at least 1-2 weeks in advance for color services and weekend appointments. For cuts, same-day appointments are often available, but booking ahead is always best." },
    { question: "Do you offer walk-ins?", answer: "While we do accept walk-ins when possible, we highly recommend booking an appointment to ensure we can accommodate your desired service and stylist. Call ahead to check availability!" },
    { question: "What is your cancellation policy?", answer: "We kindly request at least 24 hours notice for cancellations or rescheduling. This allows us to offer your slot to another client. Missed appointments or late cancellations may incur a fee." },
    { question: "Do you offer consultations for color services?", answer: "Yes, we offer complimentary consultations for all new color clients. This allows us to discuss your hair goals, assess your hair's condition, and provide an accurate quote." },
    { question: "What products do you use?", answer: "We proudly use professional-grade, salon-exclusive products known for their quality and performance. Our stylists can recommend the best products for your hair type and needs." },
  ];

  // Helper for star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array(fullStars).fill(0).map((_, i) => <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
        {hasHalfStar && <Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />} {/* Simple half-star */}
        {Array(emptyStars).fill(0).map((_, i) => <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />)}
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-[#fdfaf6] to-[#fae8e3] min-h-screen">
      {/* Sticky Navbar (Mobile) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg md:hidden">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-[#6a4c4c]">NANCY & HAYDER</a>
          <button onClick={toggleMobileMenu} className="text-[#6a4c4c]">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="bg-white pb-4">
            <ul className="flex flex-col items-center space-y-3">
              <li><a href="#services" onClick={toggleMobileMenu} className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors">Services</a></li>
              <li><a href="#stylists" onClick={toggleMobileMenu} className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors">Stylists</a></li>
              <li><a href="#about" onClick={toggleMobileMenu} className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors">About</a></li>
              <li><a href="#contact" onClick={toggleMobileMenu} className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors">Contact</a></li>
              <li><a href="#faq" onClick={toggleMobileMenu} className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors">FAQ</a></li>
            </ul>
            <div className="mt-4 text-center">
              <a href="tel:+15192548053" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-md">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Desktop Navbar */}
      <header className="hidden md:block bg-white shadow-md py-4 sticky top-0 z-40">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold text-[#6a4c4c]">HAIR BY NANCY & HAYDER</a>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#services" className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors font-medium">Services</a></li>
              <li><a href="#stylists" className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors font-medium">Stylists</a></li>
              <li><a href="#about" className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors font-medium">About</a></li>
              <li><a href="#contact" className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors font-medium">Contact</a></li>
              <li><a href="#faq" className="text-lg text-gray-700 hover:text-[#b87c7c] transition-colors font-medium">FAQ</a></li>
            </ul>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-lg">
            Book Appointment
          </a>
        </div>
      </header>

      <main className="md:pt-0 pt-16"> {/* Adjust padding for sticky mobile nav */}
        {/* Hero Section */}
        <section id="hero" className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596464871958-86d498ad0674?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-lg">
              Balayage, Cuts & Color by Nancy & Hayder
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md">
              Trusted by 259+ customers | 4.5<Star className="inline w-5 h-5 fill-yellow-400 text-yellow-400 -mt-1" /> rated salon | Same-day bookings available
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-[#6a4c4c] bg-white hover:bg-gray-100 transition-colors shadow-xl text-lg">
                Book an Appointment
              </a>
              <a href="tel:+15192548053" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-semibold rounded-full text-white hover:bg-white hover:text-[#6a4c4c] transition-colors shadow-xl text-lg">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section id="trust-signals" className="py-16 bg-[#f8f0ed]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-10">What Our Clients Say</h2>
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 mr-2" />
              <span className="text-4xl font-bold text-gray-700">4.5</span>
              <span className="text-xl text-gray-500 ml-2">/ 5.0</span>
            </div>
            <p className="text-lg text-gray-600 mb-12">Based on <span className="font-bold text-[#b87c7c]">259+ Google Reviews</span></p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">{renderStars(review.rating)}</div>
                  <p className="text-lg italic text-gray-700 mb-4">"{review.text}"</p>
                  <p className="font-semibold text-[#6a4c4c]">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 bg-[#fdfaf6]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Our Signature Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Discover a range of personalized hair services designed to enhance your natural beauty and express your unique style.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300 border-t-4 border-[#b87c7c]">
                  <service.icon className="w-16 h-16 text-[#b87c7c] mb-6" />
                  <h3 className="text-xl font-bold text-[#6a4c4c] mb-3">{service.name}</h3>
                  <p className="text-gray-700 mb-5">{service.description}</p>
                  <a href={`#${service.name.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center font-medium text-[#b87c7c] hover:text-[#a86b6b] transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stylist Spotlight */}
        <section id="stylists" className="py-16 bg-[#f8f0ed]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Meet Our Expert Stylists</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Passionate, experienced, and dedicated to bringing your hair vision to life.
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {stylists.map((stylist, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                  <img src={stylist.image} alt={stylist.name} className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-[#b87c7c]" />
                  <h3 className="text-2xl font-bold text-[#6a4c4c] mb-2">{stylist.name}</h3>
                  <p className="text-lg text-gray-700 mb-3">{stylist.specialty}</p>
                  <p className="text-md text-gray-600 mb-4">{stylist.experience} Experience</p>
                  <p className="text-gray-700 italic mb-6">{stylist.bio}</p>
                  <a href={`#portfolio-${stylist.name.toLowerCase()}`} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-md">
                    View {stylist.name}'s Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 bg-[#fdfaf6]">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1555567527-36e386ce071c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Salon Interior" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Our Story & Philosophy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded by Nancy and Hayder, our salon is a cornerstone of the Windsor community, built on a passion for hair artistry and exceptional client care. With over 15 years of combined experience, we believe in creating personalized styles that reflect your individuality.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We use only the highest quality products and stay ahead of the latest trends and techniques to ensure you receive a premium experience every time. Our mission is to make every client feel confident, beautiful, and pampered.
              </p>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-lg">
                Experience the Difference
              </a>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="location" className="py-16 bg-[#f8f0ed]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Visit Our Salon</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Find us conveniently located in the heart of Windsor, ready to welcome you.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl text-left border-t-4 border-[#b87c7c]">
                <h3 className="text-2xl font-bold text-[#6a4c4c] mb-4">Opening Hours</h3>
                <ul className="text-lg text-gray-700 space-y-3 mb-6">
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Monday: 9:00 AM - 6:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Tuesday: 9:00 AM - 6:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Wednesday: 9:00 AM - 6:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Thursday: 9:00 AM - 8:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Friday: 9:00 AM - 8:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Saturday: 9:00 AM - 5:00 PM</li>
                  <li className="flex items-center"><Clock className="mr-3 w-6 h-6 text-[#b87c7c]" /> Sunday: Closed</li>
                </ul>
                <div className="border-t pt-6 mt-6 border-gray-200">
                  <p className="text-lg text-gray-700 mb-3"><MapPin className="inline-block mr-3 w-6 h-6 text-[#b87c7c]" /> 2274 Wyandotte St W, Windsor, ON N9B 1K4</p>
                  <p className="text-lg text-gray-700 mb-3"><Phone className="inline-block mr-3 w-6 h-6 text-[#b87c7c]" /> +1 519-254-8053</p>
                  <p className="text-lg text-gray-700 mb-6"><Check className="inline-block mr-3 w-6 h-6 text-[#b87c7c]" /> Free Street Parking Available</p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=2274+Wyandotte+St+W,+Windsor,+ON+N9B+1K4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-md">
                    <MapPin className="mr-2 h-5 w-5" /> Get Directions
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-80 lg:h-[500px] bg-gray-200 rounded-lg shadow-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.485125301389!2d-83.0560946237777!3d42.30238167119045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2dfcd152d19f%3A0x6a6d63d6b6a6d63d!2s2274%20Wyandotte%20St%20W%2C%20Windsor%2C%20ON%20N9B%201K4%2C%20Canada!5e0!3m2!1sen!2sus!4v1701726000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salon Location on Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-[#fdfaf6]">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Have a question? We've got answers. If you don't find what you're looking for, feel free to contact us!
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md border-t-2 border-[#b87c7c] cursor-pointer" onClick={() => handleFAQToggle(index)}>
                  <div className="flex justify-between items-center p-6">
                    <h3 className="text-xl font-semibold text-[#6a4c4c]">{faq.question}</h3>
                    <span>{openFAQ === index ? <X className="w-6 h-6 text-[#b87c7c]" /> : <ArrowRight className="w-6 h-6 text-[#b87c7c]" />}</span>
                  </div>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 pt-2 text-gray-700 text-lg border-t border-gray-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-[#f8f0ed]">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6a4c4c] mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Ready for a transformation? Have a question? Reach out to us directly and we'll be happy to assist you.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-[#b87c7c]">
              {contactFormSubmitted ? (
                <div className="text-center py-10">
                  <Check className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-3xl font-bold text-[#6a4c4c] mb-4">Thank You!</h3>
                  <p className="text-lg text-gray-700">Your message has been successfully sent. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#b87c7c] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#b87c7c] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Your Phone (Optional)"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#b87c7c] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#b87c7c] focus:border-transparent transition-all duration-200"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-[#b87c7c] hover:bg-[#a86b6b] transition-colors shadow-lg"
                  >
                    Send Message <Mail className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#6a4c4c] py-12 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HAIR BY NANCY & HAYDER</h3>
            <p className="text-gray-300 mb-2">2274 Wyandotte St W</p>
            <p className="text-gray-300 mb-2">Windsor, ON N9B 1K4, Canada</p>
            <p className="text-gray-300 mb-2">Phone: <a href="tel:+15192548053" className="hover:text-[#b87c7c]">+1 519-254-8053</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-[#b87c7c] transition-colors">Services</a></li>
              <li><a href="#stylists" className="text-gray-300 hover:text-[#b87c7c] transition-colors">Stylists</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#b87c7c] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#b87c7c] transition-colors">Contact</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-[#b87c7c] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media & Copyright */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-[#b87c7c] transition-colors"><Instagram size={28} /></a>
              <a href="#" className="text-gray-300 hover:text-[#b87c7c] transition-colors"><Facebook size={28} /></a>
            </div>
            <p className="text-gray-400 text-sm mt-8">&copy; {new Date().getFullYear()} HAIR BY NANCY & HAYDER. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;