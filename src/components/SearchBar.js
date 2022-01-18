import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {

    const handleChange = (ev) => {
       ev.target.value
    }

    return (
        <div className='search-bar-container'>
            <FontAwesomeIcon icon={faSearch} />
            <input 
                type='text'
                placeholder='Search by name...'
                onChange = {handleChange}
            />
        </div>
    )
}

export default SearchBar;
