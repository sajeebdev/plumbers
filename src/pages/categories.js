import Layout from "@/components/shared/layout/layout";
import React from "react";

// 1. Water Drainage Line
// 2. Sewage Upgrades and Repairs
// 3. Installation of Water Radiators
// 4. Boilers
// 5. Dishwashing
// 6. Toilet and Valve Repairs
// 7. Installation
// 8. Emergency Services
// 9. Repairs and Maintenance
// 10. Drain Cleaning
// 11. Replacement
// 12. Inspection and Replacement
// 13. Toilet Repair
// 14. Leak Repairs
// 15. Pipe Repair and Replacement
// 16. Water Heater Services
// 17. Sewer Repair
//

const Categories = () => {
  return (
    <div className="bg-gray-200">
      <Layout>
        <div className="w-[1200px] m-auto pt-32 ">
          <h1 className="text-2xl font-bold">Our Categories : </h1>
          <div className="flex justify-between gap-10 pt-12">
            <div className="w-[900px] grid grid-cols-3 gap-10">
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                {/* <img
                  className="mx-auto w-[80px] mt-2"
                  src="popular-img-1.png"
                  alt=""
                /> */}
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  1. Water Drainage Line
                </h2>
                <p className="text-center ">
                  &quot;Navigating Water, Easing Drains&quot;
                </p>
              </div>

              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  2. Sewage Upgrades and Repairs
                </h2>
                <p className="text-center ">
                  &quot;Upgrade Your Flow, Repair with Pro!&quot;
                </p>
              </div>

              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  3. Installation of Water Radiators
                </h2>
                <p className="text-center ">
                  &quot;Precision Installation, Warmth at Your Fingertips&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  4. Boilers
                </h2>
                <p className="text-center ">
                  &quot;Boiling Brilliance, Heating Excellence&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  5. Dishwashing
                </h2>
                <p className="text-center ">
                  &quot;Sparkling Clean, Dishwashing Delight, Every Night.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  6. Toilet and Valve Repairs
                </h2>
                <p className="text-center ">
                  &quot;Flush Away Worries, Repair with Precision.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  7. Installation
                </h2>
                <p className="text-center ">
                  &quot;Crafting Comfort, One Installation at a Time.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  8. Emergency Services
                </h2>
                <p className="text-center ">
                  &quot;24/7 Plumbing Prowess, Your Emergency Partner.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  9. Repairs and Maintenance
                </h2>
                <p className="text-center ">
                  &quot;Meticulous Repairs, Proactive Maintenance.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  10. Drain Cleaning
                </h2>
                <p className="text-center ">
                  &quot;Clearing the Way, Drain Cleaning, Your Path to
                  Purity.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  11. Replacement
                </h2>
                <p className="text-center ">
                  &quot;Upgrade Today, Replace with Confidence.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  12. Inspection and Replacement
                </h2>
                <p className="text-center ">
                  &quot;Inspecting Excellence, Replacing with Precision.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  13. Toilet Repair
                </h2>
                <p className="text-center ">
                  &quot;Toilet Troubles? We Have the Fix. Flush Away Problems,
                  Repair Today.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  14. Leak Repairs
                </h2>
                <p className="text-center ">
                  &quot;Leaks Linger? We Make them Vanish. Preserve Your
                  Space.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  15. Pipe Repair and Replacement
                </h2>
                <p className="text-center ">
                  &quot;Precision Pipes, Seamless Solutions.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  16. Water Heater Services
                </h2>
                <p className="text-center ">
                  &quot;Heating Happiness, One Water Heater at a Time.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  17. Sewer Repair
                </h2>
                <p className="text-center ">
                  &quot;Navigate Sewer Issues, Repair with Precision.&quot;
                </p>
              </div>
              <div className="w-[250px]   bg-white mb-4 border border-gray-600  hover:bg-white hover:border-white cursor-pointer">
                <h2 className="p-3 text-xl  font-bold text-center mb-2">
                  18. Every plumbing Services
                </h2>
                <p className="text-center ">
                  &quot;Complete Plumbing Care, Every Service Under One
                  Roof.&quot;
                </p>
              </div>
            </div>
            <div className="w-[300px]">
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

export default Categories;
