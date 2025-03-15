import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg mt-10 text-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">Shipping and Delivery Policy</h1>
      
      {/* Section 1: Last Updated */}
      <p className="text-gray-300 mb-4">Last Updated: [Insert Date]</p>
      
      {/* Section 2: Introduction */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">1. Shipping and Delivery Scope</h2>
        <p className="text-gray-300 mt-2">
          DevMeet primarily provides digital services; however, if any physical products (such as merchandise, event materials, or promotional items) are offered, this policy will govern their shipping and delivery.
        </p>
      </div>

      {/* Section 3: Digital Products and Services */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">2. Digital Products and Services</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Access to digital content or services is provided instantly or within the specified timeframe after successful payment confirmation.</li>
          <li>Any delays due to technical issues will be communicated via email or our support channel.</li>
        </ul>
      </div>

      {/* Section 4: Shipping for Physical Products */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">3. Shipping for Physical Products</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li><strong>Processing Time:</strong> Orders are typically processed within [X] business days.</li>
          <li><strong>Shipping Methods:</strong> We use [Courier/Postal Service] for deliveries.</li>
          <li><strong>Estimated Delivery Time:</strong> Depending on the destination, delivery times range between [X-Y] business days.</li>
          <li><strong>Shipping Costs:</strong> Costs vary based on location and order size. Shipping fees will be displayed at checkout.</li>
          <li><strong>International Shipping:</strong> Currently, we [do/do not] ship internationally.</li>
        </ul>
      </div>

      {/* Section 5: Tracking Information */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">4. Tracking Information</h2>
        <p className="text-gray-300 mt-2">
          If tracking is available, you will receive an email with the tracking details once your order has been shipped.
        </p>
      </div>

      {/* Section 6: Delivery Issues */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">5. Delivery Issues</h2>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>If an order is delayed, lost, or damaged in transit, please contact our support team at [support email].</li>
          <li>For incorrect addresses provided at checkout, additional shipping fees may apply.</li>
        </ul>
      </div>

      {/* Section 7: Returns and Refunds */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">6. Returns and Refunds</h2>
        <p className="text-gray-300 mt-2">
          Please refer to our <a href="/refund-policy" className="text-purple-400 underline">Return and Refund Policy</a> for details on returning products and refund eligibility.
        </p>
      </div>

      {/* Section 8: Contact Us */}
      <div className="mb-6 text-left">
        <h2 className="text-2xl font-semibold text-purple-400">7. Contact Us</h2>
        <p className="text-gray-300 mt-2">
          For any questions regarding our Shipping and Delivery Policy, reach out to us at:
        </p>
        <p className="text-gray-300 mt-2"><strong>Email:</strong> <a href="mailto:supportdevmeet@gmail.com" className="text-purple-400 underline">support@devmeet.me</a></p>
        <p className="text-gray-300 mt-2"><strong>Website:</strong> <a href="https://www.devmeet.me" className="text-purple-400 underline">www.devmeet.me</a></p>
      </div>
    </div>
  );
};

export default ShippingAndDelivery;
