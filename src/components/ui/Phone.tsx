import { motion } from 'framer-motion';

interface PhoneProps {
  videoSrc?: string;
  isLoaded: boolean;
}

const Phone = ({ videoSrc, isLoaded }: PhoneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="flex justify-center relative sm:mt-[40px] mt-[60px]" // Reduced top margin on mobile from 100px to 60px
    >
      <div className="relative w-[250px] sm:w-[300px] h-[500px] sm:h-[600px] -mt-[50px] sm:mt-0">
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-black rounded-[50px] shadow-2xl z-10">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px] z-30" />
          
          {/* Power Button */}
          <div className="absolute right-[-2px] top-[100px] w-[3px] h-[50px] bg-gray-700 rounded-l" />
          
          {/* Volume Buttons */}
          <div className="absolute left-[-2px] top-[80px] w-[3px] h-[30px] bg-gray-700 rounded-r" />
          <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-gray-700 rounded-r" />
          
          {/* Inner Screen Border */}
          <div className="absolute top-[12px] left-[12px] right-[12px] bottom-[12px] rounded-[35px] border-[3px] border-gray-700" />
        </div>

        {videoSrc && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-[3%] left-[6%] w-[88%] h-[94%] object-cover rounded-[30px] z-20"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
    </motion.div>
  );
};

export default Phone;