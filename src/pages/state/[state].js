import Layout from "@/components/shared/layout/layout";
import { Rate } from "antd";
import { TbPhoneCall } from "react-icons/tb";
import React from "react";
import { useRouter } from "next/router";

const StateDate = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-200">
      <Layout>
        <div className="w-[1200px] m-auto">
          <div className="flex justify-between gap-10 pt-32">
            <div className="w-[900px] flex flex-col gap-10">
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Water Drainage Line
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>

              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Sewage Upgrades and Repairs
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Installation of Water Radiators
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Boilers
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Dishwashing
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Toilet and Valve Repairs
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              {/* card  */}
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Installation
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Repairs and Maintenance
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Emergency Services
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Drain Cleaning
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Replacement
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Inspection and Replacement
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Toilet Repair
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Leak Repairs
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Pipe Repair and Replacement
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Water Heater Services
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Sewer Repair
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
              <div className="border border-gray-300 border-2 rounded bg-white w-full h-[250px] flex items-center">
                <div>
                  <h1 className="text-2xl text-gray-600 p-4 font-bold">
                    Every plumbing Services
                  </h1>
                  <Rate
                    className="px-4"
                    disabled
                    allowHalf
                    defaultValue={4.5}
                  />
                  <p className="px-4">(135 Verified Reviews)</p>
                  <p className="px-4 pt-4">
                    Plumbing, cooling and heating problems can be frustrating.
                    The experts at Rhino Plumber, LLC, understand this better
                    than anyone, and service your needs with experienced
                    licensed plumbers and HVAC technicians who get the job done
                    right the first time...
                    <span className="text-blue-500">see more</span>
                  </p>
                </div>
                <div className="h-full mt-auto px-10 pt-16 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <TbPhoneCall />
                    0175630663203
                  </p>
                  <button className="bg-red-500 rounded px-6 py-1 mt-8 text-white">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-[300px]">
              <img
                className="w-full"
                src="https://i.pinimg.com/1200x/db/22/91/db22911583b19f3fa65990560aeea729.jpg"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default StateDate;
