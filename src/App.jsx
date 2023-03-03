import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
const App = () => {
  return (
    <main className="relative">
      <HeroSection />
      <WorkSection />
      <Footer />
    </main>
  );
};

export default App;
