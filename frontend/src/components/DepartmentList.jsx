import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseTable from "../pages/BaseTable";

function MyComponent() {
    const [data, setData] = useState([]);
    const [search, setsearch] = useState("");
    const [filterData, setFilterData] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:4000/api/superAdmin/department"
            );
            setData(response.data);
            setFilterData(response.data)
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
        },
        {
            name: "Number of Beds",
            selector: (row) => row.beds,
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
            title={<h1 className="font-semibold text-4xl">Department List</h1>}
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
                <Link to={'/addDepartment'}>
                    <button className="bg-lime-500 h-10 shadow  text-base font-semibold  px-4 py-2 rounded-md">
                        Add Department
                    </button>
                </Link>
            }
            
        />
    );
}

export default MyComponent;
