import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import initialData from "../../public/city.json";
import Layout from "@/components/shared/layout/layout";
import { RxCross2 } from "react-icons/rx";

const AllCities = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setAdd(true);
        setIsLoading(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = initialData.filter((item) => {
      return (
        item.zip.toString().includes(searchTerm) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
    setShowSearch(true);
  };

  return (
    <div className=" bg-gray-200">
      <Layout>
        <div className="py-32">
          <div className="w-[1280px] m-auto bg-white pt-10">
            <div className="px-16 flex justify-between items-center">
              <h2 className="text-2xl font-bold mb-5">Most Popular Cities</h2>
              <div className="flex items-center border bg-red-500 rounded">
                <form onSubmit={handleSearch}>
                  <input
                    className={`bg-white border border-cyan-800 rounded px-2 py-1 w-[200px] ease-in-out duration-300 text-sm text-black `}
                    placeholder="Search by ZIP/City"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
                {showSearch ? (
                  <RxCross2
                    className="cursor-pointer  mx-2 text-white"
                    onClick={() => setShowSearch(false)}
                  />
                ) : (
                  <IoSearchSharp className="cursor-pointer mx-2 text-white" />
                )}
              </div>
            </div>
            {showSearch ? (
              <>
                {" "}
                <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
                  {searchResults?.slice(0, 100).map((data, id) => (
                    <div className="flex items-center gap-2 m-auto" key={id}>
                      <IoLocationSharp />
                      <Link
                        className="w-[160px]"
                        href={`/city/${data?.zip?.toString()}-${data?.city}-${
                          data?.state
                        }`}
                      >
                        {data.city},{" "}
                        <span className="uppercase">
                          {data?.state?.slice(0, 2)}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {" "}
                {!add ? (
                  <>
                    <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
                      {initialData?.slice(0, 100).map((data, id) => (
                        <div
                          className="flex items-center gap-2 m-auto"
                          key={id}
                        >
                          <IoLocationSharp />
                          <Link
                            className="w-[160px]"
                            href={`/city/${data?.zip?.toString()}-${
                              data?.city
                            }-${data?.state}`}
                          >
                            {data.city},{" "}
                            <span className="uppercase">
                              {data?.state?.slice(0, 2)}
                            </span>
                          </Link>
                        </div>
                      ))}
                    </div>
                    {!isLoading && (
                      <p className="text-3xl text-red-500 text-center p-3">
                        Please Wait For More Cities...
                      </p>
                    )}
                  </>
                ) : (
                  <div class="grid sm:grid-cols-4 grid-cols-2 gap-4 py-5">
                    {initialData?.map((data, id) => (
                      <div className="flex items-center gap-2 m-auto" key={id}>
                        <IoLocationSharp />
                        <Link
                          className="w-[160px]"
                          href={`/city/${data?.zip?.toString()}-${data?.city}-${
                            data?.state
                          }`}
                        >
                          {data.city},{" "}
                          <span className="uppercase">
                            {data?.state?.slice(0, 2)}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AllCities;
