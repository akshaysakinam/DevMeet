import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg mt-10 text-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">Terms of Service</h1>

      {/* Section 1: Introduction */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">1. Introduction</h2>
        <p className="text-gray-300 mt-2">
          These Terms of Service ("Terms") govern your use of <strong>DevMeet</strong>. By using our platform, you agree to these Terms.
        </p>
      </div>

      {/* Section 2: User Accounts */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">2. User Accounts</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>You must provide accurate information when creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>We reserve the right to terminate accounts that violate our policies.</li>
        </ul>
      </div>

      {/* Section 3: Acceptable Use */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">3. Acceptable Use</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Do not use the platform for illegal or unauthorized purposes.</li>
          <li>Do not post or distribute harmful, offensive, or misleading content.</li>
          <li>Do not attempt to hack, exploit, or disrupt our services.</li>
        </ul>
      </div>

      {/* Section 4: Payments and Refunds */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">4. Payments and Refunds</h2>
        <p className="text-gray-300 mt-2">Payments for premium services are processed securely through Razorpay.</p>
        <p className="text-gray-300">Refunds, if applicable, will be processed based on our Refund Policy.</p>
      </div>

      {/* Section 5: Intellectual Property */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">5. Intellectual Property</h2>
        <p className="text-gray-300 mt-2">
          All content, trademarks, and materials on DevMeet belong to us. You may not copy, modify, or distribute any content without permission.
        </p>
      </div>

      {/* Section 6: Limitation of Liability */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">6. Limitation of Liability</h2>
        <p className="text-gray-300 mt-2">
          We are not responsible for any damages resulting from your use of DevMeet. Our platform is provided "as is" without warranties.
        </p>
      </div>

      {/* Section 7: Termination */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">7. Termination</h2>
        <p className="text-gray-300 mt-2">We may suspend or terminate your account if you violate these Terms.</p>
      </div>

      {/* Section 8: Governing Law */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">8. Governing Law</h2>
        <p className="text-gray-300 mt-2">These Terms are governed by the laws of India.</p>
      </div>

      {/* Section 9: Changes to These Terms */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">9. Changes to These Terms</h2>
        <p className="text-gray-300 mt-2">
          We may update these Terms at any time. Continued use of DevMeet implies acceptance of the new Terms.
        </p>
      </div>

      {/* Section 10: Contact Us */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">10. Contact Us</h2>
        <p className="text-gray-300 mt-2">
          For any questions about these Terms, email us at{" "}
          <a href="mailto:legal@devmeet.com" className="text-purple-400 underline">
            legal@devmeet.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
