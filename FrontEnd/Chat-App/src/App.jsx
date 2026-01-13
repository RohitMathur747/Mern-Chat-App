import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Authentication/Auth";
import Aboutus from "./components/Aboutus/Aboutus";
import Contact from "./components/ContactUs/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
