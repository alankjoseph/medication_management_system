import React, { Fragment, useEffect, useState } from "react";
import BaseTable from "../../pages/BaseTable";
import { useAuthContext } from "../../hooks/admin/useAuthContext";
import { useParams } from "react-router-dom";
import axios from "../../instance/axios";
function MedicationTime() {
  const { doctor } = useAuthContext();
  const { id } = useParams();
  const [drugs, setDrugs] = useState([]);
  let [date, setDate] = useState('')

  const getPrescription = async () => {
    try {
      const response = await axios.get(`/api/doctor/medicationTime/${id}`, {
        headers: {
          Authorization: `Bearer ${doctor.token}`,
        },
      });
      setDrugs(response.data);
      setDate(response.data[0].createdAt.slice(0,10))
      // console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getPrescription();
  }, []);
  useEffect(() => {
    console.log(drugs);
  }, [drugs]);
 


  return (
    <>
      <h1 className="text-4xl font-bold my-3">Medication Time</h1>

      <table className="table-auto mx-auto my-5">
        <thead>
          <tr>
            <th className="border border-slate-900 px-4 py-2">Drug Name</th>
            <th className="border border-slate-900 px-4 py-2">{date}</th>
            <th className="border border-slate-900 px-4 py-2">Column 3</th>
            <th className="border border-slate-900 px-4 py-2">Column 3</th>
          </tr>
        </thead>
        <tbody>
          {drugs.map((item, index) => {
            return (
              <>
                <tr>
                  <td className="border border-slate-900 px-4 py-2">{item.drugName}</td>
                  <td className="border border-slate-900 px-4 py-2">Row 1, Column 2</td>
                  <td className="border border-slate-900 px-4 py-2">Row 1, Column 3</td>
                  <td className="border border-slate-900 px-4 py-2">Row 1, Column 3</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MedicationTime;
