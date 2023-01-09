import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
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
