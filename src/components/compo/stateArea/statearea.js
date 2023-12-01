import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import data from "../../../../public/city.json";

const Cityarea = () => {
  const uniqueStatesSet = new Set(data.map((entry) => entry.state));
  const uniqueStatesArray = [...uniqueStatesSet];

  return (
    <div className="w-[1280px] mt-24 m-auto">
      <div className="px-28">
        <h2 className="text-2xl font-bold mb-5">Our Services States</h2>
      </div>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
        {uniqueStatesArray?.map((data, id) => (
          <div className="flex items-center gap-2 m-auto" key={id}>
            <IoLocationSharp />
            <Link className="w-[160px]" href={`/state/${data}`}>
              {data}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cityarea;
