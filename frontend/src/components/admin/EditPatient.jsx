import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
function EditPatient() {
  const { admin } = useAuthContext();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [advisingDoctor, setAdvisingDoctor] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [bedNumber, setBedNumber] = useState("");
  const [bloodPresure, setBloodPresure] = useState("");
  const [reason, setReason] = useState("");
  const [weight, setWeight] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPatient = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/admin/singlePatient/${id}`, {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          }
        }
      );
      console.log(data);
      setName(data.patient.name);
      setAge(data.patient.age);
      setGender(data.patient.gender);
      setAddress(data.patient.address);
      setAdvisingDoctor(data.patient.advisingDoctor);
      setBloodGroup(data.patient.bloodGroup);
      setBedNumber(data.patient.bedNumber);
      setBloodPresure(data.patient.bloodPresure);
      setReason(data.patient.reason);
      setWeight(data.patient.weight);
    };
    if (admin) {
      getPatient();
      
    }
  }, [admin]);

  useEffect(() => {
    const fetchDoctors =async () => {
      axios
      .get("http://localhost:4000/api/superAdmin/doctors", {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        }
      })
      .then((response) => {
        setAvailableDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    if (admin) {
      fetchDoctors()
    }
    
  }, [admin]);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin) {
      setError('You must be logged in')
      return
    }

    // Submit the form data to the server or do something else with it here
    const { data } = await axios.patch(
      `http://localhost:4000/api/admin/updatePatient/${id}`,
      {
        name,
        age,
        gender,
        address,
        bloodGroup,
        bedNumber,
        weight,
        advisingDoctor,
        bloodPresure,
        reason,
      },{
        headers: {
          Authorization: `Bearer ${admin.token}`,
        }
      }
    );
  };

  return (
    <div>
      <div className="font-bold text-4xl text-center mb-6">Add Patient</div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Patient's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          className={`${
            viewportWidth < 650 ? "block -mx-2 mb-4" : "flex mb-4 -mx-2 "
          }`}
        >
          <div
            className={` ${
              viewportWidth < 650 ? "w-2/2  px-2" : "w-1/2  px-2 "
            }`}
          >
            <label className="block font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 mb-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Patient's age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div
            className={` ${
              viewportWidth < 650 ? "w-2/2  px-2" : "w-1/2  px-2 "
            }`}
          >
            <label className="block font-bold mb-2" htmlFor="blood-group">
              Blood Group
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="blood-group"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Patient's blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FaCaretDown className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 ">
          <span className="block font-bold mb-2">Gender</span>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio h-5 w-5  text-gray-600"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <span className="ml-2">Female</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-gray-600"
              name="gender"
              value="Other"
              checked={gender === "Other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <span className="ml-2">Other</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            placeholder="Patient address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div
          className={`${
            viewportWidth < 650 ? "block -mx-2 mb-4" : "flex mb-4 -mx-2 "
          }`}
        >
          <div
            className={` ${
              viewportWidth < 650 ? "w-3/3  px-2" : "w-1/3  px-2 "
            }`}
          >
            <label className="block font-bold mb-2" htmlFor="bed">
              Bed Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="bed"
              type="number"
              placeholder="Bed number"
              value={bedNumber}
              onChange={(e) => setBedNumber(e.target.value)}
            />
          </div>
          <div
            className={` ${
              viewportWidth < 650 ? "w-3/3  px-2 mb-2" : "w-1/3  px-2 "
            }`}
          >
            <label className="block font-bold mb-2" htmlFor="weight">
              Weight in KG
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Patient's weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div
            className={` ${
              viewportWidth < 650 ? "w-3/3  px-2" : "w-1/3  px-2 "
            }`}
          >
            <label className="block font-bold mb-2" htmlFor="bp">
              BP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="bp"
              type="number"
              placeholder="Patient's BP"
              value={bloodPresure}
              onChange={(e) => setBloodPresure(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="advisingDoctor">
            Advising Doctor
          </label>
          <div className="relative">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="advisingDoctor"
              value={advisingDoctor}
              onChange={(e) => setAdvisingDoctor(e.target.value)}
            >
              <option value="">--Please select--</option>
              {availableDoctors.map((option) => (
                <option value={option.name}>{option.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FaCaretDown className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="reason">
            Reason
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            placeholder="Reason for Admiting"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="flex mt-8 justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-20 py-2 px-4 rounded mr-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold w-20 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
          {error && <div className="text-red-500 ">{error }</div>}
        </div>
      </form>
    </div>
  );
}

export default EditPatient;
