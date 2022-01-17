const DataTable = ({ data }) => {
    const rowData = data.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.date_local}</td>
                                <td>{item.flight_number}</td>
                                <td>{item.success ? '^' : 'x'}</td>
                                <td>{item.details}</td>
                            </tr>
                        )
                    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Flight Number</th>
                    <th>Success</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {rowData}
            </tbody>
        </table>
    )
}

export default DataTable;
