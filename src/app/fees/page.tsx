'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  registrationNumber: string;
}

export default function FeesPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
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
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Fee statement header */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h2 className="text-2xl font-bold text-gray-900">School Fees for 2025/2026 Session</h2>
          </div>

          {/* Student information */}
          <div className="px-6 py-4 border-b bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Full Name:</p>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Registration Number:</p>
                <p className="text-lg font-semibold text-gray-900">{user.registrationNumber}</p>
              </div>
            </div>
          </div>

          {/* Fee breakdown table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    School Fees
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    School Fees
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                    ₦ 184,510
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Total
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-bold">
                    ₦ 184,510
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Payment summary card */}
          <div className="px-6 py-6 bg-blue-50 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Payment Summary</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Total school fees amount
                </p>
                <p className="text-2xl font-bold text-blue-900 mt-2">₦ 184,510</p>
              </div>
              <div className="flex space-x-3">
                {/* <button
                  onClick={handleProceed}
                  className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-colors cursor-pointer"
                  style={{ backgroundColor: '#00044b' }}
                >
                  PROCEED
                </button> */}
              </div>
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