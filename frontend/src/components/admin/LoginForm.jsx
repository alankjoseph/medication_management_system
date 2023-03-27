import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen  flex justify-center items-center  ">
      <form
        className="bg-[#D9D9D9] h-96	w-80 rounded-xl	p-8"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-2xl text-center mb-10 ">
          {props.title}
        </h3>
        <div className="block mb-7  ">
          <label className="mt-2 mb-1 block text-sm font-bold text-gray-700">
            Email:
          </label>
          <input
            className="w-full rounded  focus:outline-none p-2 "
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mt-2 mb-1 block text-sm font-bold text-gray-700">
            Password:
          </label>
          <input
            className=" w-full rounded  focus:outline-none p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
          <button
            type="submit"
            className="focus:shadow-outline  w-full rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        
      </form>
    </div>
  )
}

export default LoginForm