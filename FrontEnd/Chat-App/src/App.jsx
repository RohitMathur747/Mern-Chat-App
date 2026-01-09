import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
