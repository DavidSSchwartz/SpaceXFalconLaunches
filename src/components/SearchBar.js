import { useState } from 'react';
import DataTable from './DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ data }) => {
    
    const [ searchTerm, setSearchTerm ] = useState('');

    const filteredData = data.filter(
        item => {
            return (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    );
    const handleChange = (ev) => {
       setSearchTerm(ev.target.value);
    }

    return (
        <div>
            <div className='search-bar-container'>
                <FontAwesomeIcon icon={faSearch} />
                <input 
                    type='text'
                    placeholder='Search by name...'
                    onChange = {handleChange}
                />
            </div>
            {filteredData.length === 0 ?
                <h2>No search results</h2>
            :
                <DataTable 
                    data = {filteredData}
                />
            }
        </div>
    )
}

export default SearchBar;
