import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import ListTable from "./ListTable";

function ListDoctor(props) {
    const list =[
        {name:"Dr. Jackson", mobile:"3989393343", age:"23", department:"Oncology", duty:"ON",},
        {name:"Dr. Samuel", mobile:"9896785676", age:"55", department:"Oncology", duty:"ON",},
        {name:"Dr. John", mobile:"6546336577", age:"26", department:"Oncology", duty:"ON",},
    ]
    return (
        <>
            
            <ListTable title={props.title} button={props.button} api={props.api} link={props.link}/>
            
            
        </>
    );
}

export default ListDoctor;
