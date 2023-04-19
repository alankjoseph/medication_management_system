import axios from "../../instance/axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { FaRegEye } from "react-icons/fa";
import { useAuthContext } from "../../hooks/admin/useAuthContext";

function Mypatients() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { doctor } = useAuthContext();
  const getData = async () => {
    try {
      const response = await axios.get("/api/doctor/myPatients", {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      });
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Advising Doctor",
      selector: (row) => row.advisingDoctor,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      width: "80px",
    },
    {
      name: "Blood Group",
      selector: (row) => row.bloodGroup,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Bed Number",
      selector: (row) => row.bedNumber,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="  px-4 py-2  text-base font-semibold rounded"
          onClick={() => navigate(`/patientView/${row._id}`)}
        >
          <FaRegEye className="text-3xl cursor-pointer text-gray-900 " />
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
    <BaseTable
      columns={columns}
      data={filterData}
      title={<h1 className="font-semibold  text-4xl">My Patients</h1>}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search"
          className="shadow appearance-none border w-96 rounded bg-slate-200 text-black py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      }
    />
  );
}

export default Mypatients;
