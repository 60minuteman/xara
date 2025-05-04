'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';

export default function OtherSecurityConcern() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add API call to submit security concern
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-black pt-16 flex items-center" style={{backgroundImage: 'url(/1x.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Report Security Concern</h1>
            <p className="text-gray-600 text-sm">
              Please describe any security concerns you have about your Xara account.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/90 p-6 rounded-xl shadow-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 bg-gray-50 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1234567890"
                  className="w-full px-3 py-2 bg-gray-50 rounded-full text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium mb-1 text-left">
                  Description of Concern
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please provide details about your security concern..."
                  className="w-full px-3 py-2 bg-gray-50 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 min-h-[120px]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-2 rounded-full font-semibold text-sm
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} 
                  transition-colors`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-green-500 text-4xl mb-3">✓</div>
              <h2 className="text-xl font-bold mb-3">Report Submitted</h2>
              <p className="text-gray-600 text-sm mb-4">
                Thank you for reporting your security concern. Our team will review it and contact you if needed.
              </p>
              <a 
                href="/"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
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