'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [staffStudentId, setStaffStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in a real app, you'd validate against a backend
    if (staffStudentId && password) {
      // Store user data in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({
        id: staffStudentId,
        name: 'Kazeem Aminat Ashabi',
        registrationNumber: '22/25OA073'
      }));
      router.push('/fees');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - University logo image */}
      <div className="hidden lg:flex lg:w-1/3 relative">
        <div 
          className="w-full bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/Unilorin_logo.jpg')`,
            backgroundColor: '#00044b'
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 4, 75, 0.3)' }}></div>
          
          {/* University text overlay */}
          <div className="absolute top-8 left-8 text-white z-10">
    
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-2/3 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <Image
              src="/unilorin_logo-1.jpg"
              alt="University of Ilorin Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">UNIVERSITY OF ILORIN</h1>
          </div>

          {/* Desktop logo */}
          <div className="hidden lg:block text-center mb-8">
            <Image
              src="/unilorin_logo-1.jpeg"
              alt="University of Ilorin Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800">UNIVERSITY OF ILORIN</h1>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Staff/Student ID"
                value={staffStudentId}
                onChange={(e) => setStaffStudentId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all"
                style={{ '--tw-ring-color': '#00044b' } as React.CSSProperties}
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all pr-12"
                style={{ '--tw-ring-color': '#00044b' } as React.CSSProperties}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="text-right">
              <a href="https://portal.unilorin.edu.ng/password/reset" target="_blank" className="text-sm hover:opacity-80" style={{ color: '#00044b' }}>
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: '#00044b' }}
            >
              LOGIN
            </button>
          </form>

 
        </div>
      </div>
    </div>
  );
}
