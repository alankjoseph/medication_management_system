import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

function PrescribedDrugs() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [days, setDays] = useState('')
  const [dosage, setDosage] = useState('')
  const [remark, setRemark] = useState('')
  const { id } = useParams();

  const getDrugs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/doctor/patientDrugs/${id}`
      );
      setData(response.data);
      setFilterData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDrugs();
  }, []);
  useEffect(() => {
    console.log(days);
    console.log(remark);
    console.log(dosage);
  })

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
      cell: (row) =>
        edit ? (
          <input type="text" defaultValue={row.dosage} value={dosage} onChange={(e)=> setDosage(e.target.value)} />
        ) : (
          row.dosage
        ),
    },
    {
      name: "No. of Days",
      selector: (row) =>
        edit ? (
          <input type="text" defaultValue={row.numberOfDays} value={days} onChange={(e)=> setDays(e.target.value)} />
        ) : (
          row.numberOfDays
        ),
    },
    {
      name: "Remark",
      selector: (row) =>
        edit ? (
          <input type="text" defaultValue={row.remark} value={remark} onChange={(e)=> setRemark(e.target.value)} />
        ) : (
          row.remark
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
    <div className="pb-8">
      <div className="mt-4">
        <BaseTable
          columns={columns}
          data={filterData}
          title={
            <h1 className="font-semibold text-4xl text-black text-center">
              Prescribed Medication
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
    </div>
  );
}

export default PrescribedDrugs