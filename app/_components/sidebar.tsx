"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaCog, FaReact, FaUser } from "react-icons/fa";
import nextIcon from "@/public/assets/next.png";
import { redirect, usePathname } from "next/navigation";
import Cookies from "js-cookie";


const Sidebar = () => {
  const pathName = usePathname();

  const sidebarItem = [
    {
      id: 1,
      link: "فهرست چارت ها",
      icon: <FaReact className="text-blue-600 " />,
      to: "/charts",
    },
    {
      id: 3,
      link: "محصولات و خدمات",
      icon: <FaUser className="text-blue-600 " />,
      to: "/products",
    },
    {
      id: 4,
      link: "پیشنهاد ما",
      icon: <FaCheckCircle className="text-blue-600 " />,
      to: "/specialOffer",
    },
    {
      id: 5,
      link: "تنظیمات",
      icon: <FaCog className="text-blue-600 " />,
      to: "/settings",
    },
  ];

  return (
    <div className="relative flex flex-col bg-slate-00 shadow-2xl w-[300px]">
      <div className="flex justify-center mt-5">
        <Image src={nextIcon} alt="none" width={150} height={100} quality={100} />
      </div>

      <div className="flex flex-col gap-3 pt-6 p-5">
        {sidebarItem.map((item) => (
          <Link
            href={item.to}
            className="p-3 px-5 bg rounded-lg flex items-center gap-4 hover:cursor-pointer hover:bg-slate-200 transition-all duration-300 group bg-white "
            key={item.id}
          >
            {pathName === item.to && (
              <div className="absolute right-0 w-1 h-10 bg-blue-500" />
            )}
            <div className="p-1 rounded-md bg-blue-100">{item.icon}</div>
            <div className="text-blue-600 IRANSansX-medium">{item.link}</div>
          </Link>
        ))}
      </div>


      <div className="absolute bottom-2 left-3 flex justify-end w-full">
        <button
          onClick={() => {
            Cookies.remove("token")
            redirect("/")
          }}
          className="bg-red-500 p-1 px-2 cursor-pointer hover:bg-red-700 duration-300 text-white rounded-md">
          خروج
        </button>

      </div>

    </div>
  );
};

export default Sidebar;
