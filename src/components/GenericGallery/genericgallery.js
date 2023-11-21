import React from "react";
import style from "./genericgallery.module.css";

const Genericgallery = () => {
  return (
    <div className="sm:px-20 p-8 ">
      <h3 className="text-center text-4xl">
        Generic Gallery
        <hr className={style.hr} />
      </h3>
      <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 my-5 ">
        <div className=" p-2">
          <img className={style.img} src="g1.jpg" alt="" />
          <p className="text-xl font-semibold my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            magni voluptates ea omnis nisi eveniet.
          </p>
          <button className={style.button}>Read More </button>
        </div>
        <div className=" p-2">
          <img className={style.img} src="g2.jpg" alt="" />
          <p className="text-xl font-semibold my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            magni voluptates ea omnis nisi eveniet.
          </p>

          <button className={style.button}>Read More </button>
        </div>
        <div className=" p-2">
          <img className={style.img} src="g3.jpg" alt="" />
          <p className="text-xl font-semibold my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            magni voluptates ea omnis nisi eveniet.
          </p>
          <button className={style.button}>Read More </button>
        </div>
        <div className=" p-2">
          <img className={style.img} src="g4.jpg" alt="" />
          <p className="text-xl font-semibold my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            magni voluptates ea omnis nisi eveniet.
          </p>
          <button className={style.button}>Read More </button>
        </div>
      </div>
    </div>
  );
};

export default Genericgallery;
