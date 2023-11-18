import React from "react";
import style from "./freequotes.module.css";
const Freequotes = () => {
  return (
    <div className="sm:px-40 p-10">
      <h3 className="text-center text-4xl">
        Applying online for your{" "}
        <span className="font-bold"> FREE quotes.</span>
        <hr className={style.hr} />
      </h3>
      <p className="text-lg mt-5">
        Clogged drain? Running toilet? Leaky faucet? Failed water heater? Best
        Plumbing always works with you to ensure your residential plumbing is in
        top form. Our plumbing service team will dispatch a qualified,
        professional technician to resolve any issue as efficiently as possible
        because we understand the importance of clean water and functioning
        plumbing to your quality of life.
      </p>
      <div className="flex sm:flex-row flex-col sm:items-center items-center  justify-center py-10">
        <div className="basis-1/3 sm:p-20 p-5 sm:border-r-4 gray-600 focus:outline-none">
          <div className="">
            <img className="m-auto" src="1.png" alt="" />
          </div>
          <h3 className="mt-6 text-xl text-center">DRAIN CLEANING</h3>
        </div>
        <div className="basis-1/3">
          {" "}
          <div className="basis-1/3 sm:p-20 p-5 sm:border-r-4 gray-600 focus:outline-none">
            <div className="">
              <img className="m-auto" src="2.png" alt="" />
            </div>
            <h3 className="mt-6 text-xl text-center">HOT WATER HEATERS</h3>
          </div>
        </div>
        <div className="basis-1/3 sm:p-20 p-5">
          {" "}
          <div className="basis-1/3">
            <div className="">
              <img className="m-auto" src="3.png" alt="" />
            </div>
            <h3 className="mt-6 text-xl text-center">TOILET REPAIR</h3>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Freequotes;
