import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './utils/api';

const url = 'https://api.spacexdata.com/v4/launches';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData(url)
      .then(res => setData(res));
  },[]);

  return (
    <div className="App">
      {data.toString()}
    </div>
  );
}

export default App;
