import axios from "../../instance/axios";
import { format } from "date-fns";
import React, { Fragment, useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/admin/useAuthContext";

function MyPatientView() {
  const { doctor } = useAuthContext();
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
  const [error, setError] = useState(null);
  const [patientID, setPatientID] = useState("");
  const [isAdmit, setIsAdmit] = useState("");
  const [admittedDate, setAdmittedDate] = useState("");
  const [iscomplete, setIscomplete] = useState("");
  const [file, setFile] = useState(null);

  const fetchPatient = async () => {
    const { data } = await axios.get(`/api/doctor/singlePatient/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    setPatientID(data.patient._id);
    setIsAdmit(data.patient.isAdmit);
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
    setIscomplete(data.patient.isCompleted);
    setAdmittedDate(data.patient.admittedDate.slice(0, 10));
  };

  useEffect(() => {
    fetchPatient();
  }, []);
  const handleAdmit = async () => {
    await axios.patch(`/api/doctor/admit/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    fetchPatient();
  };
  function handleDownload() {
    axios.get('/download', { responseType: 'blob' })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.png');
        document.body.appendChild(link);
        link.click();
      });
  }
  const handleComplete = async () => {
    await axios.patch(`/api/doctor/complete/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    fetchPatient();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdf", file);
    axios
      .post(`/api/doctor/upload/${patientID}`, formData, {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <Fragment>
      <div className="text-4xl font-bold mb-4">Patient Details</div>
      <div class="flex justify-center gap-4">
        <div class="bg-gray-100 rounded-md px-24 py-10 shadow-md ">
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
              <span class="text-gray-600 ml-2 font-normal">{age}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Address:
              <span class="text-gray-600 ml-2 font-normal">{address}</span>
            </p>
            <p class="text-gray-800 font-medium">
              Blood:
              <span class="text-gray-600 ml-2 font-normal">{bloodGroup}</span>
            </p>
          </div>
        </div>
        <div class="bg-gray-100 rounded-md px-10 py-10 shadow-md">
          <div class="  items-center gap-4 block">
            <p class="text-gray-800 font-medium">
              Advising Doctor
              <span class="text-gray-600 ml-2 font-normal">
                {advisingDoctor}
              </span>
            </p>
            <p class="text-gray-800 font-medium">
              Admission Date
              <span class="text-gray-600 ml-2 font-normal">{admittedDate}</span>
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
            <p class="text-gray-800 font-medium">
              Scanning Report:
              <form onSubmit={handleFormSubmit}>
                <div className="flex my-2">
                  <input type="file" name="pdf" onChange={handleFileChange} />
                  <button
                    className="bg-gradient-to-r from-blue-500 to-blue-500 text-base font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white"
                    type="submit"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </p>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row md:justify-start md:items-center gap-2">
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-base  font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white "
              >
                Download
              </button>
              {isAdmit ? (
                <button
                  onClick={handleAdmit}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-base font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white"
                >
                  Discharge
                </button>
              ) : (
                <button
                  onClick={handleAdmit}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-base font-semibold hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-700 px-4 py-1 rounded-md shadow-md hover:shadow-lg text-white"
                >
                  Admit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MyPatientView;
