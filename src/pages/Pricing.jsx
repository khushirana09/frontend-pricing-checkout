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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
        Choose Your Plan
      </h1>

      {/* Plans */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-72 p-6 rounded-2xl shadow-md transition-transform transform hover:scale-105 cursor-pointer
              ${selectedPlan.name === plan.name
                ? "border-4 border-blue-500 bg-blue-50"
                : "border border-gray-200 bg-white"
              }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{plan.name}</h2>
            <p className="text-gray-600 mb-4 font-medium">Price: ${plan.price} / year</p>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Duration */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <span className="mr-2 font-semibold text-gray-700">Duration:</span>
        {durations.map((d) => (
          <button
            key={d}
            className={`px-5 py-2 rounded-full font-medium transition
              ${selectedDuration === d
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setSelectedDuration(d)}
          >
            {d} {d === 1 ? "year" : "years"}
          </button>
        ))}
      </div>

      {/* Subscription Toggle */}
      <div className="mb-8 flex items-center justify-center gap-3">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={isSubscription}
              onChange={() => setIsSubscription(!isSubscription)}
              className="sr-only"
            />
            <div className={`w-14 h-8 rounded-full transition-all ${isSubscription ? "bg-blue-600" : "bg-gray-300"}`}></div>
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-all
                ${isSubscription ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </div>
          <span className="ml-3 font-medium text-gray-700">Subscription</span>
        </label>
      </div>

      {/* Final Price */}
      <div className="mb-8 text-2xl md:text-3xl font-bold text-gray-800">
        Final Price: ${finalPrice}
      </div>

      {/* Proceed Button */}
      <button
        onClick={() => navigate("/checkout", { state: { selectedPlan, selectedDuration, isSubscription, finalPrice } })}
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 shadow-lg transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
