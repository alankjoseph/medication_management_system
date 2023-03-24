import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
function ListDoctor(props) {
    const list =[
        {name:"Dr. Jackson", mobile:"3989393343", age:"23", department:"Oncology", duty:"ON",},
        {name:"Dr. Samuel", mobile:"9896785676", age:"55", department:"Oncology", duty:"ON",},
        {name:"Dr. John", mobile:"6546336577", age:"26", department:"Oncology", duty:"ON",},
    ]
    return (
        <>
            <h1 className="text-3xl font-bold pb-14">{props.title}</h1>
            <div className="mb-4 ">
              <Link to={props.link}><button className="bg-yellow-300 w-32 h-10 rounded-md shadow-md text-xl font-semibold "> Add {props.button}</button></Link>
            </div>
            
            <div className=" w-auto ">
              
                <table className="table-auto  ">
                    <thead className="bg-gray-700 text-gray-300">
                        <tr>
                            <th className="border border-black px-4 py-2">
                                ID
                            </th>
                            <th className="border border-black px-4 py-2">
                                Name
                            </th>
                            <th className="border border-black px-4 py-2">
                                Mobile
                            </th>
                            <th className="border border-black px-4 py-2">
                                Age
                            </th>
                            <th className="border border-black px-4 py-2">
                                Department
                            </th>
                            <th className="border border-black px-4 py-2">
                                On/Off Duty
                            </th>
                            <th className="border border-black px-4 py-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-300">
                        { list.map((list,index)=>(
                            <tr>
                            <td className="border border-black px-4 py-2">
                                {index+1}
                            </td>
                            <td className="border border-black px-4 py-2">
                                {list.name}
                            </td>
                            <td className="border border-black px-4 py-2">
                                {list.mobile}
                            </td>
                            <td className="border border-black px-4 py-2">
                                {list.age}
                            </td>
                            <td className="border border-black px-4 py-2">
                                {list.department}
                            </td>
                            <td className="border border-black px-4 py-2">
                                <button className="bg-green-700 w-24 text-lg font-semibold rounded-md shadow-md">
                                    {list.duty}
                                </button>
                            </td>
                            <td className="border border-black px-4 py-2">
                                <BiEdit className="float-left mr-2 text-2xl" />
                                <MdDelete className="text-2xl" />
                            </td>
                        </tr>
                        ))
                            
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListDoctor;
