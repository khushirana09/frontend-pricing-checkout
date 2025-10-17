import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();

  const plans = [
    { name: "Basic", price: 50, features: ["Feature A", "Feature B"] },
    { name: "Standard", price: 100, features: ["Feature A", "Feature B", "Feature C"] },
    { name: "Premium", price: 200, features: ["All Features"] },
  ];

  const durations = [1, 3, 6, 9];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [isSubscription, setIsSubscription] = useState(true);

  const finalPrice = isSubscription
    ? (selectedPlan.price * selectedDuration).toFixed(2)
    : selectedPlan.price.toFixed(2);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">
        Choose Your Plan
      </h1>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-8 mb-10 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-72 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer
              ${selectedPlan.name === plan.name
                ? "border-4 border-blue-500 bg-gradient-to-b from-blue-700 to-blue-500 text-white"
                : "border border-gray-700 bg-gray-800 text-gray-200"
              }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-lg mb-4 font-medium">Price: ${plan.price} / year</p>
            <ul className="mb-4 list-disc list-inside space-y-1">
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Duration */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 align-bottom">
        <span className="mr-2 font-semibold text-gray-300">Duration:</span>
        {durations.map((d) => (
          <button
            key={d}
            className={`px-5 py-2 rounded-full font-medium transition
              ${selectedDuration === d
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            onClick={() => setSelectedDuration(d)}
          >
            {d} {d === 1 ? "year" : "years"}
          </button>
        ))}
      </div>

      {/* Subscription Toggle */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={isSubscription}
              onChange={() => setIsSubscription(!isSubscription)}
              className="sr-only"
            />
            <div className={`w-14 h-8 rounded-full transition-all ${isSubscription ? "bg-green-600" : "bg-gray-600"}`}></div>
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-all
                ${isSubscription ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </div>
          <span className="ml-3 font-medium text-gray-300">Subscription</span>
        </label>
      </div>

      {/* Final Price */}
      <div className="mb-10 text-3xl md:text-4xl font-bold text-white">
        Final Price: ${finalPrice}
      </div>

      {/* Proceed Button */}
      <button
        onClick={() => navigate("/checkout", { state: { selectedPlan, selectedDuration, isSubscription, finalPrice } })}
        className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-500 shadow-xl transition transform hover:scale-105"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
