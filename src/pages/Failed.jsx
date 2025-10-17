import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Failed() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedPlan } = location.state || {};

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed ❌</h1>
            <p className="text-gray-700 mb-6">
                Unfortunately, your payment for <strong>{selectedPlan?.name || "selected plan"}</strong> could not be processed.
                Please try again.
            </p>
            <button
                onClick={() => navigate("/checkout", { state: { selectedPlan } })}
                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
                Retry Payment
            </button>
        </div>
    );
}
