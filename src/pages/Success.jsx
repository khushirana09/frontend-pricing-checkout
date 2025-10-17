import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPlan, selectedDuration, finalPrice } = location.state || {};

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-semibold">
          No order information found. Please go back to pricing.
        </h1>
        <button
          onClick={() => navigate("/pricing")}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Pricing
        </button>
      </div>
    );
  }

  const mockOrderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-2xl p-6 text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-300 mb-6">
          Your plan has been successfully purchased.
        </p>

        <div className="bg-gray-700 p-4 rounded-xl mb-6 text-left text-gray-100">
          <p><strong>Order ID:</strong> #{mockOrderId}</p>
          <p><strong>Plan:</strong> {selectedPlan.name}</p>
          <p><strong>Duration:</strong> {selectedDuration} {selectedDuration === 1 ? "year" : "years"}</p>
          <p className="text-xl font-bold mt-2 text-white">Final Price: ${finalPrice}</p>
        </div>

        <button
          onClick={() => navigate("/pricing")}
          className="bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition shadow-md"
        >
          Back to Pricing
        </button>
      </div>
    </div>
  );
}
