'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Phone from '@/components/ui/Phone';
import RetroGrid from '@/components/ui/RetroGrid';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="fixed h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/1x.png"
        alt="Background"
        fill
        className="object-cover z-[1]"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-[1]" />

      {/* Retro Grid */}
      <RetroGrid isLoaded={isLoaded} />

      {/* Main Content */}
      <div className="relative z-[3] flex h-screen items-center justify-end flex-col">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-0 sm:mb-6 mt-[10vh] sm:mt-[15vh] lg:mt-[20vh]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3 text-black"
              >
                <span className="md:hidden block">
                  Instant Banking.<br />
                  No Apps.<br />
                  <div className="mt-2">
                    <span className="text-black bg-[#2BD3A6] px-4 py-1.5 rounded-3xl inline-block">Just Whatsapp.</span>
                  </div>
                </span>
                <span className="hidden md:block">
                  Instant Banking. No Apps. <div className="mt-6 inline-block">
                    <span className="text-black bg-[#2BD3A6] px-4 py-2 rounded-3xl">Just Whatsapp.</span>
                  </div>
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-base sm:text-xl text-black mb-6 px-4 sm:px-0"
              >
                Your finances. One chat away, Manage <br className="hidden sm:block" />
                transactions and more with Xara AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-2 sm:mt-0"
              >
                <Button
                  href="https://wa.me/your-whatsapp-number"
                  variant="primary"
                  size="md"
                  icon={{
                    src: "/icons/whatsapp.svg",
                    alt: "WhatsApp"
                  }}
                >
                  Get Xara AI
                </Button>
              </motion.div>
            </div>

            <div className="relative h-[45vh] sm:h-auto overflow-hidden sm:overflow-visible -mb-[10vh] sm:-mb-[20vh] lg:-mb-[25vh]">
              <Phone isLoaded={isLoaded} videoSrc="/videos/xara.mp4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;