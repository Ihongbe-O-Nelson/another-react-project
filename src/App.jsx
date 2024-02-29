import React from "react";
import Top from "./components/Top";
import Base from "./components/Base";

const App = () => {
  return (
    <div className="lg:bg-white lg:relative lg:h-screen">
      <div className="lg:bg-white lg:flex lg:w-[50%] lg:h-auto lg:absolute lg:left-[25%] lg:top-[10%]
       lg:items-center lg:drop-shadow-lg">
        <Top/>
        <Base/>
      </div>
    </div>
  );
};

export default App;
