import { useState } from 'react';
import DataTable from './DataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../spacex-logo.png';

const Search = ({ data }) => {
    
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
            <header>
                <img src={logo} className="" alt="logo" />
                <div className='search-bar-container'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input 
                        type='text'
                        placeholder='Search by name...'
                        onChange = {handleChange}
                    />
                </div>
            </header>
            <main>
                {filteredData.length === 0 ?
                    <h2>No search results</h2>
                :
                    <DataTable 
                        data = {filteredData}
                    />
                }
            </main>
        </div>
    )
}

export default Search;
