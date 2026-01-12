import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Authentication/Auth";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
