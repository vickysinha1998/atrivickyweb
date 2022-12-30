import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Order from "./pages/Order.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Shop" element={<Shop />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Order" element={<Order />} />
    </Routes>
  );
}
