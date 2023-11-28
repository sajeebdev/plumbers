import React from "react";
import { Carousel } from "antd";

const Banner = () => (
  <div className="mt-24">
    <Carousel autoplay>
      <div className="w-full h-[500px]">
        <img
          className="w-full  h-[500px]"
          src="https://chamblissplumbing.com/wp-content/webp-express/webp-images/uploads/2023/03/whats-a-plumber-1.jpg.webp"
          alt=""
        />
      </div>
      <div className=" w-full  h-[500px]">
        <img
          className="w-full  h-[500px]"
          src="https://www.readysetplumb.com.au/wp-content/uploads/bg-slider-plumber-1024x524-1.jpg"
          alt=""
        />
      </div>
      <div className=" w-full  h-[500px]">
        <img
          className="w-full  h-[500px]"
          src="https://www.thebesttoronto.com/wp-content/uploads/2021/06/Best-Emergency-Plumber-in-Toronto-1.jpg"
          alt=""
        />
      </div>
    </Carousel>
  </div>
);
export default Banner;
