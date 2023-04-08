import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
function DrugList() {
  const { id } = useParams()
  const patientID = id
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleAddDrugs = async (drugID, drugName, route) => {
    console.log(patientID);
    try {
      await axios.post("http://localhost:4000/api/doctor/addDrugs", {
        drugName,
        drugID,
        route,
        patientID

      });
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/superAdmin/drugs"
      );
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("this", data);
  }, [data]);

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
  );
}

export default DrugList;
