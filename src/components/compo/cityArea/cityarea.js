import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import data from "../../../../public/city.json";

const Cityarea = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledData = shuffleArray([...data]);
  const randomData = shuffledData.slice(0, 52);

  return (
    <div className="py-10 bg-slate-100">
      <div className="w-[1280px] m-auto">
        <div className="px-16 flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-5">Most Popular Cities</h2>
          <button className="text-blue-600">
            <Link href={"/all-cities"}>See All Cities</Link>
          </button>
        </div>
        <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
          {randomData?.map((data, id) => (
            <div className="flex items-center gap-2 m-auto" key={id}>
              <IoLocationSharp />
              <Link
                className="w-[160px]"
                href={`/city/${data?.zip?.toString()}-${data?.city}-${
                  data?.state
                }`}
              >
                {data.city},{" "}
                <span className="uppercase">{data?.state?.slice(0, 2)}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cityarea;
