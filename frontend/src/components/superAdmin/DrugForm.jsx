import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";

function DrugForm(props) {
  const [name, setName] = useState("");
  const [route, setRoute] = useState("");
  const [manufaturer, setManufaturer] = useState("");

  const addDoc = async (e) => {
    e.preventDefault();

    try {
      const  response  = await axios.post(props.api, {
        name,
        route,
        manufaturer,
      });
      if (response) {
        setName("");
        setRoute("");
        setManufaturer("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" ">
        <div className="">
          <h1 className="text-center font-bold text-3xl text-black">
            Add {props.title}
          </h1>
        </div>
        <div>
          <form className="w-full max-w-md mx-auto">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Drug Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Drug Name"
            />

            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="route"
            >
              Route:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              placeholder="Route"
            />
            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="mobile"
            >
              Manufacturer:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              value={manufaturer}
              onChange={(e) => setManufaturer(e.target.value)}
              placeholder="Manufacturer"
            />
            <div className="flex mt-8 justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={addDoc}
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
      </div>
    </div>
  );
}

export default DrugForm;
