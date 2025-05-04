'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';

export default function PinAuth() {
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    setPin(prev => {
      const newPin = [...prev];
      newPin[index] = value;
      return newPin;
    });

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullPin = pin.join('');
    
    if (fullPin.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    // TODO: Add API call to verify PIN
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle successful verification
    } catch (err) {
      setError('Invalid PIN. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-black" style={{backgroundImage: 'url(/1x.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* PIN Entry Section */}
        <div className="flex-1 pt-24 px-8">
          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-3xl font-bold mb-4 text-left">Authorize Transaction</h1>
              <div className="bg-black/5 p-6 rounded-xl mb-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">You are sending</p>
                    <div className="bg-blue-500/20 px-4 py-2 rounded-full">
                      <p className="font-medium text-blue-600">₦60,000</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 mb-2 text-left">To</p>
                    <div className="bg-purple-500/20 px-4 py-2 rounded-full">
                      <p className="font-medium text-purple-600">Adewala Bunmi</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-left">
                Please enter your 6-digit PIN to authorize this transaction
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl"
            >
              <div className="flex justify-center gap-3 mb-8">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="password"
                    value={digit}
                    onChange={(e) => handlePinChange(index, e.target.value)}
                    className="w-12 h-12 text-center bg-white border border-gray-200 rounded-lg text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={1}
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mb-4">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify PIN
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </main>
  );
}