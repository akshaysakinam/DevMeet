import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white shadow-lg rounded-lg mt-10 text-center">
      <h1 className="text-4xl font-bold text-purple-400 mb-6">Contact Us</h1>
      <p className="text-gray-300 text-lg mb-4">
        <strong>Email:</strong>{" "}
        <a href="mailto:supportdevmeet@gmail.com" className="text-purple-400 underline">
          supportdevmeet@gmail.com
        </a>
      </p>
      <p className="text-gray-300 text-lg mb-4">
        <strong>Phone:</strong> +91-9398917173
      </p>
      <p className="text-gray-300 text-lg">
        <strong>Address:</strong> Kompally, Hyderabad, India
      </p>
    </div>
  );
};

export default Contact;
