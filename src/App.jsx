import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="*" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
