import React, { Fragment } from "react";
import { MdDoneAll } from "react-icons/md";
function MedicationTime() {
  return (
    <Fragment>
      <h1 className="text-4xl font-bold my-4">Medication Time</h1>
      <div className="grid grid-cols-2 ml-[50px]">
        <div className="bg-[#173868] w-[400px] h-[auto] rounded-[20px] py-4 px-10">
          <div className="flex items-center text-white   gap-5">
            <h1 className=" text-[30px] font-bold tracking-wide ">DAY 1</h1>
            <p className="ml-auto  font-mono">24/04/2024</p>
          </div>
          <div className="text-white ">
            <div className="">
              <table className="table-auto border border-gray-400 mt-5">
                <thead>
                  <tr>
                    <th className="border border-gray-400  "></th>
                    <th className="border border-gray-400 px-2 ">Dose 1</th>
                    <th className="border border-gray-400 px-2 ">Dose 2</th>
                    <th className="border border-gray-400  px-2">Dose 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 1
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 2
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 3
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-[#173868] w-[400px] h-[auto] rounded-[20px] py-4 px-10">
          <div className="flex items-center text-white   gap-5">
            <h1 className=" text-[30px] font-bold tracking-wide ">DAY 1</h1>
            <p className="ml-auto  font-mono">24/04/2024</p>
          </div>
          <div className="text-white ">
            <div className="">
              <table className="table-auto border border-gray-400 mt-5">
                <thead>
                  <tr>
                    <th className="border border-gray-400  "></th>
                    <th className="border border-gray-400 px-2 ">Dose 1</th>
                    <th className="border border-gray-400 px-2 ">Dose 2</th>
                    <th className="border border-gray-400  px-2">Dose 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 1
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 2
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2 font-bold">
                      Drug 3
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <MdDoneAll className="text-xl " />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
}

export default MedicationTime;
