import React from "react";
import style from "./banner.module.css";

const Smallbanner = () => {
  return (
    <div className={`${style.container} relative`}>
      <div class={`${style.image} `}></div>
      <div class={`${style.overlay}`}></div>
      <div
        className={`${style.banner}  w-[900px] h-[300px] rounded-full m-auto bg-cyan-700`}
      >
        <div className="text-center text-4xl pt-16 font-bold text-white">
          Need A Plumber Now
        </div>
        <button className="text-center text-4xl my-10 block m-auto text-red-600 font-bold">
          <a className="text-center">Call : 859 594 6794</a>
        </button>
      </div>
    </div>
  );
};

export default Smallbanner;
