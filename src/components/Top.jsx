import React from "react";

const Top = () => {
  return (
    <div
      className="w-full bg-gradient-to-t from-blue-700 to-blue-500 flex flex-col items-center 
     px-14 py-5 gap-3 text-white rounded-b-3xl"
    >
      <p>Your Result</p>
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 px-8 py-5 rounded-full
       flex flex-col items-center gap-3">
        <p className="text-5xl font-bold">76</p>
        <p className="text-sm text-gray-300">of 100</p>
      </div>
      <p className="text-2xl font-medium">Great</p>
      <p className="text-md text-gray-300">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Top;
