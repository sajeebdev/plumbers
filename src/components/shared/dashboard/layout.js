import React, { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../dashHeader/header";
import Footer from "../dashFooter/footer";

const Layout = ({ children }) => {
  const [collaps, setCollaps] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Header
        collaps={collaps}
        setCollaps={setCollaps}
        setOpenMenu={setOpenMenu}
      />
      <div className="flex justify-between sm:gap-5 bg-gray-200 ">
        <Sidebar
          collaps={collaps}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <div
          className={`h-fit ${
            collaps
              ? "w-full ease-out duration-300 "
              : "sm:w-[1179px] max-xl:w-[1280px] ease-out duration-300 "
          } sm:ml-auto my-5 sm:px-5 px-1`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
