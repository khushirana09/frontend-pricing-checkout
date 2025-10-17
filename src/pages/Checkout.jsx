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
  const [loadingMethod, setLoadingMethod] = useState("");

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-900 text-white">
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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePayment = async (method) => {
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
    setLoadingMethod(method);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          plan: selectedPlan.name,
          duration: selectedDuration,
          price: finalPrice,
          paymentMethod: method,
        }),
      });

      await response.json();
      const isSuccess = Math.random() > 0.3;
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoadingMethod("");

      if (isSuccess) {
        navigate("/success", { state: { selectedPlan, selectedDuration, isSubscription, finalPrice, method } });
      } else {
        navigate("/failed", { state: { selectedPlan, method } });
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setLoadingMethod("");
      navigate("/failed", { state: { selectedPlan, method } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-3xl mb-6">
        <button
          onClick={() => navigate("/pricing")}
          className="text-blue-400 font-semibold hover:underline"
        >
          ← Back to Pricing
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-center flex-1">Checkout</h1>
      </div>

      {/* Selected Plan */}
      <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Selected Plan</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p><strong>Plan:</strong> {selectedPlan.name}</p>
            <p><strong>Duration:</strong> {selectedDuration} {selectedDuration === 1 ? "year" : "years"}</p>
            <p><strong>Subscription:</strong> {isSubscription ? "Yes" : "No"}</p>
          </div>
          <p className="text-xl md:text-2xl font-bold mt-2 md:mt-0 text-right">
            Final Price: ${finalPrice}
          </p>
        </div>
      </div>

      {/* Billing Info */}
      <div className="w-full max-w-3xl bg-gray-800 shadow-lg rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Billing Information</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            className={`border rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 ${touched.name && !name ? "border-red-500" : "border-gray-600"}`}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className={`border rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400 ${touched.email && (!email || !emailPattern.test(email)) ? "border-red-500" : "border-gray-600"}`}
          />
          <input
            type="text"
            placeholder="Promo Code (Optional)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="border border-gray-600 rounded-lg p-3 bg-gray-700 text-white placeholder-gray-400"
          />
        </form>
        {errorMsg && <p className="text-red-500 mt-2 font-semibold">{errorMsg}</p>}
      </div>

      {/* Payment Methods */}
      <div className="w-full max-w-3xl flex flex-col gap-4 mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">Payment Methods</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => handlePayment("Credit Card")}
            disabled={!!loadingMethod}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loadingMethod === "Credit Card" ? "Processing..." : "Pay with Credit Card"}
          </button>

          <button
            onClick={() => handlePayment("PayPal")}
            disabled={!!loadingMethod}
            className="flex-1 bg-yellow-500 text-white py-3 rounded-xl font-semibold hover:bg-yellow-600 transition disabled:opacity-60"
          >
            {loadingMethod === "PayPal" ? "Processing..." : "Pay with PayPal"}
          </button>

          <button
            onClick={() => navigate("/cancel")}
            className="flex-1 bg-gray-600 text-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
}
