import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import style from "./footer.module.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-cyan-900">
      <div class="w-[1280px] m-auto pt-16 mt-16  grid grid-cols-3 items-center gap-10">
        <div class="w-[320px] text-white text-start p-2">
          <img className="block m-auto" src="/logo.png" />
          <p className="">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            magni voluptates ea omnis nisi eveniet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, magni voluptates
          </p>
        </div>

        <div class="text-white mx-auto pl-20">
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <hr className={style.hr} />
          <div className=" flex items-center gap-2 my-4">
            <BiSolidPhoneCall />
            <Link className=" hover:text-gray-300" href="">
              017985632000
            </Link>
          </div>
          <div className=" flex items-center  gap-2 my-4">
            <MdEmail />
            <Link className=" hover:text-gray-300" href="">
              contactus@gmail.com
            </Link>
          </div>
          <div className=" flex items-center  gap-2 my-4">
            <IoLogoWhatsapp />
            <Link className=" hover:text-gray-300" href="">
              017985632000
            </Link>
          </div>
        </div>

        <div class="text-white ml-auto px-2">
          <h3 className="text-xl font-semibold text-white mb-3">Social</h3>
          <hr className={style.hr} />
          <div className=" flex items-center gap-2 my-4">
            <FaFacebookSquare />
            <Link className=" hover:text-gray-300" href="">
              Facebook
            </Link>
          </div>
          <div className=" flex items-center gap-2 my-4">
            <FaXTwitter />
            <Link className=" hover:text-gray-300" href="">
              Twitter
            </Link>
          </div>
          <div className=" flex items-center gap-2 my-4">
            <FaInstagramSquare />
            <Link className=" hover:text-gray-300" href="">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:px-40 p-10">
        <hr />
        <h4 className="text-center pt-5 text-white">
          © 2023 Copyright Local Plumbers. All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
