import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import data from "../../../../public/city.json";
const Cityarea = () => {
  return (
    <div className="sm:px-40 p-10 bg-slate-100">
      <div className="">
        <h2 className="text-xl font-bold mb-5">
          Let Find The Best Plumbers In Your Area. We Have Licensed Plumbers
          Across The Nation.
        </h2>
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
