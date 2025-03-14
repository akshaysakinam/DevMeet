import React from "react";

const FAQs = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-6">Frequently Asked Questions</h1>

      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-purple-300">How do I register?</h2>
        <p className="text-gray-300">Click on the Sign-Up button and follow the instructions.</p>
      </div>

      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-purple-300">What payment methods are accepted?</h2>
        <p className="text-gray-300">We accept credit cards, debit cards, and UPI payments through Razorpay.</p>
      </div>

      <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-purple-300">Can I cancel my subscription?</h2>
        <p className="text-gray-300">Yes, you can cancel anytime from your profile settings.</p>
      </div>
    </div>
  );
};

export default FAQs;
