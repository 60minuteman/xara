'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Report = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const reportOptions = [
    {
      id: 'stolen_device',
      label: 'Stolen Device',
      href: '/stolen-device'
    },
    {
      id: 'other',
      label: 'Other Security Concern', 
      href: '/other'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAFAFA] backdrop-blur-sm rounded-2xl p-8 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Report an Issue</h2>
              <p className="text-gray-600 text-sm">Select the type of issue you'd like to report.</p>
            </div>

            <div className="space-y-3">
              {reportOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.href}
                  className="block w-full"
                >
                  <button
                    className="w-full justify-start bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 px-4 py-3 rounded-xl text-gray-800 text-left"
                  >
                    {option.label}
                  </button>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Report;