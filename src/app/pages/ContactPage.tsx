import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { SectionDivider } from '@/app/components/Decorations';
import { SplitText } from '@/app/components/AnimatedText';

const propertyOptions = [
  'London Properties',
  'South of France Properties',
  'General Inquiry',
  'Press & Media',
  'Partnership Opportunities',
];

const faqs = [
  {
    question: 'What is the booking process for a property?',
    answer:
      'Our dedicated concierge team will guide you through every step. Once you express interest, we arrange a private consultation to understand your preferences, followed by a curated selection of properties and seamless booking with personalized service throughout your stay.',
  },
  {
    question: 'Do you offer long-term rental arrangements?',
    answer:
      'Yes, we specialize in both short-term luxury stays and extended residencies. Many of our properties are available for monthly, seasonal, or annual arrangements with bespoke terms tailored to your requirements.',
  },
  {
    question: 'What concierge services are included?',
    answer:
      'Every reservation includes 24/7 concierge support, private transfers, restaurant reservations, event access, and personalized local recommendations. Additional services such as private chefs, yacht charters, and bespoke experiences are available upon request.',
  },
  {
    question: 'How do I schedule a property viewing?',
    answer:
      'Private viewings can be arranged at your convenience. Simply contact us via the form or phone, and our local team will coordinate an exclusive showing, either in person or through a detailed virtual tour.',
  },
];

export function ContactPage() {
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });

  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true, margin: '-100px' });

  const faqRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={() => navigate('home')}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[#F5F5F0]/70 hover:text-[#C9A86C] transition-colors duration-300 group"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm uppercase tracking-[0.15em]">Back</span>
      </motion.button>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-40 pb-24 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[#C9A86C]"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Contact
          </span>
        </motion.div>

        <h1
          className="text-[60px] md:text-[100px] lg:text-[140px] text-[#F5F5F0] leading-[0.9] tracking-[0.05em]"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
        >
          <SplitText text="GET IN TOUCH" type="chars" delay={0.5} staggerDelay={0.03} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 max-w-xl mx-auto text-lg text-[#8A8A8A] leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Experience personalized service from our dedicated team. We're here to curate your perfect
          luxury experience.
        </motion.p>
      </section>

      <SectionDivider withOrnament className="mb-20" />

      {/* Two Column Layout: Form & Contact Info */}
      <section ref={formRef} className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl text-[#F5F5F0] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-[#2D2D2D] text-[#F5F5F0] placeholder-[#6A6A6A] focus:border-[#C9A86C] focus:outline-none transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-[#2D2D2D] text-[#F5F5F0] placeholder-[#6A6A6A] focus:border-[#C9A86C] focus:outline-none transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-0 py-4 bg-transparent border-b border-[#2D2D2D] text-[#F5F5F0] placeholder-[#6A6A6A] focus:border-[#C9A86C] focus:outline-none transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div className="relative">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-[#2D2D2D] text-[#F5F5F0] focus:border-[#C9A86C] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <option value="" disabled className="bg-[#0D0D0D] text-[#6A6A6A]">
                    Property Interest
                  </option>
                  {propertyOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#0D0D0D] text-[#F5F5F0]">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6A6A6A] pointer-events-none" />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b border-[#2D2D2D] text-[#F5F5F0] placeholder-[#6A6A6A] focus:border-[#C9A86C] focus:outline-none transition-colors duration-300 resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 mt-4 bg-[#C9A86C] text-[#0D0D0D] text-sm uppercase tracking-[0.2em] hover:bg-[#A68B4D] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="text-3xl md:text-4xl text-[#F5F5F0] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#2D2D2D]">
                  <Mail className="w-5 h-5 text-[#C9A86C]" />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-[#6A6A6A] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:reservations@arivecollection.com"
                    className="text-[#F5F5F0] hover:text-[#C9A86C] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    reservations@arivecollection.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#2D2D2D]">
                  <Phone className="w-5 h-5 text-[#C9A86C]" />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-[#6A6A6A] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+442071234567"
                    className="text-[#F5F5F0] hover:text-[#C9A86C] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    +44 20 7123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[#2D2D2D]">
                  <Clock className="w-5 h-5 text-[#C9A86C]" />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-[#6A6A6A] mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Hours
                  </p>
                  <p className="text-[#F5F5F0]" style={{ fontFamily: 'var(--font-body)' }}>
                    24/7 Concierge Service
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2D2D2D]">
                <h3
                  className="text-xl text-[#F5F5F0] mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  Our Offices
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#2D2D2D]">
                      <MapPin className="w-5 h-5 text-[#C9A86C]" />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-[0.2em] text-[#6A6A6A] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        London
                      </p>
                      <p className="text-[#F5F5F0]" style={{ fontFamily: 'var(--font-body)' }}>
                        12 Berkeley Square, Mayfair
                        <br />
                        London W1J 6BS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#2D2D2D]">
                      <MapPin className="w-5 h-5 text-[#C9A86C]" />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-[0.2em] text-[#6A6A6A] mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        France
                      </p>
                      <p className="text-[#F5F5F0]" style={{ fontFamily: 'var(--font-body)' }}>
                        24 Boulevard de la Croisette
                        <br />
                        Cannes 06400
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section ref={mapRef} className="py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative h-[400px] bg-[#1A1A1A] border border-[#2D2D2D] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-[#C9A86C] mb-4" />
              <h3
                className="text-2xl md:text-3xl text-[#F5F5F0] mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
              >
                Our Locations
              </h3>
              <p
                className="text-[#6A6A6A] text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                London • Cannes
              </p>
            </div>
            <div className="absolute inset-0 border border-[#C9A86C]/10" />
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#C9A86C] rounded-full animate-pulse" />
            <div className="absolute bottom-8 right-12 w-2 h-2 bg-[#C9A86C] rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-24 px-6 md:px-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="text-xs uppercase tracking-[0.3em] text-[#C9A86C] block mb-4"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              FAQ
            </span>
            <h2
              className="text-4xl md:text-5xl text-[#F5F5F0]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[#2D2D2D]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span
                    className="text-lg text-[#F5F5F0]"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#C9A86C]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-5 text-[#8A8A8A] leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('home')}
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A86C] text-[#C9A86C] text-sm uppercase tracking-[0.2em] hover:bg-[#C9A86C] hover:text-[#0D0D0D] transition-all duration-300"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Home
        </motion.button>
      </section>
    </div>
  );
}
