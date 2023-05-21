import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
import ContactUs from "./screens/contact";
import Services from "./screens/services";
import Terms from "./screens/terms";

export default function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<ContactUs />}></Route>
    <Route path="/services" element={<Services />}></Route>
    <Route path="/terms" element={<Terms />}></Route>
    </Routes>
  );
}
