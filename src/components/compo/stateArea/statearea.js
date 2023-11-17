import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import data from "../../../../public/state.json";
const Cityarea = () => {
  return (
    <div className="sm:px-40 p-10 ">
      <div className="">
        <h2 className="text-xl font-bold mb-5">Search Plumbers By State</h2>
      </div>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
        {data.map((data, id) => (
          <div className="flex items-center" key={id}>
            <IoLocationSharp />
            <Link href={data.link}>{data.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cityarea;
