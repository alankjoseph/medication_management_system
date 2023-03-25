import React from "react";

function Dashbord() {
    const items = [
        { title: "Department", number: "8" },
        { title: "Doctors", number: "20" },
        { title: "Admins", number: "8" },
        { title: "Nurse", number: "20" },
        { title: "In Patients", number: "80" },
        { title: "Total Beds", number: "100" },
        { title: "Available Beds", number: "20" },
    ];
    return (
        <>
            <div>
                <h1 className="text-4xl  font-bold  content-between  mb-16 text-center">
                    Welcome to Super Admin's Dashboard
                </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-20 place-items-center ">
                {items.map((item, index) => (
                    <>
                        <div className="bg-slate-600 rounded-md h-44 w-48 text-center  py-12 ">
                            <h1 className="text-2xl font-semibold text-white">
                                {item.title}
                            </h1>
                            <h1 className="text-4xl font-bold text-teal-600">
                                {item.number}
                            </h1>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

export default Dashbord;
