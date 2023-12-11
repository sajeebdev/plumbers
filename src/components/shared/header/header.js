import React, { useEffect, useState } from "react";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import data from "../../../../public/city.json";
import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setNavbarVisible(window.pageYOffset < 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = (e) => {
    if (e.length == 0) {
      setShowSearch(false);
      return;
    }

    const filteredResults = data.filter((item) => {
      return (
        item.zip.toString().includes(e) ||
        item.city.toLowerCase().includes(e.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
    setShowSearch(true);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div
        className={`${
          isNavbarVisible
            ? "block bg-white text-black"
            : "stickyNav bg-cyan-800 text-white"
        }   `}
      >
        <div className="h-[90px] sm:w-[1280px] m-auto  flex items-center justify-between">
          <div>
            <Link href="/">
              <img className="w-[180px] p-6" src="/logo.png" />
            </Link>
          </div>
          <div className="hidden sm:block">
            <ul
              className={` flex items-center justify-between gap-10 text-base font-semibold `}
            >
              <li>
                <Link href={"/how-it-works"}>How It Works</Link>
              </li>
              <li>Get Listed</li>
              <li>
                <Link href={"/categories"}>Category Search</Link>
              </li>
              <li>
                <Link href={"/all-cities"}>All Cities</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>

              <li className="flex items-center  rounded gap-2 duration-300 ease-in-out">
                {search && (
                  // <form onSubmit={handleSearch}>
                  <input
                    className={`bg-white border border-cyan-800 rounded px-2 py-1 w-[200px] ease-in-out duration-300 text-sm text-black `}
                    placeholder="Search by ZIP/City"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  // </form>
                )}
                {!search ? (
                  <IoSearchSharp
                    className="cursor-pointer"
                    onClick={() => setSearch(!search)}
                  />
                ) : (
                  <RxCross2
                    className="cursor-pointer"
                    onClick={() => setSearch(!search)}
                  />
                )}

                {showSearch && (
                  <div className={`${style.dropdownContent} sm:w-[200px]`}>
                    {searchResults?.length == 0 ? (
                      "No Result Found"
                    ) : (
                      <>
                        {searchResults?.slice(0, 10).map((data, id) => (
                          <div
                            className="flex items-center text-black gap-2 m-auto"
                            key={id}
                          >
                            <IoLocationSharp />
                            <Link
                              className="w-[160px] mt-2"
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
                        ))}{" "}
                      </>
                    )}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
