import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../hooks/admin/useAuthContext";

function Prescription({add}) {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [numberOfDays, setNumberOfDays] = useState("");
  const [dosage, setDosage] = useState("");
  const [remark, setRemark] = useState("");
  const [modal, setModal] = useState(false);
  const [drugName, setDrugName] = useState("");
  const [drugID, setDrugID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");
  const { id } = useParams();
  const { doctor } = useAuthContext();
  const getDrugs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/doctor/patientDrugs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${doctor.token}`,
          },
        }
      );
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDrugs();
  },[add]);

  const handleSubmit = async (id) => {
    console.log(id);
    const response =  await axios.patch(
      `http://localhost:4000/api/doctor/updateDrug/${id}`,
      {
        dosage,
        numberOfDays,
        remark,
      },
      {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      }
    );
    if (response.status == 200 ) {
      toast.success("Data added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      getDrugs();
    }
  };

  const handelDelete = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:4000/api/doctor/deleteDrug/${id}`, {
      headers: {
        Authorization: `Bearer ${doctor.token}`,
      },
    });
    getDrugs();
  };
  const handleUpdate = async (id) => {
    const { data } = await axios.get(
      `http://localhost:4000/api/doctor/singleDrug/${id}`,
      {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      }
    );
    console.log(data);
    setPrescriptionID(data._id);
    setDrugID(data.drugID);
    setDrugName(data.drugName);

    setModal(!modal);
  };

  const columns = [
    {
      name: "Drug ID",
      cell: (row, index) => row.drugID,
    },
    {
      name: "Drug Name",
      selector: (row) => row.drugName,
      sortable: true,
    },
    {
      name: "Dosage",
      cell: (row) => row.dosage,
    },
    {
      name: "No. of Days",
      selector: (row) => row.numberOfDays,
    },
    {
      name: "Remark",
      selector: (row) => row.remark,
    },

    {
      name: "Action",
      cell: (row) => (
        <div className="inline-flex text-2xl text-gray-900 gap-3 ">
          <MdDelete
            onClick={() => handelDelete(row._id)}
            className="cursor-pointer"
          />
          <BiEdit
            onClick={() => handleUpdate(row._id)}
            className="cursor-pointer"
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const result = data.filter((item) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search]);

  return (
    <>
      <div className="pb-8">
        <div className="mt-4">
          <BaseTable
            columns={columns}
            data={filterData}
            title={
              <h1 className="font-semibold text-4xl text-black text-center">
                Prescription
              </h1>
            }
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search for Prescribed drugs"
                className="shadow appearance-none border rounded-3xl w-2/3  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            }
            subHeaderAlign="center"
          />
        </div>
        {modal && (
          <div className="fixed z-20 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded w-96 m-5">
              <div className="flex justify-between">
                <h1 className="font-semibold text-center text-2xl px-5 my-5 text-gray-700">
                  {"Details"}
                </h1>
                <button
                  className="font-semibold mr-3 mb-8 text-xl"
                  onClick={() => setModal(!modal)}
                >
                  X
                </button>
              </div>
              <div className="flex flex-col  p-5">
                <form>
                  <label className="block font-normal " htmlFor="name">
                    Drug ID
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="mt-1 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    value={drugID}
                    disabled
                  />
                  <label className="block font-normal " htmlFor="name">
                    Drug Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    placeholder="Location"
                    value={drugName}
                    disabled
                  />
                  <label className="block font-normal " htmlFor="name">
                    Dosage
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    placeholder="Dosage"
                  />
                  <label className="block font-normal " htmlFor="name">
                    no. of days
                  </label>
                  <input
                    type="text"
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(e.target.value)}
                    id="first_name"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    placeholder="no. of days"
                  />
                  <label className="block font-normal " htmlFor="name">
                    Remark
                  </label>
                  <input
                    type="text"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    id="first_name"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block w-full p-2.5"
                    placeholder="remark"
                  />

                  <div className="text-center p-2">
                    <button
                      onClick={() => handleSubmit(prescriptionID)}
                      type="button"
                      className=" px-5 py-1 bg-gray-700 text-white text-lg rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer/>
    </>
  );
}

export default Prescription;
