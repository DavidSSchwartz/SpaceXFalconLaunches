import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const DataTable = ({ data }) => {
    const [ sortInfo, setSortInfo ] = useState(null);
    
    let sortedData = [...data];

    if (sortInfo !== null) {
        sortedData.sort((a, b) => {
            if (a[sortInfo.field] < b[sortInfo.field]) {
                return sortInfo.direction === 'asc' ? -1 : 1;
            }
            if (a[sortInfo.field] > b[sortInfo.field]) {
                return sortInfo.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    const setUpSort = (field) => {
        let direction = 'asc';
        if (sortInfo?.field === field && sortInfo.direction === 'asc') {
          direction = 'desc';
        }
        setSortInfo({ field, direction });
    }

    const sortIcon = (field) => {
        return (
            sortInfo?.field === field
            &&
             {
                'asc': <FontAwesomeIcon icon={faSortUp} />,
                'desc': <FontAwesomeIcon icon={faSortDown} />
             }[sortInfo?.direction] || <FontAwesomeIcon icon={faSort} />
        )
    }

    const rowData = sortedData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {new Date(item.date_local).toDateString()}
                                </td>
                                <td>
                                    {item.flight_number}
                                </td>
                                <td>
                                    {item.success ? '^' : 'x'}
                                </td>
                                <td className='tableDetails'>
                                    {item.details}
                                </td>
                            </tr>
                        )
                    });

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => setUpSort('name')}>
                        Name
                        {/* {
                            sortInfo?.field === 'name' 
                            &&
                            (sortInfo?.direction === 'asc' && <FontAwesomeIcon icon={faSortUp} />)
                            ||
                            (sortInfo?.direction === 'desc' && <FontAwesomeIcon icon={faSortDown} />)
                            ||
                            <FontAwesomeIcon icon={faSort} />
                        } */}
                           {sortIcon('name')}
                    </th>
                    <th onClick={() => setUpSort('date_local')}>
                        Date
                        {sortIcon('date_local')}
                    </th>
                    <th onClick={() => setUpSort('flight_number')}>
                        Flight Number
                        {sortIcon('flight_number')}
                    </th>
                    <th onClick={() => setUpSort('success')}>
                        Success
                        {sortIcon('success')}
                    </th>
                    <th>
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                {rowData}
            </tbody>
        </table>
    )
}

export default DataTable;
