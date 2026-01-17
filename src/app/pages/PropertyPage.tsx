import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowLeft, Bed, Bath, Users, Maximize, MapPin, Check, ChevronLeft, ChevronRight, Wifi, Tv, Coffee, Wine, Flame, Trees, Car, Phone, WashingMachine, Thermometer, Shield, Dumbbell, Waves, UtensilsCrossed, Anchor, Sparkles, X } from 'lucide-react';
import { useRouter } from '@/app/context/RouterContext';
import { getPropertyById } from '@/app/data/properties';
import { AvailabilityCalendar } from '@/app/components/AvailabilityCalendar';
import { SectionDivider } from '@/app/components/Decorations';
import { LazyImage } from '@/app/components/ImageSkeleton';

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  tv: Tv,
  coffee: Coffee,
  wine: Wine,
  fireplace: Flame,
  garden: Trees,
  parking: Car,
  concierge: Phone,
  washer: WashingMachine,
  climate: Thermometer,
  security: Shield,
  gym: Dumbbell,
  pool: Waves,
  chef: UtensilsCrossed,
  bbq: UtensilsCrossed,
  terrace: Trees,
  elevator: Sparkles,
  spa: Sparkles,
  vineyard: Wine,
  boules: Sparkles,
  beach: Waves,
  boat: Anchor,
};

interface ImageGalleryProps {
  images: string[];
  propertyName: string;
}

function ImageGallery({ images, propertyName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="space-y-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <LazyImage
                src={images[currentIndex]}
                alt={`${propertyName} - Image ${currentIndex + 1}`}
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0D0D0D]/70 border border-[#2D2D2D] flex items-center justify-center text-[#F5F5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-[#C9A86C] hover:text-[#C9A86C]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#0D0D0D]/70 border border-[#2D2D2D] flex items-center justify-center text-[#F5F5F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:border-[#C9A86C] hover:text-[#C9A86C]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#C9A86C] w-6'
                    : 'bg-[#F5F5F0]/50 hover:bg-[#F5F5F0]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-[#C9A86C]'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#F5F5F0] hover:border-[#C9A86C] hover:text-[#C9A86C] transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 w-12 h-12 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#F5F5F0] hover:border-[#C9A86C] hover:text-[#C9A86C] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={images[currentIndex]}
              alt={`${propertyName} - Image ${currentIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 w-12 h-12 rounded-full border border-[#2D2D2D] flex items-center justify-center text-[#F5F5F0] hover:border-[#C9A86C] hover:text-[#C9A86C] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#C9A86C] w-6'
                      : 'bg-[#F5F5F0]/50 hover:bg-[#F5F5F0]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PropertyPage() {
  const { propertyId, goBack } = useRouter();
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const amenitiesRef = useRef(null);
  const highlightsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const descriptionInView = useInView(descriptionRef, { once: true, margin: '-100px' });
  const amenitiesInView = useInView(amenitiesRef, { once: true, margin: '-100px' });
  const highlightsInView = useInView(highlightsRef, { once: true, margin: '-100px' });

  const property = propertyId ? getPropertyById(propertyId) : null;

  if (!property) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <p
            className="text-2xl text-[#F5F5F0] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Property not found
          </p>
          <button
            onClick={goBack}
            className="text-[#C9A86C] hover:text-[#D4B87A] transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Return to browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={goBack}
        className="fixed top-6 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#2D2D2D] rounded-full text-[#8A8A8A] hover:text-[#C9A86C] hover:border-[#C9A86C] transition-all duration-300"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm uppercase tracking-[0.1em]">Back</span>
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:gap-16">
          <div className="space-y-16">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <ImageGallery images={property.images} propertyName={property.name} />

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-[#8A8A8A]">
                  <MapPin className="w-4 h-4 text-[#C9A86C]" />
                  <span
                    className="text-sm uppercase tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {property.location}
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl text-[#F5F5F0]"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  {property.name}
                </h1>

                <p
                  className="text-lg text-[#8A8A8A] italic"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {property.tagline}
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-[#C9A86C]" />
                    <span
                      className="text-[#F5F5F0]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {property.beds} Beds
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-[#C9A86C]" />
                    <span
                      className="text-[#F5F5F0]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {property.baths} Baths
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#C9A86C]" />
                    <span
                      className="text-[#F5F5F0]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {property.guests} Guests
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-5 h-5 text-[#C9A86C]" />
                    <span
                      className="text-[#F5F5F0]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {property.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <SectionDivider withOrnament className="my-12" />

            <motion.div
              ref={descriptionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={descriptionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2
                className="text-2xl text-[#F5F5F0]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                About This Property
              </h2>

              <div className="space-y-4">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#8A8A8A] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <SectionDivider className="my-12" />

            <motion.div
              ref={highlightsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2
                className="text-2xl text-[#F5F5F0]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                Highlights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={highlightsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg border border-[#2D2D2D]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C9A86C]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#C9A86C]" />
                    </div>
                    <span
                      className="text-[#F5F5F0]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <SectionDivider className="my-12" />

            <motion.div
              ref={amenitiesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={amenitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2
                className="text-2xl text-[#F5F5F0]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity.icon] || Sparkles;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={amenitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-[#1A1A1A] rounded-lg border border-[#2D2D2D] hover:border-[#3D3D3D] transition-colors"
                    >
                      <IconComponent className="w-5 h-5 text-[#C9A86C]" />
                      <span
                        className="text-sm text-[#8A8A8A]"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {amenity.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="lg:hidden pt-8">
              <BookingWidget
                pricePerNight={property.pricePerNight}
                currency={property.currency}
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <BookingWidget
                pricePerNight={property.pricePerNight}
                currency={property.currency}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BookingWidgetProps {
  pricePerNight: number;
  currency: string;
}

function BookingWidget({ pricePerNight, currency }: BookingWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2D2D2D]">
        <div className="flex items-baseline gap-2 mb-6">
          <span
            className="text-3xl text-[#C9A86C]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {currency}{pricePerNight.toLocaleString()}
          </span>
          <span
            className="text-sm text-[#8A8A8A]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            per night
          </span>
        </div>

        <AvailabilityCalendar
          pricePerNight={pricePerNight}
          currency={currency}
          className="border-0 p-0 bg-transparent"
        />
      </div>

      <div className="bg-[#1A1A1A]/50 rounded-lg p-4 border border-[#2D2D2D]">
        <p
          className="text-xs text-[#4A4A4A] text-center"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Price includes all taxes and fees. Cancellation policy applies.
        </p>
      </div>
    </motion.div>
  );
}
