import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPlan, selectedDuration, isSubscription, finalPrice } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false });
  const [errorMsg, setErrorMsg] = useState("");

  if (!selectedPlan) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl font-semibold mb-4">
        No plan selected. Please go back to pricing.
      </h1>
      <button
        onClick={() => navigate("/pricing")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Back to Pricing
      </button>
    </div>
  );
}


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email

  const handlePayment = () => {
    setTouched({ name: true, email: true });

    if (!name || !email) {
      setErrorMsg("Please fill in all required fields to proceed with payment.");
      return;
    }

    if (!emailPattern.test(email)) {
      setErrorMsg("Please enter a valid email address (example: user@example.com).");
      return;
    }

    setErrorMsg("");
    navigate("/success", { state: { selectedPlan, selectedDuration, isSubscription, finalPrice } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-3xl mb-6">
        <button
          onClick={() => navigate("/pricing")}
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to Pricing
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-center flex-1">Checkout</h1>
      </div>

      {/* Selected Plan Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Selected Plan</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p><strong>Plan:</strong> {selectedPlan.name}</p>
            <p><strong>Duration:</strong> {selectedDuration} {selectedDuration === 1 ? "year" : "years"}</p>
            <p><strong>Subscription:</strong> {isSubscription ? "Yes" : "No"}</p>
          </div>
          <p className="text-xl md:text-2xl font-bold mt-2 md:mt-0 text-right">Final Price: ${finalPrice}</p>
        </div>
      </div>

      {/* Billing Information */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            className={`border rounded-lg p-3 ${touched.name && !name ? "border-red-500" : "border-gray-300"}`}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className={`border rounded-lg p-3 ${touched.email && (!email || !emailPattern.test(email)) ? "border-red-500" : "border-gray-300"}`}
          />
          <input
            type="text"
            placeholder="Promo Code (Optional)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="border border-gray-300 rounded-lg p-3"
          />
        </form>
        {/* Error Message */}
        {errorMsg && <p className="text-red-600 mt-2 font-semibold">{errorMsg}</p>}
      </div>

      {/* Payment Methods */}
      <div className="w-full max-w-3xl flex flex-col gap-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Payment Methods</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={handlePayment}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Pay with Credit Card
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Pay with PayPal
          </button>
          <button
            onClick={() => navigate("/cancel")}
            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-400 transition"
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
}
