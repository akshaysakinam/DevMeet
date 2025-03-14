import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg mt-10 text-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">Privacy Policy</h1>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        Welcome to <strong>DevMeet</strong>. Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal data.
      </p>

      {/* Section 1: Introduction */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">1. Introduction</h2>
        <p className="text-gray-300 mt-2">
          DevMeet ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we 
          collect, use, and disclose information about you when you use our website and services.
        </p>
      </div>

      {/* Section 2: Information We Collect */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Personal Information:</strong> Name, email address, contact details, payment information (if applicable).</li>
          <li><strong>Usage Data:</strong> IP address, device type, browsing behavior.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies for analytics and improving user experience.</li>
        </ul>
      </div>

      {/* Section 3: How We Use Your Information */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>To provide and enhance our services.</li>
          <li>To personalize user experience.</li>
          <li>To process payments and transactions.</li>
          <li>To send updates, promotions, and security alerts.</li>
          <li>To comply with legal requirements.</li>
        </ul>
      </div>

      {/* Section 4: Sharing of Information */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">4. Sharing of Information</h2>
        <p className="text-gray-300 mt-2">
          We do not sell your data. However, we may share your information with:
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li><strong>Service Providers:</strong> Third-party vendors helping us operate the platform.</li>
          <li><strong>Legal Authorities:</strong> If required by law.</li>
          <li><strong>Business Transfers:</strong> In case of mergers or acquisitions.</li>
        </ul>
      </div>

      {/* Section 5: Data Security */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">5. Data Security</h2>
        <p className="text-gray-300 mt-2">
          We implement security measures to protect your personal data. However, no online service is completely secure.
        </p>
      </div>

      {/* Section 6: Your Rights */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">6. Your Rights</h2>
        <p className="text-gray-300 mt-2">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
          <li>Access and update your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request data deletion.</li>
        </ul>
      </div>

      {/* Section 7: Third-Party Links */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">7. Third-Party Links</h2>
        <p className="text-gray-300 mt-2">
          Our platform may contain links to third-party websites. We are not responsible for their privacy policies.
        </p>
      </div>

      {/* Section 8: Updates to This Policy */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">8. Updates to This Policy</h2>
        <p className="text-gray-300 mt-2">
          We may update this policy from time to time. Changes will be posted on this page.
        </p>
      </div>

      {/* Section 9: Contact Us */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">9. Contact Us</h2>
        <p className="text-gray-300 mt-2">
          For any questions regarding this Privacy Policy, contact us at{" "}
          <a href="mailto:supportdevmeet@gmail.com" className="text-purple-400 underline">supportdevmeet@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
