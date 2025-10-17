import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPlan, selectedDuration, finalPrice } = location.state || {};

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-2xl font-semibold">No order information found. Please go back to pricing.</h1>
      </div>
    );
  }

  const mockOrderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg mb-4">Your plan has been successfully purchased.</p>

        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <p><strong>Order ID:</strong> #{mockOrderId}</p>
          <p><strong>Plan:</strong> {selectedPlan.name}</p>
          <p><strong>Duration:</strong> {selectedDuration} {selectedDuration === 1 ? "year" : "years"}</p>
          <p className="text-xl font-bold mt-2">Final Price: ${finalPrice}</p>
        </div>

        <button
          onClick={() => navigate("/pricing")}
          className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Back to Pricing
        </button>
      </div>
    </div>
  );
}
