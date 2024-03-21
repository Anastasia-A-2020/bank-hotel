import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={"something went wrong..."} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={"Rooms"} />
      <Route path="/restaurant" element={"Restaurant"} />
      <Route path="/conference" element={"Conference hall"} />
      <Route path="/contacts" element={"Contacts"} />
    </Routes>
  );
}
