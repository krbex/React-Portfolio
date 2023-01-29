import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-blue-700">
      <div>
        <PortfolioContainer />
      </div>
      <div className="z-40">
        <Footer />
      </div>
    </div>
  );
}

export default App;
