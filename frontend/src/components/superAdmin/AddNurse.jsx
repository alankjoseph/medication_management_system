import React, { useEffect, useState } from "react";
import axios from "../../instance/axios";
import { FaCaretDown } from "react-icons/fa";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
function AddNurse(props) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [availableDepartment, setAvailableDepartment] = useState([]);
  const { superAdmin } = useAuthContext();
  useEffect(() => {
    axios
      .get("/api/superAdmin/department", {
        headers: {
          Authorization: `Bearer ${superAdmin.token}`,
        },
      })
      .then((response) => {
        setAvailableDepartment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addDoc = async (e) => {
    e.preventDefault();

    try {
      const generatePassword = (length) => {
        const charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          password += charset[randomIndex];
        }
        return password;
      };
      const password = generatePassword(8);

      const data = await axios.post(
        props.api,
        {
          name,
          department,
          age,
          mobile,
          gender,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${superAdmin.token}`,
          },
        }
      );
      if (data.status == 200) {
        setAge("");
        setDepartment("");
        setEmail("");
        setGender("");
        setMobile("");
        setName("");
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
              Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="department"
            >
              Department
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value={""}>--Please select--</option>
                {availableDepartment.map((option) => (
                  <option value={option.name}>{option.name}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FaCaretDown className="text-gray-400" />
              </div>
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="age"
            >
              Age:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="mobile"
            >
              Mobile:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="text"
              minLength={10}
              maxLength={10}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile"
            />
            <label
              className="block text-gray-700 text-sm font-bold mt-4 mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">
              Gender:
            </label>
            <div className="inline-block">
              <input
                className="mr-2"
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="text-gray-700 text-sm font-bold" htmlFor="male">
                Male
              </label>
            </div>
            <div className="inline-block ml-4">
              <input
                className="mr-2"
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label
                className="text-gray-700 text-sm font-bold"
                htmlFor="female"
              >
                Female
              </label>
            </div>
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

export default AddNurse;
