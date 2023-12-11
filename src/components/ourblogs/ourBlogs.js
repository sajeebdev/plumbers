import React from "react";
import style from "./outblog.module.css";
import Link from "next/link";

const OurBlogs = ({ blogs }) => {
  return (
    <div className="sm:w-[1280px] m-auto ">
      <div class="grid sm:grid-cols-4 grid-cols-1 gap-4 my-5 ">
        {blogs?.map((a) => (
          <div
            key={a?._id}
            className="p-2 border bg-white pb-5  rounded hover:shadow-lg hover:shadow-cyan-700/50"
          >
            <img className={style.img} src={a?.image} alt="" />
            <p className="text-lg font-semibold my-6">{a?.title}</p>
            <Link href={`/blog/${a?.permalink}`} className={style.button}>
              Read More{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlogs;
