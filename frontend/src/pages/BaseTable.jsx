import React from 'react'
import DataTable from 'react-data-table-component';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {GrCheckboxSelected} from 'react-icons/gr'

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };
function BaseTable(props) {
  return (
    <DataTable
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            highlightOnHover
            selectableRowsComponentProps={selectProps}
            {...props}
        />
  )
}

export default BaseTable