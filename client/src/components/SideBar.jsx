import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort, BsHeartPulse } from "react-icons/bs";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";
import { RiAdminLine, RiLogoutBoxLine } from "react-icons/ri";
function SideBar() {
    const [open, setOpen] = useState(true);

    const Menus = [
        { title: "Dashboard", link: "/home", icon: <MdDashboard /> },
        { title: "Doctors", link: "/listDoctors", icon: <BsHeartPulse /> },
        { title: "Staff Nurse", link: "/listNurses", icon: <FaUserNurse /> },
        { title: "Admins", link: "/listAdmins", icon: <RiAdminLine /> },
        { title: "Logout", link: "/", icon: <RiLogoutBoxLine /> },
    ];
    return (
        <div  >
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
                                    <span className="text-2xl block float-left">
                                        {menu.icon}
                                    </span>
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
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
