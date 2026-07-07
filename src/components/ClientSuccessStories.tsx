"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";

import { FaAirbnb, FaMicrosoft, FaSpotify, FaShopify, FaQuoteLeft } from "react-icons/fa";

const stories = [
  {
    logo: FaMicrosoft,
    logoText: "Microsoft",
    logoColor: "#00A4EF",
    content: "The Livik team transformed our idea into a production-ready platform. Their expertise in Next.js and backend architecture helped us launch faster than expected.",
    author: "Arun Prakash",
    role: "CEO, Microsoft Tech Initiative",
    link: "#"
  },
  {
    logo: FaAirbnb,
    logoText: "Airbnb",
    logoColor: "#FF5A5F",
    content: "Communication was excellent throughout the project. We appreciated their proactive approach and commitment to quality.",
    author: "Priya Sharma",
    role: "Operations Manager, Airbnb Hosting",
    link: "#"
  },
  {
    logo: FaSpotify,
    logoText: "Spotify",
    logoColor: "#1ED760",
    content: "Their developers integrated seamlessly with our internal team and delivered high-quality code consistently.",
    author: "Michael Thomas",
    role: "CTO, Spotify Podcasts",
    link: "#"
  },
  {
    logo: FaShopify,
    logoText: "Shopify",
    logoColor: "#95BF47",
    content: "They optimized our Next.js + Node.js architecture perfectly. We saw a 40% faster checkout and 25% increase in conversions.",
    author: "David Chen",
    role: "VP of Engineering, Shopify Core",
    link: "#"
  }
];

export default function ClientSuccessStories() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 80 },
    [Autoplay({ delay: 7000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoplayWithDelay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      autoplay.play();
    }, 5000);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      resetAutoplayWithDelay();
    }
  }, [emblaApi, resetAutoplayWithDelay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      resetAutoplayWithDelay();
    }
  }, [emblaApi, resetAutoplayWithDelay]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      resetAutoplayWithDelay();
    }
  }, [emblaApi, resetAutoplayWithDelay]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-[#FAFAFA] text-gray-900 overflow-hidden relative">
      {/* Decorative Large Background Quote */}
      <FaQuoteLeft className="absolute top-0 left-4 md:left-16 w-32 h-32 md:w-48 md:h-48 text-gray-400 z-0 pointer-events-none -translate-y-[23.5%]" />

      {/* Separator Line */}
      <div className="w-[85%] md:w-[75%] lg:w-[75%] max-w-3xl mx-auto border-t-2 border-[#111111]/20 opacity-90 rounded-full relative z-10"></div>

      <div className="py-16 md:py-16 w-full relative px-4 md:px-12 z-10">

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-2 p-2 text-gray-600 hover:text-[#004475] transition-colors z-10 hidden md:block cursor-pointer hover:scale-120 "
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 font-light stroke-[1]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-2 p-2 text-gray-600 hover:text-[#004475] transition-colors z-10 hidden md:block cursor-pointer hover:scale-120"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 font-light stroke-[1]" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
            <span className="text-black">Clients Success</span>
            <span className="text-[#33a8d9]"> Stories</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden py-16 md:py-24" ref={emblaRef}>
          <div className="flex">
            {/* Duplicating array to guarantee enough items for a seamless infinite loop even if there are only 2 cards */}
            {[...stories, ...stories, ...stories].map((story, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4 md:px-8 transition-transform duration-700 ease-in-out ${isEven ? 'md:-translate-y-12' : 'md:translate-y-12'}`}
                >
                  <div className="flex flex-col xl:flex-row items-center xl:items-stretch h-full w-full group">

                    {/* Left: Visual Block */}
                    <div className="relative z-10 w-full xl:w-[28%] shrink-0">
                      <div className="aspect-[4/3] w-full rounded-2xl shadow-xl flex items-center justify-center bg-white border border-gray-200 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-500">
                        {/* Colored background wash */}
                        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundColor: story.logoColor }}></div>
                        <story.logo className="w-18 h-18 relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: story.logoColor }} />
                      </div>

                      {/* Overlapping Quote Icon */}
                      <div className="absolute -top-5 right-4 xl:top-8 xl:-right-6 w-14 h-14 bg-[#33a8d9] rounded-full flex items-center justify-center shadow-lg z-20">
                        <Quote className="w-6 h-6 text-white fill-white rotate-180" />
                      </div>
                    </div>

                    {/* Right: Text Block */}
                    <div className="w-full xl:w-[70%] bg-[#F8F9FA] rounded-2xl p-8 xl:pl-14 xl:-ml-8 mt-[-3rem] xl:mt-8 xl:mb-8 relative z-0 flex flex-col justify-center border border-gray-400 shadow-sm">

                      {/* Optional dots decoration pattern */}
                      <div className="absolute top-4 left-4 opacity-20 pointer-events-none">
                        <div className="w-16 h-16" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-3 relative z-10">
                        Feedback from <span style={{ color: story.logoColor }}>{story.logoText}</span>
                      </h3>

                      <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6 relative z-10">
                        "{story.content}"
                      </p>

                      <div className="flex items-center gap-2 relative z-10">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-[#111111]">5.0 Rating</span>
                      </div>

                      <div className="mt-auto relative z-10 border-t border-gray-200/60 pt-4">
                        <h4 className="font-bold text-[#111111] text-sm">{story.author}</h4>
                        <p className="text-xs text-gray-500 mt-1">{story.role}</p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        {/* <div className="flex justify-center items-center gap-2 mt-16">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-[#111111] w-3 h-3" : "bg-[#A3A3A3] hover:bg-[#666]"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
}
