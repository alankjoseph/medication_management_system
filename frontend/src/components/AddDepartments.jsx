import axios from "axios";
import React, { useState } from "react";

function AddDepartments(props) {
    const [name, setName] = useState("");
    const [beds, setBeds] = useState("");

    const addDepartment = async(e)=>{
        e.preventDefault()
        try {
            const {data} = axios.post('http://localhost:4000/api/superAdmin/addDepartment',{
                name, beds
            })
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <div className="">
                    <h1 className="text-center font-bold text-3xl text-black">
                        Add {props.title}
                    </h1>
                </div>
            <form className="w-full max-w-md mx-auto mt-8">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Department Name:
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Department name"
                />
                <label
                    className="block text-gray-700 text-sm font-bold mt-4 mb-2"
                    htmlFor="department"
                >
                    Number of Beds:
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="department"
                    type="text"
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    placeholder="Number of beds"
                />

                <div className="flex mt-8 justify-center">
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={addDepartment}
                    >
                        Save
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddDepartments;
