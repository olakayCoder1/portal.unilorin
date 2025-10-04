'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  registrationNumber: string;
}

export default function FeesPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('userData');
    
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to login if no user data
      router.push('/');
      return;
    }
  }, [router]);

  // Format fee amount for display
  const formatFeeAmount = (amount: number) => {
    return amount.toLocaleString('en-NG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('feeAmount');
    router.push('/');
  };

  const handleProceed = () => {
    alert('You will be redirected to the school portal for payment.');
  };

  // const handleProceed = () => {
  //   alert('You will now be redirected to the school portal to complete your payment.');
  //   window.location.href = 'https://portal.unilorin.edu.ng/student/fees'
  // };

  // const handleCancel = () => {
  //   router.push('/');
  // };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white shadow-sm border-b" style={{ backgroundColor: '#00044b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-white">University of Ilorin Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-200">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Session Header */}
          <div className="bg-white px-6 py-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 text-center">2025/2026 Session</h1>
          </div>

          {/* Student Information */}
          <div className="px-6 py-6 space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Full Name:</p>
              <p className="text-base font-semibold text-gray-900">{user.name.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Registration Number:</p>
              <p className="text-base font-semibold text-gray-900">{user.matricNumber}</p>
            </div>
          </div>

          {/* Fee Table */}
          <div className="px-6 pb-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-3 py-3 text-left font-medium text-gray-700">Item</th>
                    <th className="px-3 py-3 text-left font-medium text-gray-700">Description</th>
                    <th className="px-3 py-3 text-right font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-3 py-4 text-gray-900">School Fees</td>
                    <td className="px-3 py-4 text-gray-900">School Fees</td>
                    <td className="px-3 py-4 text-gray-900 text-right font-medium">
                      ₦ {formatFeeAmount(user.feeAmount)}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-3 py-4 font-bold text-gray-900">Total</td>
                    <td className="px-3 py-4 font-bold text-gray-900">Total</td>
                    <td className="px-3 py-4 font-bold text-gray-900 text-right">
                      ₦ {formatFeeAmount(user.feeAmount)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-8 pt-4">
            <div className="flex justify-between space-x-4">
              <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center">
                CANCEL
              </button>
              <button 
                onClick={handleProceed}
                className="flex-1 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-colors text-center"
                style={{ backgroundColor: '#00044b' }}
              >
                PROCEED
              </button>
            </div>
          </div>

          {/* Additional information */}
          {/* <div className="px-6 py-4 bg-yellow-50 border-t">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Please proceed to the school portal to perform the payment. 
                  Please ensure you have sufficient funds before proceeding with the payment. 
                  All payments are final and non-refundable.
                </p>
              </div>
            </div>
          </div> */}
        </div>

      </main>
    </div>
  );
}