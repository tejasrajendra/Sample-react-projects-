import React from 'react';


const Table = (props) => {

    console.log(JSON.stringify(props.tableData, null, 2));
    return (
        <div>
            <thead>
                <th>
                    firstName
                </th>
                <th>
                    LastName
                </th>
                <th>
                    email
                </th>
            </thead>
            <tbody>
                {
                    props.tableData.map((rowData, index) => (
                        <tr key={index}>
                        <td>
                            <td>{rowData.firstName}</td>
                            <td>{rowData.lastName}</td>
                            <td>{rowData.email}</td>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
            
        </div>
    )

}

export default Table ;