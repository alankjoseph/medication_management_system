import axios from "../../instance/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTable from "../../pages/BaseTable";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useAuthContext } from "../../hooks/admin/useAuthContext";

function PrescribedDrugs() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [days, setDays] = useState("");
  const [dosage, setDosage] = useState("");
  const [remark, setRemark] = useState("");
  const { id } = useParams();
  const { nurse } = useAuthContext();
  const [doseOne, setDoseOne] = useState(null);
  const [doseTwo, setDoseTwo] = useState(null);
  const [doseThree, setDoseThree] = useState(null);
  const [tick, setTick] = useState(true);

  const getDrugs = async () => {
    try {
      const response = await axios.get(`/api/doctor/patientDrugs/${id}`, {
        headers: {
          Authorization: `Bearer ${nurse.token}`,
        },
      });
      setData(response.data);
      setFilterData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDrugs();
  }, [tick]);
  
  // useEffect(() => {
  //   data.forEach((item,index) => {
  //     console.log(item.firstDose?.[item.firstDose.length-1]?.slice(0, 15) == Date().toString().slice(0,15));
  //   })
  // });

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
          <input
            type="text"
            defaultValue={row.dosage}
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
          />
        ) : (
          row.dosage
        ),
    },
    {
      name: "No. of Days",
      selector: (row) =>
        edit ? (
          <input
            type="text"
            defaultValue={row.numberOfDays}
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        ) : (
          row.numberOfDays
        ),
    },
    {
      name: "Remark",
      selector: (row) =>
        edit ? (
          <input
            type="text"
            defaultValue={row.remark}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        ) : (
          row.remark
        ),
    },
    {
      name: "Action",
      selector: (row) => {
        const { firstDose, secondDose, thirdDose, _id, patientID } = row;
        
        const first = row.firstDose?.[row.firstDose.length - 1]?.slice(0, 15) == Date().toString().slice(0, 15)
        const second = row.secondDose?.[row.secondDose.length - 1]?.slice(0, 15) == Date().toString().slice(0, 15)
        const third =  row.thirdDose?.[row.thirdDose.length-1]?.slice(0, 15) == Date().toString().slice(0,15)
        const boxOne = async (e) => {
          if (e.target.checked) {
            setTick(!tick);
            console.log("Checkbox 1 was checked");
            const currentDate = new Date().toString();
            const response = await axios.patch(
              `/api/nurse/dosage/${row._id}`,
              {
                firstDose: currentDate,
              },
              {
                headers: {
                  Authorization: `Bearer ${nurse.token}`,
                },
              }
            );
            console.log(response.data);
          }
          
          // Call function for checkbox 1
        };

        const boxTwo = async (e) => {
          // Call function for checkbox 2
          if (e.target.checked) {
            setTick(!tick);
            console.log("Checkbox 2 was checked");
            const currentDate = new Date().toString();

            const response = await axios.patch(
              `/api/nurse/dosage/${row._id}`,
              {
                secondDose: currentDate,
              },
              {
                headers: {
                  Authorization: `Bearer ${nurse.token}`,
                },
              }
            );
            console.log(response.data);
          }
        };

        const boxThree = async (e) => {
          // Call function for checkbox 3
          if (e.target.checked) {
            setTick(!tick);
            console.log("Checkbox 3 was checked");
            const currentDate = new Date().toString();

            const response = await axios.patch(
              `/api/nurse/dosage/${row._id}`,
              {
                thirdDose: currentDate,
              },
              {
                headers: {
                  Authorization: `Bearer ${nurse.token}`,
                },
              }
            );
            console.log(response.data);
          }
        };

        return (
          <div className="flex gap-2">
            <input type="checkbox" checked={first} onChange={boxOne} />
            <input type="checkbox" checked={second} onChange={boxTwo} />
            <input type="checkbox" checked={third} onChange={boxThree} />
          </div>
        );
      },
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

export default PrescribedDrugs;
