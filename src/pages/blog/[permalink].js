import Layout from "@/components/shared/layout/layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DetailsBlog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (!router?.query?.permalink) {
      return;
    }
    const apiUrl = `http://localhost:5000/api/blogs/details/${router?.query?.permalink}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setBlog(response?.data?.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [router?.query]);

  return (
    <div className="bg-gray-200">
      <Layout>
        <br />
        <br />
        <br />
        <br />

        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        <div className="w-[1280px] m-auto flex justify-between gap-5 ">
          <div className="sm:w-full bg-white p-5">
            <img className=" block m-auto" src={blog?.image} />
            <br /> <br /> <br />
            <h1 className="text-3xl font-bold">{blog?.title} </h1>
            <br />
            <div>
              <div
                className="mb-5 text-sm sm:text-lg"
                dangerouslySetInnerHTML={{
                  __html: blog?.desc,
                }}
              ></div>
            </div>
          </div>
          <div className="sm:w-[350px]">
            <img
              className="w-full"
              src="https://i.pinimg.com/1200x/db/22/91/db22911583b19f3fa65990560aeea729.jpg"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DetailsBlog;
