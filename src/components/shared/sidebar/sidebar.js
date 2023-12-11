import React from "react";
import { PieChartOutlined } from "@ant-design/icons";
import { Drawer, Menu, Switch } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { BsListOl } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineTransaction } from "react-icons/ai";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";

function getItem(label, icon, key, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", <PieChartOutlined />, ""),
  getItem("Add Blog", <HiOutlineClipboardDocumentList />, "dashboard/add-blog"),
  getItem("Blog List ", <AiOutlineTransaction />, "dashboard/blog-list"),
  getItem("Contact", <LiaFileInvoiceDollarSolid />, "dashboard/contact"),
];

const Sidebar = ({ collaps, openMenu, setOpenMenu }) => {
  const router = useRouter();
  const [current, setCurrent] = useState("1");

  const onClick = (e) => {
    setCurrent(e.key);
    router.push(`/${e.key}`);
  };
  const onClose = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <div
        className={`${
          collaps
            ? "hidden ease-out duration-300 "
            : "hidden sm:block ease-out duration-300 "
        } sm:w-[250px] pt-5 h-full bg-white fixed bg-white left-0 top-20`}
      >
        <Menu
          className="sm:w-full mx-auto"
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[`${router.asPath.slice(1, 50)}`]}
          mode="inline"
          items={items}
        />
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={openMenu}
        className="block sm:hidden"
      >
        <Menu
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[`${router.asPath.slice(1, 50)}`]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </div>
  );
};
export default Sidebar;
