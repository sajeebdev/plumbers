import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className=" bg-cyan-900">
      <div class="flex sm:flex-row flex-col sm:items-center itemx-start sm:px-40 p-10 ">
        <div class="basis-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">Menu</h3>
          <hr className={style.hr} />

          <div className="flex flex-col  text-white ">
            <Link className="my-2" href="">
              How It's Work
            </Link>
            <Link className="my-2" href="">
              Get Started
            </Link>
            <Link className="my-2" href="">
              pricing
            </Link>
            <Link className="my-2" href="">
              Contact
            </Link>
          </div>
        </div>
        <div class="basis-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">
            Local Plumbers
          </h3>
          <hr className={style.hr} />

          <div className="flex flex-col  text-white ">
            <Link className="my-2" href="">
              How It's Work
            </Link>
            <Link className="my-2" href="">
              Get Started
            </Link>
            <Link className="my-2" href="">
              pricing
            </Link>
            <Link className="my-2" href="">
              Contact
            </Link>
          </div>
        </div>

        <div class="basis-1/4">
          <h3 className="text-xl font-semibold text-white mb-3">
            Useful Links
          </h3>
          <hr className={style.hr} />

          <div className="flex flex-col  text-white ">
            <Link className="my-2" href="">
              How It's Work
            </Link>
            <Link className="my-2" href="">
              Get Started
            </Link>
            <Link className="my-2" href="">
              pricing
            </Link>
            <Link className="my-2" href="">
              Contact
            </Link>
          </div>
        </div>

        <div class="basis-1/4 text-white">
          <h3 className="text-xl font-semibold text-white mb-3">Social</h3>
          <hr className={style.hr} />
          <div className=" flex items-center my-2">
            <FaFacebookSquare />
            <Link href="">Facebook</Link>
          </div>
          <div className=" flex items-center my-2">
            <FaXTwitter />
            <Link href="">Twitter</Link>
          </div>
          <div className=" flex items-center my-2">
            <FaLinkedin />
            <Link href="">Linkedin</Link>
          </div>
          <div className=" flex items-center my-2">
            <FcGoogle />
            <Link href="">Google</Link>
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
