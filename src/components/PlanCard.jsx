import React from "react";

export default function PlanCard({ plan, price, features, selected, onSelect }) {
  return (
    <div
      className={`border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
        selected ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onClick={() => onSelect(plan)}
    >
      <h2 className="text-xl font-bold mb-2">{plan}</h2>
      <p className="text-gray-600 mb-4">${price} / year</p>
      <ul className="mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-500 text-sm">
            - {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded ${
          selected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {selected ? "Selected" : "Select Plan"}
      </button>
    </div>
  );
}
