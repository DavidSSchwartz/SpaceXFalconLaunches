import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
            (sortInfo?.field === field
            &&
            {
                'asc': <FontAwesomeIcon icon={faSortUp} />,
                'desc': <FontAwesomeIcon icon={faSortDown} />
            }[sortInfo?.direction]) || <FontAwesomeIcon icon={faSort} />
        )
    }

    const rowData = sortedData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.links.patch.small} alt={item.links.patch.small ? 'patch' : 'no-image-available'}/>
                                </td>
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
                                    {item.success ? 
                                        <FontAwesomeIcon 
                                            icon={faCheck} 
                                            style={{color: 'green'}}
                                        />
                                        : 
                                        <FontAwesomeIcon 
                                            icon={faTimes} 
                                            style={{color: 'red'}}
                                        />    
                                    }
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
                    <th></th>
                    <th onClick={() => setUpSort('name')}>
                        Name
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
                    <th className='tableDetailsHeader'>
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
