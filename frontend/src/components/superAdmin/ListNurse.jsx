import axios from "../../instance/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
function ListNurse() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const { superAdmin } = useAuthContext();
  const handleBlock = async (id) => {
    try {
      await axios.patch(
        `/api/superAdmin/blockNurse/${id}`,
        {
          headers: {
            Authorization: `Bearer ${superAdmin.token}`,
          },
        }
      );

      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/superAdmin/nurse",
        {
          headers: {
            Authorization: `Bearer ${superAdmin.token}`,
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
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
    },
    {
      name: "ON/OFF duty",
      cell: (row) => (
        <h1
          className={`bg-${
            row.duty ? "green" : "blue"
          }-600 px-4 py-1 text-white rounded-md  text-base font-semibold`}
        >
          {row.duty ? "ON" : "OFF"}
        </h1>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <h1
          onClick={() => {
            handleBlock(row._id);
          }}
          className={`bg-${
            row.isDisabled ? "green" : "blue"
          }-600 px-4 py-1 text-white rounded-md  text-base font-semibold`}
        >
          {row.isDisabled ? "Unblock" : "Block"}
        </h1>
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
      title={<h1 className="font-semibold text-4xl">Nurse's List</h1>}
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
        <Link to={"/addNurse"}>
          <button className="bg-lime-500 h-10 shadow  text-base font-semibold  w-32 rounded-md">
            Add Nurse
          </button>
        </Link>
      }
    />
  );
}

export default ListNurse;
