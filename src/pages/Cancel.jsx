import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cancel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-2xl p-6 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Payment Canceled</h1>
        <p className="text-lg text-gray-300 mb-6">
          Your payment was not completed. You can retry or go back to pricing.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition shadow-md"
          >
            Retry Checkout
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition shadow-md"
          >
            Back to Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
