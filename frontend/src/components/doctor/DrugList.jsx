import axios from "../../instance/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DrugList({add,setAdd}) {
  const { id } = useParams();
  const patientID = id;
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { doctor } = useAuthContext();

  const handleAddDrugs = async (drugID, drugName, route) => {
    try {
      const response = await axios.post(
        "/api/doctor/addDrugs",
        {
          drugName,
          drugID,
          route,
          patientID,
        },
        {
          headers: {
            Authorization: `Bearer ${doctor.token}`,
          },
        }
      );
      console.log(response.status);
      setAdd(!add)
    } catch (error) {
      if (error.response.status === 300) {
        toast.warn("Already added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      console.log(error.response.status);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/superAdmin/drugs",
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

  const columns = [
    {
      name: "Drug ID",
      cell: (row) => row._id,
    },
    {
      name: "Drug Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Route",
      selector: (row) => row.route,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => handleAddDrugs(row._id, row.name, row.route)}
          className=" px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white rounded-md text-base font-semibold"
        >
          Add
        </button>
      ),
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const result = data.filter((item) => {
      return item.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search]);

  return (
    <>
      <BaseTable
        columns={columns}
        data={filterData}
        title={
          <h1 className="font-semibold text-4xl text-center text-black">
            Drug List
          </h1>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search for drugs"
            className="shadow appearance-none border text-black rounded-3xl w-2/3 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        }
        subHeaderAlign="center"
      />
      <ToastContainer />
    </>
  );
}

export default DrugList;
