import axios from "axios";
import {format} from 'date-fns'
import React, { Fragment, useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/admin/useAuthContext";

function ViewPatient() {
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
  const [patientID, setPatientID] = useState('')
  const [date, setDate] = useState('')

  const fetchPatient = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/api/nurse/singlePatient/${id}`
    );
    setPatientID(data.patient._id)
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
    setDate(data.patient.createdAt)

  };
  

  useEffect(() => {
    fetchPatient()
  },[])


  return (
    <Fragment>
      <div className="text-4xl font-bold mb-4">
        Patient Details 
      </div>
      <div class="flex justify-center gap-4">
      
        <div class="bg-gray-100 rounded-md px-32 py-10 shadow-md ">
          <div class="  items-center gap-4 block">
            <p class="text-gray-800 font-medium">
              ID:
              <span class="text-gray-600 ml-2 font-normal">{patientID}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Name:
              <span class="text-gray-600 ml-2 font-normal">{name}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Gender:
              <span class="text-gray-600 ml-2 font-normal">{gender}</span>
            </p>
            <p class="text-gray-800 font-medium">
              BP:
              <span class="text-gray-600 ml-2 font-normal">{bloodPresure}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Age:
              <span class="text-gray-600 ml-2 font-normal">{ age}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Address:
              <span class="text-gray-600 ml-2 font-normal">
                {address}
              </span>
            </p>
            <p class="text-gray-800 font-medium">
              Blood:
              <span class="text-gray-600 ml-2 font-normal">{bloodGroup}</span>
            </p>
          </div>
        </div>
        <div class="bg-gray-100 rounded-md px-32 py-10 shadow-md">
          <div class="  items-center gap-4 block">
            <p class="text-gray-800 font-medium">
              Advising Doctor
              <span class="text-gray-600 ml-2 font-normal">{advisingDoctor}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Admission Date
              <span class="text-gray-600 ml-2 font-normal">{date}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Bed Number:
              <span class="text-gray-600 ml-2 font-normal">{bedNumber}</span>
            </p>
            
            <p class="text-gray-800 font-medium">
              Weight
              <span class="text-gray-600 ml-2 font-normal">{weight} kg</span>
            </p>

            <p class="text-gray-800 font-medium">
              Reason:
              <span class="text-gray-600 ml-2 font-normal">{reason}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ViewPatient;
