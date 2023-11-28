import { Image } from "antd";
import React, { useState } from "react";
import style from "./gallery.module.css";
import images from "../../../public/gallery.json";

const MyGalleries = () => {
  const [filter, setFilter] = useState("");
  const filterImage = images.filter((a) =>
    filter ? a.type == filter : a.type
  );

  return (
    <div className="mt-16">
      <h3 className="text-center text-4xl">
        Generic Gallery
        <hr className={`w-[350px] m-auto my-5`} />
      </h3>
      <div className="w-8/12 flex justify-between m-auto sm:w-4/12">
        <button
          className={style.button}
          role="button"
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          className={style.button}
          role="button"
          onClick={() => setFilter("heater")}
        >
          Water Heater
        </button>
        <button
          className={style.button}
          role="button"
          onClick={() => setFilter("sink")}
        >
          Draining Sink
        </button>
        <button
          className={style.button}
          role="button"
          onClick={() => setFilter("shower")}
        >
          Shower
        </button>
      </div>
      <div className={style.container}>
        {filterImage.slice(0, 6).map((a) => (
          <>
            <Image
              className={style.images}
              src={a.url}
              alt={a.url}
              preview={{
                src: `${a?.preview}`,
              }}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default MyGalleries;
