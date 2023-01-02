import { useState } from "react";
import { Billing, Business, CardDeal, Hero, Navbar, Stats } from "./components";
import "./App.css";

function App() {
  return (
    <div className="bg-primary">
      <div className="sm:px-16 px-6">
        <div>
          <Navbar />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
<Hero />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
        </div>
      </div>
    </div>
  );
}

export default App;
