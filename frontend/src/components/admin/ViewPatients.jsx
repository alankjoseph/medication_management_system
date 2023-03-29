import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { FaUserEdit } from "react-icons/fa";
function ViewPatients() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/admin/patient"
      );
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
          onClick={() => navigate(`/patient/${row._id}`)}
        >
          <FaUserEdit className="text-3xl cursor-pointer text-gray-800 " />
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
      title={<h1 className="font-semibold text-4xl">Patient's List</h1>}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search"
          className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      }
      actions={
        <Link to={"/addPatients"}>
          <button className="bg-lime-500 h-10 shadow  text-base font-semibold  w-32 rounded-md">
            Add Patients
          </button>
        </Link>
      }
    />
  );
}

export default ViewPatients;
