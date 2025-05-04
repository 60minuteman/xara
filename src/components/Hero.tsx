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
      <div className="relative z-[3] flex h-screen items-center justify-end flex-col pb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center -mb-[190px]"> {/* Adjusted to exactly 50px space */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-black"
            >
              <span className="md:hidden block">
                Instant Banking.<br />
                No Apps.<br />
                <span className="text-[#2BD3A6]">Just WhatsApp.</span>
              </span>
              <span className="hidden md:block">
                Instant Banking. No Apps. <span className="text-[#2BD3A6]">Just WhatsApp.</span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl md:text-xl text-black mb-8"
            >
              Your finances. One chat away, Manage <br />
              transactions and more with Xara AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-16"
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

            <Phone isLoaded={isLoaded} videoSrc="/videos/xara.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;