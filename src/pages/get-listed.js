import Layout from "@/components/shared/layout/layout";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const GetListed = () => {
  return (
    <div className=" bg-gray-200">
      <Layout>
        <div className="py-32">
          <div className="w-[1280px] m-auto flex justify-between gap-20 bg-white p-5">
            <div className="6/12">
              <h1 className="text-2xl font-bold">
                Maximize Your Online Visibility
              </h1>
              <p className="mt-1">More Exposure Gets You More Clients!</p>
              <ul className="mt-7">
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Reach Thousands of New Clients
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Get Dedicated Reports & Alert Notifications
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Receive a Full Mini-Website for Your Business
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Keep 100% of Your Fees. Pay No Commissions
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Receive 100% FREE Direct Inquiries from Clients
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Connect & Network With Fellow Plumbing Professionals
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Improve Your Rankings in Search Engines Like Google and Bing
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold text-lg text-gray-500">
                    Receive Training on How to Market Your Plumbing Business
                  </p>
                </li>
              </ul>
              <button className="bg-orange-500 px-10 py-3 text-xl mt-5 rounded text-white">
                Get Your Business Listed
              </button>
            </div>
            <div className="w-4/12">
              <h1 className="text-2xl font-bold">
                Increase Your Online Visibility
              </h1>
              <ul className="mt-7">
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Trusted by Thousands
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Strong Professional Network
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Proven Engagement Opportunities
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Instant SEO for Your Business
                  </p>
                </li>
              </ul>
              <button className="bg-orange-500 px-10 py-3 text-xl mt-5 rounded text-white">
                Get Your Business Listed
              </button>
              <br />
              <br />
              <h1 className="text-2xl font-bold">Membership Includes</h1>
              <ul className="mt-7">
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Direct Inquiries from Prospects
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    No referral or commission fees
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    More Visitors to Your Website
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Mini-Website for Your Business
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">
                    Improved Google Ranking
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <GiCheckMark className="text-orange-600" />{" "}
                  <p className="font-bold  text-gray-500">And More..</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default GetListed;
