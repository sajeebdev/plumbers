import { Badge, Dropdown, message } from "antd";
import React from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Header = ({ collaps, setCollaps, setOpenMenu }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const onClick = ({ key }) => {
    if (key == "logout") {
      signOut();
    } else {
      router.push(key);
    }
  };

  const items = [
    {
      label: "Account",
      key: "/my-profile",
    },
    {
      label: "Messages",
      key: "/messages",
    },
    {
      label: "Notifications",
      key: "/notifications",
    },
    {
      type: "divider",
    },
    {
      label: "Log Out",
      key: "logout",
    },
  ];

  return (
    <div className="shadow-lg h-[80px] flex items-center sticky bg-white top-0 z-50">
      <div className="sm:w-[1200px] m-auto flex items-center sm:justify-between">
        <div className="flex   items-center sm:gap-8 gap-20">
          <MdMenu
            className="text-2xl text-orange-500 cursor-pointer block sm:hidden"
            onClick={() => setOpenMenu(true)}
          />
          <img className="w-[100px]" src="/logo.png" />
          <div>
            <Dropdown
              menu={{ items, onClick }}
              placement="bottomRight"
              trigger={["click"]}
              arrow
              className="bg-gray-100 cursor-pointer py-1 px-1 block sm:hidden"
            >
              <img
                className="sm:w-[40px] w-[40px]  h-[40px] rounded-full"
                src={session?.user?.avater}
              />
            </Dropdown>
          </div>
          {collaps ? (
            <RiMenuUnfoldLine
              className="text-2xl text-orange-500 cursor-pointer hidden sm:block"
              onClick={() => setCollaps(false)}
            />
          ) : (
            <RiMenuFoldLine
              className="text-2xl text-orange-500 cursor-pointer  hidden sm:block"
              onClick={() => setCollaps(true)}
            />
          )}
        </div>
        <div className="flex items-center">
          <Badge
            dot={true}
            className="m-2 cursor-pointer  hidden sm:block"
            onClick={() => router.push("/messages")}
          >
            <TiMessages className="text-2xl text-gray-500" />
          </Badge>
          <Badge
            dot={true}
            color="blue"
            className="m-2  cursor-pointer  hidden sm:block"
            onClick={() => router.push("/notifications")}
          >
            <IoIosNotificationsOutline className="text-2xl text-gray-500" />
          </Badge>
          <div className="hidden sm:block">
            <div className="m-2 flex items-center gap-2 ">
              <img
                className="sm:w-[40px] h-[40px] rounded-full"
                src={session?.user?.avater}
              />
              <Dropdown
                menu={{ items, onClick }}
                placement="bottomRight"
                trigger={["click"]}
                arrow
                className="bg-gray-100 cursor-pointer py-1 px-1"
              >
                <span className="flex gap-1 items-center">
                  <h3>
                    {session?.user?.firstName + " " + session?.user?.lastName}
                  </h3>
                  <DownOutlined className="text-xs text-gray-500" />
                </span>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
