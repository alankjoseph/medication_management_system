import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
export default function ListTable(props) {
    const [data, setData] = useState([]);
    const [search, setsearch] = useState("");
    const [filterData, setFilterData] = useState([]);
    const getData = async () => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v2/all"
            );
            setData(response.data);
            setFilterData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    const columns = [
        {
            name: "ID",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.nativeName,
        },
        {
            name: "Mobile",
            selector: (row) => row.capital,
        },
        {
            name: "Age",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: "Department",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: "ON/OFF duty",
            selector: (row) => <img width={50} height={50} src={row.flag} />,
        },
        {
            name: "Action",
            cell: (row) => (
                <button className="bg-green-600 h-8 w-14 text-base font-semibold rounded">
                    Edit
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
        <DataTable
            title={<h1 className="font-semibold text-4xl">{props.title}</h1>}
            columns={columns}
            data={filterData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            highlightOnHover
            actions={
                <Link to={props.link}>
                    <button className="bg-lime-500 h-10 shadow  text-base font-semibold w-32 rounded-md">
                        Add {props.button}
                    </button>
                </Link>
            }
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
