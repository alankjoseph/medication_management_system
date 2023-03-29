import React from "react";
import DataTable from "react-data-table-component";
import { AiOutlineArrowDown } from "react-icons/ai";
import { GrCheckboxSelected } from "react-icons/gr";

const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#2d4d52",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "bold",
      color: "white",
    },
  },

  cells: {
    style: {
      fontSize: "14px",
      color: "#222222",
      backgroundColor: "#b5b9ba",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#4f819e",
      color: "white",
    },
  },
};
function BaseTable(props) {
  return (
    <div style={{ border: "1px solid black", padding:'1px', background:'black', }}>
      <DataTable
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        highlightOnHover
        selectableRowsComponentProps={selectProps}
        customStyles={customStyles}
        {...props}
      />
    </div>
  );
}

export default BaseTable;
