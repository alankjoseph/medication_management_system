import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { FaRegEye, FaUserEdit } from "react-icons/fa";

function AdmittedPatients() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/nurse/patients", {
         
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
      name: "#",
      cell: (row, index) => row._id,
      width:'auto'
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width:'auto'
    },
    {
      name: "Advising Doctor",
      selector: (row) => row.advisingDoctor,
      width:'auto'
    },
    {
      name: "Age",
      selector: (row) => row.age,
      width:'auto'
    },
    {
      name: "Blood Group",
      selector: (row) => row.bloodGroup,
      width:'auto'
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      width:'auto'
    },
    {
      name: "Bed Number",
      selector: (row) => row.bedNumber,
      width:'auto'
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className=" flex   gap-3"
          
        >
          <FaUserEdit onClick={() => navigate(`/updatePatient/${row._id}`)} className="text-3xl cursor-pointer text-gray-800 " />
          <FaRegEye onClick={()=> navigate(`/viewDetails/${row._id}`) } className="text-3xl cursor-pointer text-gray-800 " />
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
      
    />
  );
}

export default AdmittedPatients