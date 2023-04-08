import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort, BsHeartPulse } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", link: "", icon: <MdDashboard /> },
    { title: "Admited Patients", link: "/admitedPatients", icon: <FaHospitalUser /> },
  ];
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 950) {
        setOpen(false);
      }
      if (window.innerWidth > 950) {
        setOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div
        className={`bg-[#27272a] h-screen p-5 pt-8  ${
          open ? "w-72" : "w-20"
        } duration-300 relative `}
      >
        <BsArrowLeftShort
          className={`bg-[#C3BFBF] text-[#27272a] 
                  text-3xl rounded-full absolute -right-3 top-9 border border-[#27272a] cursor-pointer ${
                    !open && "rotate-180"
                  }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <MdAdminPanelSettings className="text-gray-300 text-4xl rounded cursor-pointer mr-3 block float-left" />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Menu
          </h1>
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <Link to={menu.link}>
                {" "}
                <li
                  key={index}
                  className="text-gray-300 text-xl flex items-center gap-x-4 p-2 cursor-pointer hover:bg-[#374151] rounded-md mt-2"
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </>
          ))}
          <li className="text-gray-300 text-xl flex items-center gap-x-4 p-2 cursor-pointer hover:bg-[#374151] rounded-md mt-2">
            <span className="text-2xl block float-left">
              <RiLogoutBoxLine />
            </span>
            <p
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Logout
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar