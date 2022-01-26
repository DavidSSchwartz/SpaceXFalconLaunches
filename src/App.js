import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './utils/api';
import Search from './components/Search';
import Spinner from './components/Spinner';

const url = 'https://api.spacexdata.com/v4/launches';

function App() {

  const [ data, setData ] = useState({});
  const [ loading, setLoading ] = useState(true);

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
        <Spinner />
        :
        <Search
          data = { data }
        />
      }
    </div>
  );
}

export default App;
