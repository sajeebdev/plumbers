import React from "react";

const Mostpopular = () => {
  return (
    <div className="sm:px-40 p-10">
      <div className="">
        <h1 className="text-xl font-bold mb-5">Most Popular Searches</h1>
      </div>
      <div className="flex sm:flex-row flex-col text-center ">
        <div className="basis-1/6 mb-4 ">
          <img className="mx-auto" src="popular-img-1.png" alt="" />
          <h2 className="p-3">Emergency Plumbers</h2>
        </div>
        <div className="basis-1/6 mb-4">
          <img className="mx-auto" src="popular-img-2.png" alt="" />
          <h2 className="p-3">Clogged Toilets</h2>
        </div>
        <div className="basis-1/6 mb-4">
          <img className="mx-auto" src="popular-img-3.png" alt="" />
          <h2 className="p-3">Faulty Water Heater</h2>
        </div>
        <div className="basis-1/6 mb-4">
          <img className="mx-auto" src="popular-img-4.png" alt="" />
          <h2 className="p-3">Running Toilet</h2>
        </div>
        <div className="basis-1/6 mb-4">
          <img className="mx-auto" src="popular-img-5.png" alt="" />
          <h2 className="p-3">Slow Draining Sink</h2>
        </div>
        <div className="basis-1/6 mb-4">
          <img className="mx-auto" src="popular-img-6.png" alt="" />
          <h2 className="p-3">Clogged Bath or Shower</h2>
        </div>
      </div>
    </div>
  );
};

export default Mostpopular;
