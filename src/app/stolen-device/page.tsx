'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';

export default function StolenDevice() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add API call to deactivate account
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black pt-20 md:pt-24 flex items-center" style={{backgroundImage: 'url(/1x.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Report Stolen Device</h1>
            <p className="text-gray-600 text-xs sm:text-sm px-2">
              Enter your phone number below to deactivate Xara on your WhatsApp account.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/90 p-4 sm:p-6 rounded-xl shadow-lg mx-4 sm:mx-0"
            >
              <div className="mb-4">
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1234567890"
                  className="w-full px-3 py-2 bg-gray-50 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 text-white py-2 rounded-full font-semibold text-xs sm:text-sm
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'} 
                  transition-colors`}
              >
                {isSubmitting ? 'Deactivating...' : 'Deactivate Xara'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 p-4 sm:p-6 rounded-xl shadow-lg text-center mx-4 sm:mx-0"
            >
              <div className="text-green-500 text-3xl sm:text-4xl mb-3">✓</div>
              <h2 className="text-lg sm:text-xl font-bold mb-3">Account Deactivated</h2>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                Your Xara account has been deactivated. Please contact support if you need to reactivate your account.
              </p>
              <a 
                href="/"
                className="inline-block bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition-colors"
              >
                Return Home
              </a>
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
}