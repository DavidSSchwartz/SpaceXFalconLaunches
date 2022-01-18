import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './utils/api';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';

const url = 'https://api.spacexdata.com/v4/launches';

function App() {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData(url)
      .then(res => {
        setData(res);
        setLoading(false);
      });
  },[]);

  return (
    <div className="App">
      {loading ?
        <p>
          loading
        </p>
        :
        <>
          <SearchBar
            
          />

          <DataTable 
            data = {data}
          />
        </>
      }
    </div>
  );
}

export default App;
