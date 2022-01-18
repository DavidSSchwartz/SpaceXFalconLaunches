import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
    return (
        <div className='search-bar-container'>
            <FontAwesomeIcon icon={faSearch} />
            <input 
                type='text'
                placeholder='Search by name...'
            />
        </div>
    )
}

export default SearchBar;
