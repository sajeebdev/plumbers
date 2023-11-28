import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import data from "../../../../public/state.json";
const Cityarea = () => {
  return (
    <div className="w-[1280px] mt-24 m-auto">
      <div className="px-28">
        <h2 className="text-2xl font-bold mb-5">Our Services States</h2>
      </div>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
        {data.map((data, id) => (
          <div className="flex items-center m-auto" key={id}>
            <IoLocationSharp />
            <Link href={data.link}>{data.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cityarea;
